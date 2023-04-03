const {S3} = require('aws-sdk');
const s3 = new S3();
const fs = require('fs');
const util = require('util');


const exec = util.promisify(require('child_process').exec);

const path = require('path');


exports.handler = async (event, context) => {
    const filename = event.filename || (event.body && JSON.parse(event.body).filename);
    const url = 'https://bahai-library.com/' + filename;
    const tempDir = "/tmp/bahai-library.com/"; // Get the temporary directory path
    const bucketName = 'bahai-library-online';

    try {
        const html = await scrapeHtml(url, filename, tempDir); // Destructure the returned object
        const links = await replaceLinks(html, bucketName);
        await uploadFileToS3(filename, links, bucketName);
        await deleteTempFiles(tempDir);
        console.log('success');
        return {
            statusCode: 200,
            body: JSON.stringify('Page scraped and saved successfully.'),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Error scraping and saving page.',
            }),
        };
    }
};

async function scrapeHtml(url, filename, tempDir) {
    const {stdout: stdout} = await exec(`/opt/bin/httrack --ext-depth=0 -w -q -%i -iC2 -D -p3 -#p -O /tmp/ ${url}`);
    return fs.readFileSync(`${tempDir}${filename}.html`, 'utf8');

}

async function replaceLinks(html, bucketName) {
    const bucketUrl = `https://${bucketName}.s3.eu-north-1.amazonaws.com`;
    const domainRegex = /href\s*=\s*"((?:https?:\/\/)?bahai-library\.com)/gi;
    html = html.replace(domainRegex, `href="${bucketUrl}`);

    const regex = /href\s*=\s*"https:\/\/bahai-library-online\.s3\.eu-north-1\.amazonaws\.com([^"]*)"/gi;
    let match;
    while ((match = regex.exec(html)) !== null) {
        const originalLink = match[1];
        let s3Link;

        if (originalLink === '/new') {
            s3Link = bucketUrl + '/new/index.html';
        } else if (originalLink.endsWith('/')) {
            s3Link = bucketUrl + originalLink + 'index.html';
        } else if (!originalLink.includes('.') && !originalLink.endsWith('/')) {
            s3Link = bucketUrl + originalLink + '.html';
        } else {
            s3Link = bucketUrl + originalLink;
        }

        html = html.replace(`href="${bucketUrl}${originalLink}"`, `href="${s3Link}"`);
    }

    console.log('Final HTML:', html);
    return html;
}

    async function uploadFileToS3(filename, html, bucketName) {
        const tmpPath = "/tmp/" + filename;
        fs.writeFileSync(tmpPath, html);
        const params = {
            Bucket: bucketName,
            Key: filename,
            Body: fs.createReadStream(tmpPath),
            ContentType: 'text/html',
        };

        return new Promise((resolve, reject) => {
            s3.upload(params, (err, data) => {
                if (err) {
                    console.error(err);
                    reject('Error uploading file to S3');
                } else {
                    console.log('File uploaded successfully to S3');
                    fs.unlinkSync(tmpPath); // Delete the file after uploading it to S3
                    resolve('uploaded file to S3');
                }
            });
        });
    }

    async function deleteTempFiles(tempDir) {
        if (fs.existsSync(tempDir)) {
            fs.readdirSync(tempDir).forEach((file, index) => {
                const curPath = path.join(tempDir, file);
                if (fs.lstatSync(curPath).isDirectory()) {
                    deleteTempFiles(curPath);
                } else {
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(tempDir);
        }
    }
