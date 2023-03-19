# DynamoDb database for serverless Baha'i Library Online

The serverless Baha'i Library Online is hosted on DynamoDB on AWS via AWS Amplify. 

Its database and tables are defined via the model definitions in [schema.graphql](./../../../amplify/backend/api/serverlessblo/schema.graphql) in the amplify directory.

They are then created, updated and built in DynamoDB via cloudformation specifications [in the amplify directory](./../../../amplify/backend/awscloudformation).

To ensure consistency and avoid side-effects any changes to DynamoDB should be implemented via the Amplify cli or console, rather than directly on DynamoDB, with [schema.graphql](./../../../amplify/backend/api/serverlessblo/schema.graphql) as the source of truth.

The data from the legacy BLO site as of March 15, 2023 was converted and exported into the new DynamoDB databases via [an export script](./../mysql/BLO2023_normalised/exportMysqlToDynamoDB.js).  