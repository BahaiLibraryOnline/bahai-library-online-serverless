/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDocumentCollection = /* GraphQL */ `
  subscription OnCreateDocumentCollection(
    $filter: ModelSubscriptionDocumentCollectionFilterInput
  ) {
    onCreateDocumentCollection(filter: $filter) {
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
export const onUpdateDocumentCollection = /* GraphQL */ `
  subscription OnUpdateDocumentCollection(
    $filter: ModelSubscriptionDocumentCollectionFilterInput
  ) {
    onUpdateDocumentCollection(filter: $filter) {
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
export const onDeleteDocumentCollection = /* GraphQL */ `
  subscription OnDeleteDocumentCollection(
    $filter: ModelSubscriptionDocumentCollectionFilterInput
  ) {
    onDeleteDocumentCollection(filter: $filter) {
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
export const onCreateDocumentContributor = /* GraphQL */ `
  subscription OnCreateDocumentContributor(
    $filter: ModelSubscriptionDocumentContributorFilterInput
  ) {
    onCreateDocumentContributor(filter: $filter) {
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
export const onUpdateDocumentContributor = /* GraphQL */ `
  subscription OnUpdateDocumentContributor(
    $filter: ModelSubscriptionDocumentContributorFilterInput
  ) {
    onUpdateDocumentContributor(filter: $filter) {
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
export const onDeleteDocumentContributor = /* GraphQL */ `
  subscription OnDeleteDocumentContributor(
    $filter: ModelSubscriptionDocumentContributorFilterInput
  ) {
    onDeleteDocumentContributor(filter: $filter) {
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
export const onCreateDocumentEdition = /* GraphQL */ `
  subscription OnCreateDocumentEdition(
    $filter: ModelSubscriptionDocumentEditionFilterInput
  ) {
    onCreateDocumentEdition(filter: $filter) {
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
export const onUpdateDocumentEdition = /* GraphQL */ `
  subscription OnUpdateDocumentEdition(
    $filter: ModelSubscriptionDocumentEditionFilterInput
  ) {
    onUpdateDocumentEdition(filter: $filter) {
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
export const onDeleteDocumentEdition = /* GraphQL */ `
  subscription OnDeleteDocumentEdition(
    $filter: ModelSubscriptionDocumentEditionFilterInput
  ) {
    onDeleteDocumentEdition(filter: $filter) {
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
export const onCreateDocumentLanguage = /* GraphQL */ `
  subscription OnCreateDocumentLanguage(
    $filter: ModelSubscriptionDocumentLanguageFilterInput
  ) {
    onCreateDocumentLanguage(filter: $filter) {
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
export const onUpdateDocumentLanguage = /* GraphQL */ `
  subscription OnUpdateDocumentLanguage(
    $filter: ModelSubscriptionDocumentLanguageFilterInput
  ) {
    onUpdateDocumentLanguage(filter: $filter) {
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
export const onDeleteDocumentLanguage = /* GraphQL */ `
  subscription OnDeleteDocumentLanguage(
    $filter: ModelSubscriptionDocumentLanguageFilterInput
  ) {
    onDeleteDocumentLanguage(filter: $filter) {
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
export const onCreateDocumentTag = /* GraphQL */ `
  subscription OnCreateDocumentTag(
    $filter: ModelSubscriptionDocumentTagFilterInput
  ) {
    onCreateDocumentTag(filter: $filter) {
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
export const onUpdateDocumentTag = /* GraphQL */ `
  subscription OnUpdateDocumentTag(
    $filter: ModelSubscriptionDocumentTagFilterInput
  ) {
    onUpdateDocumentTag(filter: $filter) {
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
export const onDeleteDocumentTag = /* GraphQL */ `
  subscription OnDeleteDocumentTag(
    $filter: ModelSubscriptionDocumentTagFilterInput
  ) {
    onDeleteDocumentTag(filter: $filter) {
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
export const onCreateDocumentSummary = /* GraphQL */ `
  subscription OnCreateDocumentSummary(
    $filter: ModelSubscriptionDocumentSummaryFilterInput
  ) {
    onCreateDocumentSummary(filter: $filter) {
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
export const onUpdateDocumentSummary = /* GraphQL */ `
  subscription OnUpdateDocumentSummary(
    $filter: ModelSubscriptionDocumentSummaryFilterInput
  ) {
    onUpdateDocumentSummary(filter: $filter) {
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
export const onDeleteDocumentSummary = /* GraphQL */ `
  subscription OnDeleteDocumentSummary(
    $filter: ModelSubscriptionDocumentSummaryFilterInput
  ) {
    onDeleteDocumentSummary(filter: $filter) {
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
export const onCreateCollectionDocuments = /* GraphQL */ `
  subscription OnCreateCollectionDocuments(
    $filter: ModelSubscriptionCollectionDocumentsFilterInput
  ) {
    onCreateCollectionDocuments(filter: $filter) {
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
export const onUpdateCollectionDocuments = /* GraphQL */ `
  subscription OnUpdateCollectionDocuments(
    $filter: ModelSubscriptionCollectionDocumentsFilterInput
  ) {
    onUpdateCollectionDocuments(filter: $filter) {
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
export const onDeleteCollectionDocuments = /* GraphQL */ `
  subscription OnDeleteCollectionDocuments(
    $filter: ModelSubscriptionCollectionDocumentsFilterInput
  ) {
    onDeleteCollectionDocuments(filter: $filter) {
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
export const onCreateContributorDocuments = /* GraphQL */ `
  subscription OnCreateContributorDocuments(
    $filter: ModelSubscriptionContributorDocumentsFilterInput
  ) {
    onCreateContributorDocuments(filter: $filter) {
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
export const onUpdateContributorDocuments = /* GraphQL */ `
  subscription OnUpdateContributorDocuments(
    $filter: ModelSubscriptionContributorDocumentsFilterInput
  ) {
    onUpdateContributorDocuments(filter: $filter) {
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
export const onDeleteContributorDocuments = /* GraphQL */ `
  subscription OnDeleteContributorDocuments(
    $filter: ModelSubscriptionContributorDocumentsFilterInput
  ) {
    onDeleteContributorDocuments(filter: $filter) {
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
export const onCreateEditionDocuments = /* GraphQL */ `
  subscription OnCreateEditionDocuments(
    $filter: ModelSubscriptionEditionDocumentsFilterInput
  ) {
    onCreateEditionDocuments(filter: $filter) {
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
export const onUpdateEditionDocuments = /* GraphQL */ `
  subscription OnUpdateEditionDocuments(
    $filter: ModelSubscriptionEditionDocumentsFilterInput
  ) {
    onUpdateEditionDocuments(filter: $filter) {
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
export const onDeleteEditionDocuments = /* GraphQL */ `
  subscription OnDeleteEditionDocuments(
    $filter: ModelSubscriptionEditionDocumentsFilterInput
  ) {
    onDeleteEditionDocuments(filter: $filter) {
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
export const onCreateLanguageDocuments = /* GraphQL */ `
  subscription OnCreateLanguageDocuments(
    $filter: ModelSubscriptionLanguageDocumentsFilterInput
  ) {
    onCreateLanguageDocuments(filter: $filter) {
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
export const onUpdateLanguageDocuments = /* GraphQL */ `
  subscription OnUpdateLanguageDocuments(
    $filter: ModelSubscriptionLanguageDocumentsFilterInput
  ) {
    onUpdateLanguageDocuments(filter: $filter) {
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
export const onDeleteLanguageDocuments = /* GraphQL */ `
  subscription OnDeleteLanguageDocuments(
    $filter: ModelSubscriptionLanguageDocumentsFilterInput
  ) {
    onDeleteLanguageDocuments(filter: $filter) {
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
export const onCreateTagDocuments = /* GraphQL */ `
  subscription OnCreateTagDocuments(
    $filter: ModelSubscriptionTagDocumentsFilterInput
  ) {
    onCreateTagDocuments(filter: $filter) {
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
export const onUpdateTagDocuments = /* GraphQL */ `
  subscription OnUpdateTagDocuments(
    $filter: ModelSubscriptionTagDocumentsFilterInput
  ) {
    onUpdateTagDocuments(filter: $filter) {
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
export const onDeleteTagDocuments = /* GraphQL */ `
  subscription OnDeleteTagDocuments(
    $filter: ModelSubscriptionTagDocumentsFilterInput
  ) {
    onDeleteTagDocuments(filter: $filter) {
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
export const onCreateDocument = /* GraphQL */ `
  subscription OnCreateDocument($filter: ModelSubscriptionDocumentFilterInput) {
    onCreateDocument(filter: $filter) {
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
export const onUpdateDocument = /* GraphQL */ `
  subscription OnUpdateDocument($filter: ModelSubscriptionDocumentFilterInput) {
    onUpdateDocument(filter: $filter) {
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
export const onDeleteDocument = /* GraphQL */ `
  subscription OnDeleteDocument($filter: ModelSubscriptionDocumentFilterInput) {
    onDeleteDocument(filter: $filter) {
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
