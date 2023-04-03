# Serverless Baha'i Library Online Data Layer

The serverless Baha'i Library Online is hosted on DynamoDB on AWS via AWS Amplify. 

It is exposed via a GraphQL api defined in [schema.graphql](./../../../amplify/backend/api/bloapi/schema.graphql) in the amplify directory.


To ensure consistency and avoid side-effects any changes to DynamoDB should be implemented via the Amplify cli or console, with [schema.graphql](./../../../amplify/backend/api/bloapi/schema.graphql) as the source of truth.

The data from the legacy BLO site as of March 15, 2023 was normalised, converted and exported into new DynamoDB databases. The [mysql directory](data_layerql) contains the schemas and the normalisation and migration scripts used to achieve this. 