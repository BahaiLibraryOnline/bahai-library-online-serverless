/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCollectionDocuments = /* GraphQL */ `
  query GetCollectionDocuments($id: ID!) {
    getCollectionDocuments(id: $id) {
      id
      documentId
      documentfilename
      collectionId
      document {
        id
        audioVersion
        blo2018Id
        collections {
          nextToken
        }
        contributors {
          nextToken
        }
        crossReferences
        dateOriginalPublication
        dateCurrentPublication
        description
        editions {
          nextToken
        }
        filename
        fileSize
        languages {
          nextToken
        }
        locales
        notes
        pageRange
        pageTotal
        permissionType
        phelpsInfo
        subtitle
        tags {
          nextToken
        }
        title
        views
        createdAt
        updatedAt
      }
      collection {
        name
        documents {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCollectionDocuments = /* GraphQL */ `
  query ListCollectionDocuments(
    $filter: ModelCollectionDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollectionDocuments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentfilename
        collectionId
        document {
          id
          audioVersion
          blo2018Id
          crossReferences
          dateOriginalPublication
          dateCurrentPublication
          description
          filename
          fileSize
          locales
          notes
          pageRange
          pageTotal
          permissionType
          phelpsInfo
          subtitle
          title
          views
          createdAt
          updatedAt
        }
        collection {
          name
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContributorDocuments = /* GraphQL */ `
  query GetContributorDocuments($id: ID!) {
    getContributorDocuments(id: $id) {
      id
      documentId
      documentfilename
      contributorId
      document {
        id
        audioVersion
        blo2018Id
        collections {
          nextToken
        }
        contributors {
          nextToken
        }
        crossReferences
        dateOriginalPublication
        dateCurrentPublication
        description
        editions {
          nextToken
        }
        filename
        fileSize
        languages {
          nextToken
        }
        locales
        notes
        pageRange
        pageTotal
        permissionType
        phelpsInfo
        subtitle
        tags {
          nextToken
        }
        title
        views
        createdAt
        updatedAt
      }
      contributor {
        firstNames
        surnames
        publicationFirstNames
        publicationSurnames
        isAuthor
        isEditor
        isTranslator
        isCompiler
        isIllustrator
        isOther
        otherDescription
        documents {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listContributorDocuments = /* GraphQL */ `
  query ListContributorDocuments(
    $filter: ModelContributorDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContributorDocuments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentfilename
        contributorId
        document {
          id
          audioVersion
          blo2018Id
          crossReferences
          dateOriginalPublication
          dateCurrentPublication
          description
          filename
          fileSize
          locales
          notes
          pageRange
          pageTotal
          permissionType
          phelpsInfo
          subtitle
          title
          views
          createdAt
          updatedAt
        }
        contributor {
          firstNames
          surnames
          publicationFirstNames
          publicationSurnames
          isAuthor
          isEditor
          isTranslator
          isCompiler
          isIllustrator
          isOther
          otherDescription
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEditionDocuments = /* GraphQL */ `
  query GetEditionDocuments($id: ID!) {
    getEditionDocuments(id: $id) {
      id
      documentId
      documentfilename
      editionId
      document {
        id
        audioVersion
        blo2018Id
        collections {
          nextToken
        }
        contributors {
          nextToken
        }
        crossReferences
        dateOriginalPublication
        dateCurrentPublication
        description
        editions {
          nextToken
        }
        filename
        fileSize
        languages {
          nextToken
        }
        locales
        notes
        pageRange
        pageTotal
        permissionType
        phelpsInfo
        subtitle
        tags {
          nextToken
        }
        title
        views
        createdAt
        updatedAt
      }
      edition {
        city
        date
        isbn
        isCurrentDocument
        originalTitle
        pageRange
        publication
        publisher
        volume
        documents {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEditionDocuments = /* GraphQL */ `
  query ListEditionDocuments(
    $filter: ModelEditionDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEditionDocuments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentfilename
        editionId
        document {
          id
          audioVersion
          blo2018Id
          crossReferences
          dateOriginalPublication
          dateCurrentPublication
          description
          filename
          fileSize
          locales
          notes
          pageRange
          pageTotal
          permissionType
          phelpsInfo
          subtitle
          title
          views
          createdAt
          updatedAt
        }
        edition {
          city
          date
          isbn
          isCurrentDocument
          originalTitle
          pageRange
          publication
          publisher
          volume
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLanguageDocuments = /* GraphQL */ `
  query GetLanguageDocuments($id: ID!) {
    getLanguageDocuments(id: $id) {
      id
      documentId
      documentfilename
      languageId
      document {
        id
        audioVersion
        blo2018Id
        collections {
          nextToken
        }
        contributors {
          nextToken
        }
        crossReferences
        dateOriginalPublication
        dateCurrentPublication
        description
        editions {
          nextToken
        }
        filename
        fileSize
        languages {
          nextToken
        }
        locales
        notes
        pageRange
        pageTotal
        permissionType
        phelpsInfo
        subtitle
        tags {
          nextToken
        }
        title
        views
        createdAt
        updatedAt
      }
      language {
        isCurrentDocument
        language
        documents {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLanguageDocuments = /* GraphQL */ `
  query ListLanguageDocuments(
    $filter: ModelLanguageDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLanguageDocuments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentfilename
        languageId
        document {
          id
          audioVersion
          blo2018Id
          crossReferences
          dateOriginalPublication
          dateCurrentPublication
          description
          filename
          fileSize
          locales
          notes
          pageRange
          pageTotal
          permissionType
          phelpsInfo
          subtitle
          title
          views
          createdAt
          updatedAt
        }
        language {
          isCurrentDocument
          language
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTagDocuments = /* GraphQL */ `
  query GetTagDocuments($id: ID!) {
    getTagDocuments(id: $id) {
      id
      documentId
      documentfilename
      tagId
      document {
        id
        audioVersion
        blo2018Id
        collections {
          nextToken
        }
        contributors {
          nextToken
        }
        crossReferences
        dateOriginalPublication
        dateCurrentPublication
        description
        editions {
          nextToken
        }
        filename
        fileSize
        languages {
          nextToken
        }
        locales
        notes
        pageRange
        pageTotal
        permissionType
        phelpsInfo
        subtitle
        tags {
          nextToken
        }
        title
        views
        createdAt
        updatedAt
      }
      tag {
        language
        documents {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTagDocuments = /* GraphQL */ `
  query ListTagDocuments(
    $filter: ModelTagDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTagDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        documentId
        documentfilename
        tagId
        document {
          id
          audioVersion
          blo2018Id
          crossReferences
          dateOriginalPublication
          dateCurrentPublication
          description
          filename
          fileSize
          locales
          notes
          pageRange
          pageTotal
          permissionType
          phelpsInfo
          subtitle
          title
          views
          createdAt
          updatedAt
        }
        tag {
          language
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const collectionDocumentsByDocumentIdAndDocumentfilename = /* GraphQL */ `
  query CollectionDocumentsByDocumentIdAndDocumentfilename(
    $documentId: ID!
    $documentfilename: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCollectionDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    collectionDocumentsByDocumentIdAndDocumentfilename(
      documentId: $documentId
      documentfilename: $documentfilename
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentfilename
        collectionId
        document {
          id
          audioVersion
          blo2018Id
          crossReferences
          dateOriginalPublication
          dateCurrentPublication
          description
          filename
          fileSize
          locales
          notes
          pageRange
          pageTotal
          permissionType
          phelpsInfo
          subtitle
          title
          views
          createdAt
          updatedAt
        }
        collection {
          name
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const collectionDocumentsByCollectionId = /* GraphQL */ `
  query CollectionDocumentsByCollectionId(
    $collectionId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCollectionDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    collectionDocumentsByCollectionId(
      collectionId: $collectionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentfilename
        collectionId
        document {
          id
          audioVersion
          blo2018Id
          crossReferences
          dateOriginalPublication
          dateCurrentPublication
          description
          filename
          fileSize
          locales
          notes
          pageRange
          pageTotal
          permissionType
          phelpsInfo
          subtitle
          title
          views
          createdAt
          updatedAt
        }
        collection {
          name
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const contributorDocumentsByDocumentIdAndDocumentfilename = /* GraphQL */ `
  query ContributorDocumentsByDocumentIdAndDocumentfilename(
    $documentId: ID!
    $documentfilename: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelContributorDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contributorDocumentsByDocumentIdAndDocumentfilename(
      documentId: $documentId
      documentfilename: $documentfilename
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentfilename
        contributorId
        document {
          id
          audioVersion
          blo2018Id
          crossReferences
          dateOriginalPublication
          dateCurrentPublication
          description
          filename
          fileSize
          locales
          notes
          pageRange
          pageTotal
          permissionType
          phelpsInfo
          subtitle
          title
          views
          createdAt
          updatedAt
        }
        contributor {
          firstNames
          surnames
          publicationFirstNames
          publicationSurnames
          isAuthor
          isEditor
          isTranslator
          isCompiler
          isIllustrator
          isOther
          otherDescription
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const contributorDocumentsByContributorId = /* GraphQL */ `
  query ContributorDocumentsByContributorId(
    $contributorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContributorDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contributorDocumentsByContributorId(
      contributorId: $contributorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentfilename
        contributorId
        document {
          id
          audioVersion
          blo2018Id
          crossReferences
          dateOriginalPublication
          dateCurrentPublication
          description
          filename
          fileSize
          locales
          notes
          pageRange
          pageTotal
          permissionType
          phelpsInfo
          subtitle
          title
          views
          createdAt
          updatedAt
        }
        contributor {
          firstNames
          surnames
          publicationFirstNames
          publicationSurnames
          isAuthor
          isEditor
          isTranslator
          isCompiler
          isIllustrator
          isOther
          otherDescription
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const editionDocumentsByDocumentIdAndDocumentfilename = /* GraphQL */ `
  query EditionDocumentsByDocumentIdAndDocumentfilename(
    $documentId: ID!
    $documentfilename: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEditionDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    editionDocumentsByDocumentIdAndDocumentfilename(
      documentId: $documentId
      documentfilename: $documentfilename
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentfilename
        editionId
        document {
          id
          audioVersion
          blo2018Id
          crossReferences
          dateOriginalPublication
          dateCurrentPublication
          description
          filename
          fileSize
          locales
          notes
          pageRange
          pageTotal
          permissionType
          phelpsInfo
          subtitle
          title
          views
          createdAt
          updatedAt
        }
        edition {
          city
          date
          isbn
          isCurrentDocument
          originalTitle
          pageRange
          publication
          publisher
          volume
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const editionDocumentsByEditionId = /* GraphQL */ `
  query EditionDocumentsByEditionId(
    $editionId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEditionDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    editionDocumentsByEditionId(
      editionId: $editionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentfilename
        editionId
        document {
          id
          audioVersion
          blo2018Id
          crossReferences
          dateOriginalPublication
          dateCurrentPublication
          description
          filename
          fileSize
          locales
          notes
          pageRange
          pageTotal
          permissionType
          phelpsInfo
          subtitle
          title
          views
          createdAt
          updatedAt
        }
        edition {
          city
          date
          isbn
          isCurrentDocument
          originalTitle
          pageRange
          publication
          publisher
          volume
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const languageDocumentsByDocumentIdAndDocumentfilename = /* GraphQL */ `
  query LanguageDocumentsByDocumentIdAndDocumentfilename(
    $documentId: ID!
    $documentfilename: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLanguageDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    languageDocumentsByDocumentIdAndDocumentfilename(
      documentId: $documentId
      documentfilename: $documentfilename
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentfilename
        languageId
        document {
          id
          audioVersion
          blo2018Id
          crossReferences
          dateOriginalPublication
          dateCurrentPublication
          description
          filename
          fileSize
          locales
          notes
          pageRange
          pageTotal
          permissionType
          phelpsInfo
          subtitle
          title
          views
          createdAt
          updatedAt
        }
        language {
          isCurrentDocument
          language
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const languageDocumentsByLanguageId = /* GraphQL */ `
  query LanguageDocumentsByLanguageId(
    $languageId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLanguageDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    languageDocumentsByLanguageId(
      languageId: $languageId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentfilename
        languageId
        document {
          id
          audioVersion
          blo2018Id
          crossReferences
          dateOriginalPublication
          dateCurrentPublication
          description
          filename
          fileSize
          locales
          notes
          pageRange
          pageTotal
          permissionType
          phelpsInfo
          subtitle
          title
          views
          createdAt
          updatedAt
        }
        language {
          isCurrentDocument
          language
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const tagDocumentsByDocumentIdAndDocumentfilename = /* GraphQL */ `
  query TagDocumentsByDocumentIdAndDocumentfilename(
    $documentId: ID!
    $documentfilename: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTagDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tagDocumentsByDocumentIdAndDocumentfilename(
      documentId: $documentId
      documentfilename: $documentfilename
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentfilename
        tagId
        document {
          id
          audioVersion
          blo2018Id
          crossReferences
          dateOriginalPublication
          dateCurrentPublication
          description
          filename
          fileSize
          locales
          notes
          pageRange
          pageTotal
          permissionType
          phelpsInfo
          subtitle
          title
          views
          createdAt
          updatedAt
        }
        tag {
          language
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const tagDocumentsByTagId = /* GraphQL */ `
  query TagDocumentsByTagId(
    $tagId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTagDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tagDocumentsByTagId(
      tagId: $tagId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentfilename
        tagId
        document {
          id
          audioVersion
          blo2018Id
          crossReferences
          dateOriginalPublication
          dateCurrentPublication
          description
          filename
          fileSize
          locales
          notes
          pageRange
          pageTotal
          permissionType
          phelpsInfo
          subtitle
          title
          views
          createdAt
          updatedAt
        }
        tag {
          language
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDocument = /* GraphQL */ `
  query GetDocument($id: ID!, $filename: String!) {
    getDocument(id: $id, filename: $filename) {
      id
      audioVersion
      blo2018Id
      collections {
        items {
          id
          documentId
          documentfilename
          collectionId
          createdAt
          updatedAt
        }
        nextToken
      }
      contributors {
        items {
          id
          documentId
          documentfilename
          contributorId
          createdAt
          updatedAt
        }
        nextToken
      }
      crossReferences
      dateOriginalPublication
      dateCurrentPublication
      description
      editions {
        items {
          id
          documentId
          documentfilename
          editionId
          createdAt
          updatedAt
        }
        nextToken
      }
      filename
      fileSize
      languages {
        items {
          id
          documentId
          documentfilename
          languageId
          createdAt
          updatedAt
        }
        nextToken
      }
      locales
      notes
      pageRange
      pageTotal
      permissionType
      phelpsInfo
      subtitle
      tags {
        items {
          id
          documentId
          documentfilename
          tagId
          createdAt
          updatedAt
        }
        nextToken
      }
      title
      views
      createdAt
      updatedAt
    }
  }
`;
export const listDocuments = /* GraphQL */ `
  query ListDocuments(
    $id: ID
    $filename: ModelStringKeyConditionInput
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDocuments(
      id: $id
      filename: $filename
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        audioVersion
        blo2018Id
        collections {
          nextToken
        }
        contributors {
          nextToken
        }
        crossReferences
        dateOriginalPublication
        dateCurrentPublication
        description
        editions {
          nextToken
        }
        filename
        fileSize
        languages {
          nextToken
        }
        locales
        notes
        pageRange
        pageTotal
        permissionType
        phelpsInfo
        subtitle
        tags {
          nextToken
        }
        title
        views
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCollection = /* GraphQL */ `
  query GetCollection($id: ID!) {
    getCollection(id: $id) {
      name
      documents {
        items {
          id
          documentId
          documentfilename
          collectionId
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listCollections = /* GraphQL */ `
  query ListCollections(
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        documents {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContributor = /* GraphQL */ `
  query GetContributor($id: ID!) {
    getContributor(id: $id) {
      firstNames
      surnames
      publicationFirstNames
      publicationSurnames
      isAuthor
      isEditor
      isTranslator
      isCompiler
      isIllustrator
      isOther
      otherDescription
      documents {
        items {
          id
          documentId
          documentfilename
          contributorId
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listContributors = /* GraphQL */ `
  query ListContributors(
    $filter: ModelContributorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContributors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        firstNames
        surnames
        publicationFirstNames
        publicationSurnames
        isAuthor
        isEditor
        isTranslator
        isCompiler
        isIllustrator
        isOther
        otherDescription
        documents {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEdition = /* GraphQL */ `
  query GetEdition($id: ID!) {
    getEdition(id: $id) {
      city
      date
      isbn
      isCurrentDocument
      originalTitle
      pageRange
      publication
      publisher
      volume
      documents {
        items {
          id
          documentId
          documentfilename
          editionId
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listEditions = /* GraphQL */ `
  query ListEditions(
    $filter: ModelEditionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEditions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        city
        date
        isbn
        isCurrentDocument
        originalTitle
        pageRange
        publication
        publisher
        volume
        documents {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLanguage = /* GraphQL */ `
  query GetLanguage($id: ID!) {
    getLanguage(id: $id) {
      isCurrentDocument
      language
      documents {
        items {
          id
          documentId
          documentfilename
          languageId
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listLanguages = /* GraphQL */ `
  query ListLanguages(
    $filter: ModelLanguageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLanguages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        isCurrentDocument
        language
        documents {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      language
      documents {
        items {
          id
          documentId
          documentfilename
          tagId
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        language
        documents {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSummary = /* GraphQL */ `
  query GetSummary($id: ID!) {
    getSummary(id: $id) {
      filename
      collectionName
      contributorName
      dateCurrentPublication
      language
      title
      tag
      views
      id
      createdAt
      updatedAt
    }
  }
`;
export const listSummaries = /* GraphQL */ `
  query ListSummaries(
    $filter: ModelSummaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSummaries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        filename
        collectionName
        contributorName
        dateCurrentPublication
        language
        title
        tag
        views
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
