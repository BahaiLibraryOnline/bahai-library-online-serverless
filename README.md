# Serverless Bahai Library Online (BLO)
 
## Migration of bahai-library.com from legacy LAMP stack to AWS

### Problem
The current codebase and infrastructure of [bahai-library.com](bahai-library.com]) has reached a critical limit that seriously endangers the future of the project.

BLO was [built in 1997 in a traditional LAMP stack and architecturally upgraded up to 2012](https://bahai-library.com/winters_bahai_library_25). It has not had any major changes or upgrades since, and runs on PHP 5.6, which will be unsupported by BLO's current hosting in November 2023.

The technologies and architecture BLO currently runs on are fragile in many ways, from massive security risks to maintainability barriers, with hard limits on application development and growth.

The nature of its architecture, specially at the data layer which cannot handle man, means it cannot be simply modified (refactored) into a more maintainable codebase, or enhanced with modern features within its current form.

To make it maintainable and expandable it must either be rebuilt entirely, or eventually critically malfunction, be hacked, or both. This could happen in a few months or in a few years, and there is no way to predict it.

The current codebase was built in a necessarily ad-hoc way, meaning it's hard to understand without extensive familiarity with the ins and outs of its c.15,000 lines of code. It would take a senior developer 1-3 weeks of full time employment merely to understand the app well enough to begin to maintain it. This would be exacerbated in the absence of Baha'i context. Even with good familiarity, there is a high risk of side-effects from any code changes, a risk heightened if the developer is more junior.

This means that outside of Jonah Winters, its creator, it is currently very hard and/or very risky to onboard any new software maintainers, placing on Jonah the burden of being a single point of failure for the entire project.

Specifically, core issues include:

1) the current data structure in the database, which makes it hard to maintain and evolve, although Jonah Winters did exercise great care within the structure, making the migration doable.
2) the tight coupling of this data layer and the view, because of how many pages are stored in the database. This makes it very hard to break free from both, the old database, and the old view.
3) 100,000+ URLs, which need to be preserved for the 141,000 backlinks
4) a huge amount of archive metadata that also needs to be preserved
5) Significant vulnerabilities, mitigated but in need of remediation

### Solution
Baha'i library will now be developed entirely in the Cloud (Serverless) harnessing the infrastructure, tools and services available in Amazon's AWS.

### Architectural design work to date
Phase 1 of work has involved the following:
1. Assess and diagnose legacy BLO app as of 2023: codebase, database, view layer, URLs and backlinks, including backlink attacks, refactoring and rebuild alternatives.
   - Explore and compare Laravel, GCP and AWS rebuild routes
   - Select AWS for speed, versatility and customer service
2. Architectural strategy planning and design (see [ADR 1](/documentation/architecture/ADR1_LAMP_to_Serverless.md))
   - Research, rule out and select implementation alternatives, explore scenarios, estimate costs, roadmap and prioritise tasks
   - Validate architectural design concepts and AWS service orchestration choices in consultation with 4 AWS experts and solution architects over multiple meetings
   - Design and plan graceful failure and redundancy strategies
   - Design and plan a serverless API
3. Foundational data layer design (see [API docs](documentation/api_design/))

![api design](documentation/api_design/Data%20structure.png)

   - Design a preliminary data structure for the planned API
   - Draft an OpenAPI contract to enable API First design
   - Decide on the database paradigm to implement (current recommendation is NoSQL document database, DynamoDB or MongoDB/AtlasCloud, with the latter as likely choice)
   - Plan most direct line for implementing upload, filter and search
   - Plan the transform and eventual replace of the static HTML files in S3 with JSON files

### Infrastructure work to date
Infrastructure setup
   - Create new BLO Google Workspaces account
   - Create new BLO AWS account
   - Set up preliminary AWS IAM policies and permissions
   - Set up AWS cost controls (see [ADR 2](/documentation/architecture/ADR2_AWS_Cost_Control.md))
   - Create test implementations (S3, Cloudfront, API Gateway, Amplify, Lambda, SAM, ECR) to explore and rule out architectural strategies
   - Set up final S3 and Cloudfront static website
   - Set up public Github repository
   - Created a [docker-compose specification](docker-compose.yml) to run the legacy BLO mysql database locally
   - Provision an [Amplify backend](blo-backend/amplify/) including DynamoDB database and graphQL API

### Operational implementation work to date
The following implementation has been completed, additionally to from the architectural and technical planning and infrastructure set-up: 
1. Static site migration
   - Decouple the view from the data layer by scraping the webpages currently half stored as files and half as html and css in database entries.
   - Mirror & scrape >100,000 urls via httrack over several weeks while 1-3 proceeds iteratively
   - Upload the above data to an S3 bucket via the PUT API and expose it publicly as [a transitional but functional BLO website clone](https://bahai-library-online.s3.eu-north-1.amazonaws.com/index.html).
   - Expose new static site via CloudFront (https://bahai-library-online.s3.eu-north-1.amazonaws.com/index.html)
2. Legacy [mysql database migration, redesign and normalisation](blo-backend/databases/mysql/)
3. Conversion and [export of normalised MYSQL database data to DynamoDB document store](blo-backend/databases/mysql/BLO2023_normalised/exportMysqlToDynamoDB.js).
3. Draft [OpenApi specification](documentation/api_design/blo_openapi.json) as an option
3. Preliminary Serverless Application Model template for provisioning APIGateway. Considering Serverless Framework as an alternative that makes possible carbon aware computing patterns in future.
4. [GraphQL specification](documentation/api_design/blo2023_amplify_schema.graphql) for use with AWS Amplify with a [DynamoDB back end](blo-backend/databases/dynamodb/)
5. Prototype [React upload form for a new BLO metadata app](frontend) powered by GraphQL API and DynamoDB backend
6. Coded and provisioned transitional [serverless Lambda function](serverless-functions) to be able to use the legacy BLO edit functionality to add new materials and have the rendered page added to the S3 static clone until the new app is fully functional

### Documentation work to date
1. Readme
2. Preliminary data structure and API design and mapping ([API docs](/documentation/api))
3. Architectural Decision Records for Serverless choice and associated Cost Control (see [architecture docs](/documentation/architecture)
