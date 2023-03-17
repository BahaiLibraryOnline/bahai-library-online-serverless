const mysql = require('mysql2/promise');
const AWS = require('aws-sdk');

AWS.config.credentials = new AWS.SharedIniFileCredentials({profile: 'blo'});
AWS.config.update({region: 'eu-north-1'});

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = 'Documents';

const connectionConfig = {
    host: 'localhost', port: 9306, user: 'bahai', password: 'development', database: 'bahai',
};

const fetchDocuments = async () => {
    const connection = await mysql.createConnection(connectionConfig);
    const [rows] = await connection.execute('SELECT * FROM `documents` limit 20');
    await connection.end();
    return rows;
};

const relationshipMappings = {
    document_authors: {
        relatedTable: 'authors',
        foreignKey: 'author_id',
    },
    document_collections: {
        relatedTable: 'collections',
        foreignKey: 'collections_id',
    },
    document_contributors: {
        relatedTable: 'contributors',
        foreignKey: 'contributor_id',
    },
    document_editions: {
        relatedTable: 'editions',
        foreignKey: 'edition_id',
    },
    document_languages: {
        relatedTable: 'languages',
        foreignKey: 'languages_id',
    },
    document_locales: {
        relatedTable: 'locales',
        foreignKey: 'locale_id',
    },
    document_tags: {
        relatedTable: 'tags',
        foreignKey: 'tag_id',
    },
};

async function fetchRelationshipForTable(linkingTable, relatedTable, documentId) {
    const connection = await mysql.createConnection(connectionConfig);
    const foreignKey = relationshipMappings[linkingTable].foreignKey;
    const query = `
        SELECT *
        FROM ${linkingTable}
                 INNER JOIN ${relatedTable} ON ${linkingTable}.${foreignKey} = ${relatedTable}.id
        WHERE ${linkingTable}.document_id = ?
    `;

    // console.log("Executing query:", query); // Add this line
    // console.log("Document ID:", documentId); // Add this line

    const [rows] = await connection.execute(query, [documentId]);
    await connection.end();

    // console.log("Query result:", rows); // Add this line

    return rows;
}



async function fetchRelationshipsTable(documentId) {
    const tables = [{linkingTable: "document_authors", relatedTable: "authors"}, {
        linkingTable: "document_editions",
        relatedTable: "editions"
    }, {linkingTable: "document_collections", relatedTable: "collections"}, {
        linkingTable: "document_contributors",
        relatedTable: "contributors"
    }, {
        linkingTable: "document_contributors",
        relatedTable: "contributor_roles"
    }, {linkingTable: "document_languages", relatedTable: "languages"}, {
        linkingTable: "document_tags",
        relatedTable: "tags"
    }, {linkingTable: "document_locales", relatedTable: "locales"}];

    const results = await Promise.all(tables.map(async ({linkingTable, relatedTable}) => {
        try {
            const data = await fetchRelationshipForTable(linkingTable, relatedTable, documentId);
            if (!data || data.length === 0) {
                console.log(`No related data found for table ${linkingTable} and document ID ${documentId}`);
                return [];
            }
            return data;
        } catch (error) {
            console.error(`Error fetching data for table ${linkingTable} and document ID ${documentId}: `, error);
            return [];
        }
    }));

    return {
        authors: results[0],
        editions: results[1],
        collections: results[2],
        contributors: results[3],
        languages: results[4],
        tags: results[5],
        locales: results[6]
    };
}

