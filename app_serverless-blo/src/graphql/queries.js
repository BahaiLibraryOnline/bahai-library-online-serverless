/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDocumentCollection = /* GraphQL */ `
  query GetDocumentCollection($id: ID!) {
    getDocumentCollection(id: $id) {
      name
      documents {
        items {
          id
          documentId
          documentCollectionId
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
export const listDocumentCollections = /* GraphQL */ `
  query ListDocumentCollections(
    $filter: ModelDocumentCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocumentCollections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
export const getDocumentContributor = /* GraphQL */ `
  query GetDocumentContributor($id: ID!) {
    getDocumentContributor(id: $id) {
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
          documentContributorId
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
export const listDocumentContributors = /* GraphQL */ `
  query ListDocumentContributors(
    $filter: ModelDocumentContributorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocumentContributors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
export const getDocumentEdition = /* GraphQL */ `
  query GetDocumentEdition($id: ID!) {
    getDocumentEdition(id: $id) {
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
          documentEditionId
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
export const listDocumentEditions = /* GraphQL */ `
  query ListDocumentEditions(
    $filter: ModelDocumentEditionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocumentEditions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
export const getDocumentLanguage = /* GraphQL */ `
  query GetDocumentLanguage($id: ID!) {
    getDocumentLanguage(id: $id) {
      isCurrentDocument
      language
      documents {
        items {
          id
          documentId
          documentLanguageId
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
export const listDocumentLanguages = /* GraphQL */ `
  query ListDocumentLanguages(
    $filter: ModelDocumentLanguageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocumentLanguages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
export const getDocumentTag = /* GraphQL */ `
  query GetDocumentTag($id: ID!) {
    getDocumentTag(id: $id) {
      isCurrentDocument
      language
      documents {
        items {
          id
          documentId
          documentTagId
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
export const listDocumentTags = /* GraphQL */ `
  query ListDocumentTags(
    $filter: ModelDocumentTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocumentTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const getDocumentSummary = /* GraphQL */ `
  query GetDocumentSummary($id: ID!) {
    getDocumentSummary(id: $id) {
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
export const listDocumentSummaries = /* GraphQL */ `
  query ListDocumentSummaries(
    $filter: ModelDocumentSummaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocumentSummaries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
export const getCollectionDocuments = /* GraphQL */ `
  query GetCollectionDocuments($id: ID!) {
    getCollectionDocuments(id: $id) {
      id
      documentId
      documentCollectionId
      document {
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
        id
        createdAt
        updatedAt
      }
      documentCollection {
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
        documentCollectionId
        document {
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
          id
          createdAt
          updatedAt
        }
        documentCollection {
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
      documentContributorId
      document {
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
        id
        createdAt
        updatedAt
      }
      documentContributor {
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
        documentContributorId
        document {
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
          id
          createdAt
          updatedAt
        }
        documentContributor {
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
      documentEditionId
      document {
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
        id
        createdAt
        updatedAt
      }
      documentEdition {
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
        documentEditionId
        document {
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
          id
          createdAt
          updatedAt
        }
        documentEdition {
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
      documentLanguageId
      document {
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
        id
        createdAt
        updatedAt
      }
      documentLanguage {
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
        documentLanguageId
        document {
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
          id
          createdAt
          updatedAt
        }
        documentLanguage {
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
      documentTagId
      document {
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
        id
        createdAt
        updatedAt
      }
      documentTag {
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
        documentTagId
        document {
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
          id
          createdAt
          updatedAt
        }
        documentTag {
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
export const collectionDocumentsByDocumentId = /* GraphQL */ `
  query CollectionDocumentsByDocumentId(
    $documentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCollectionDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    collectionDocumentsByDocumentId(
      documentId: $documentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentCollectionId
        document {
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
          id
          createdAt
          updatedAt
        }
        documentCollection {
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
export const collectionDocumentsByDocumentCollectionId = /* GraphQL */ `
  query CollectionDocumentsByDocumentCollectionId(
    $documentCollectionId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCollectionDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    collectionDocumentsByDocumentCollectionId(
      documentCollectionId: $documentCollectionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentCollectionId
        document {
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
          id
          createdAt
          updatedAt
        }
        documentCollection {
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
export const contributorDocumentsByDocumentId = /* GraphQL */ `
  query ContributorDocumentsByDocumentId(
    $documentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContributorDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contributorDocumentsByDocumentId(
      documentId: $documentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentContributorId
        document {
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
          id
          createdAt
          updatedAt
        }
        documentContributor {
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
export const contributorDocumentsByDocumentContributorId = /* GraphQL */ `
  query ContributorDocumentsByDocumentContributorId(
    $documentContributorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContributorDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contributorDocumentsByDocumentContributorId(
      documentContributorId: $documentContributorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentContributorId
        document {
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
          id
          createdAt
          updatedAt
        }
        documentContributor {
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
export const editionDocumentsByDocumentId = /* GraphQL */ `
  query EditionDocumentsByDocumentId(
    $documentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEditionDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    editionDocumentsByDocumentId(
      documentId: $documentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentEditionId
        document {
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
          id
          createdAt
          updatedAt
        }
        documentEdition {
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
export const editionDocumentsByDocumentEditionId = /* GraphQL */ `
  query EditionDocumentsByDocumentEditionId(
    $documentEditionId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEditionDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    editionDocumentsByDocumentEditionId(
      documentEditionId: $documentEditionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentEditionId
        document {
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
          id
          createdAt
          updatedAt
        }
        documentEdition {
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
export const languageDocumentsByDocumentId = /* GraphQL */ `
  query LanguageDocumentsByDocumentId(
    $documentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLanguageDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    languageDocumentsByDocumentId(
      documentId: $documentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentLanguageId
        document {
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
          id
          createdAt
          updatedAt
        }
        documentLanguage {
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
export const languageDocumentsByDocumentLanguageId = /* GraphQL */ `
  query LanguageDocumentsByDocumentLanguageId(
    $documentLanguageId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLanguageDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    languageDocumentsByDocumentLanguageId(
      documentLanguageId: $documentLanguageId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentLanguageId
        document {
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
          id
          createdAt
          updatedAt
        }
        documentLanguage {
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
export const tagDocumentsByDocumentId = /* GraphQL */ `
  query TagDocumentsByDocumentId(
    $documentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTagDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tagDocumentsByDocumentId(
      documentId: $documentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentTagId
        document {
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
          id
          createdAt
          updatedAt
        }
        documentTag {
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
export const tagDocumentsByDocumentTagId = /* GraphQL */ `
  query TagDocumentsByDocumentTagId(
    $documentTagId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTagDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tagDocumentsByDocumentTagId(
      documentTagId: $documentTagId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentId
        documentTagId
        document {
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
          id
          createdAt
          updatedAt
        }
        documentTag {
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
export const getDocument = /* GraphQL */ `
  query GetDocument($id: ID!) {
    getDocument(id: $id) {
      audioVersion
      blo2018Id
      collections {
        items {
          id
          documentId
          documentCollectionId
          createdAt
          updatedAt
        }
        nextToken
      }
      contributors {
        items {
          id
          documentId
          documentContributorId
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
          documentEditionId
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
          documentLanguageId
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
          documentTagId
          createdAt
          updatedAt
        }
        nextToken
      }
      title
      views
      id
      createdAt
      updatedAt
    }
  }
`;
export const listDocuments = /* GraphQL */ `
  query ListDocuments(
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
