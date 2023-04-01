const https = require('https');
const { S3 } = require('aws-sdk');
const s3 = new S3();

exports.handler = async (event, context) => {
    const filename = ismael_tests36;
    const url = 'https://bahai-library.com/' + filename;
    const bucketName = 'bahai-library-online';

    try {
        const html = await scrapeHtml(url);
        const links = await replaceLinks(html, bucketName);
        await uploadFileToS3(filename, links, bucketName);
        console.log('success');
        return {
            statusCode: 200,
            body: JSON.stringify('Page scraped and saved successfully.'),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify('Error scraping and saving page.'),
        };
    }
};

async function scrapeHtml(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let html = '';
            res.on('data', (chunk) => {
                html += chunk;
            });
            res.on('end', () => {
                resolve(html);
            });
        }).on('error', (error) => {
            reject('Error scraping HTML');
        });
    });
}

async function replaceLinks(html, bucketName) {
    const bucketUrl = `https://${bucketName}.s3.amazonaws.com/`;

    const regex = /href="([^"]*)"/gi;
    let match;
    while ((match = regex.exec(html)) !== null) {
        const originalLink = match[1];
        if (originalLink.startsWith('http')) {
            const path = new URL(originalLink).pathname;
            const s3Link = bucketUrl + path.slice(1);
            html = html.replace(originalLink, s3Link);
        }
    }

    return html;
}

async function uploadFileToS3(filename, html, bucketName) {
    const params = {
        Bucket: bucketName,
        Key: filename,
        Body: html,
        ContentType: 'text/html',
    };

    return new Promise((resolve, reject) => {
        s3.upload(params, (err, data) => {
            if (err) {
                console.error(err);
                reject('Error uploading file to S3');
            } else {
                resolve('uploaded file to S3');
            }
        });
    });
}