(async () => {
    try {
        const documentsData = await fetchDocuments();
        for (const document of documentsData) {
            const relationships = await fetchRelationshipsTable(document.id);
            document.authors_data = relationships.authors;
            document.collections_data = relationships.collections;
            document.contributors_data = relationships.contributors;
            document.editions_data = relationships.editions;
            document.languages_data = relationships.languages;
            document.locales_data = relationships.locales;
            document.tags_data = relationships.tags;
        }
        const createAuthors = (authorsData) => {
            return authorsData.map((author) => ({
                firstNames: author.first_names,
                surnames: author.surnames,
                publishedFirstNames: author.published_first_names,
                publishedSurnames: author.published_surnames,
            }));
        };

        const createEditions = (editionsData) => {
            return editionsData.map((edition) => ({
                originalTitle: edition.original_title,
                publication: edition.publication,
                volume: edition.volume,
                publisher: edition.publisher,
                city: edition.city,
                date: edition.date,
                isbn: edition.isbn,
                pageRange: edition.page_range,
                isCurrentDocument: edition.is_current_document,
            }));
        };

        const createCollections = (collectionsData) => {
            return collectionsData.map((collection) => collection.collection);
        };

        const createContributors = (contributorsData) => {
            const roles = {};

            contributorsData.forEach((contributor) => {
                if (!roles[contributor.role_id]) {
                    roles[contributor.role_id] = {
                        role: contributor.role, abbreviation: contributor.abbreviation,
                    };
                }
            });

            return contributorsData.map((contributor) => ({
                firstNames: contributor.first_names,
                surnames: contributor.surnames,
                role: roles[contributor.role_id].role,
                abbreviation: roles[contributor.role_id].abbreviation,
            }));
        };

        const createLanguages = (languagesData) => {
            return languagesData.map((language) => ({
                language: language.language, isCurrentDocument: language.is_current_document,
            }));
        };

        const createTags = (tagsData) => {
            return tagsData.map((tag) => tag.tag);
        };

        const createLocales = (localesData) => {
            return localesData.map((locale) => locale.locale);
        };

        const createDocuments = (documentsData) => {
            return documentsData.map((document) => ({
                documentId: String(document.id),
                filename: document.filename,
                title: document.title,
                subtitle: document.subtitle,
                description: document.description,
                notes: document.notes,
                phelps_info: document.phelps_info,
                file_size: document.file_size,
                page_total: document.page_total,
                cross_references: document.cross_references,
                audio_version: document.audio_version,
                permission_type: document.permission_type,
                views: document.views,
                authors: createAuthors(document.authors_data),
                editions: createEditions(document.editions_data),
                collections: createCollections(document.collections_data),
                contributors: createContributors(document.contributors_data),
                languages: createLanguages(document.languages_data),
                tags: createTags(document.tags_data),
                locales: createLocales(document.locales_data),
            }));
        };

        const createdDocuments = createDocuments(documentsData);

        for (const document of createdDocuments) {
            await insertDocument(document);
        }
    } catch (error) {
        console.error('Error fetching and processing documents data:', error);
    }
})();

const { v4: uuidv4 } = require('uuid');
async function insertDocument(document) {
    try {
        const timestamp = new Date().toISOString(); // Current timestamp in ISO format

        // Prepare the Item object for insertion
        const documentData = {
            TableName: tableName,
            Item: {
                documentId: uuidv4(), // Generate UUID for the new item
                filename: document.filename,
                title: document.title,
                subtitle: document.subtitle,
                description: document.description,
                notes: document.notes,
                phelps_info: document.phelps_info,
                file_size: document.file_size,
                page_total: document.page_total,
                cross_references: document.cross_references,
                audio_version: document.audio_version,
                permission_type: document.permission_type,
                views: document.views,
                authors: document.authors,
                editions: document.editions,
                collections: document.collections,
                contributors: document.contributors,
                languages: document.languages,
                tags: document.tags,
                locations: document.locales,
                blo2018_id: document.documentId,
                date_created: timestamp, // Set date_created field to the current timestamp
                date_updated: timestamp, // Set date_updated field to the current timestamp
            }
        };

        // Insert the document into the Documents table
        await dynamoDB.put(documentData).promise();
        console.log('Document inserted successfully: blo2018 ID ', documentData.Item.blo2018_id);
    } catch (error) {
        console.error(`Error inserting document ID ${document.documentId}: `, error);
    }
}
