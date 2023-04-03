/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCollectionDocuments = /* GraphQL */ `
  subscription OnCreateCollectionDocuments(
    $filter: ModelSubscriptionCollectionDocumentsFilterInput
  ) {
    onCreateCollectionDocuments(filter: $filter) {
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
export const onUpdateCollectionDocuments = /* GraphQL */ `
  subscription OnUpdateCollectionDocuments(
    $filter: ModelSubscriptionCollectionDocumentsFilterInput
  ) {
    onUpdateCollectionDocuments(filter: $filter) {
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
export const onDeleteCollectionDocuments = /* GraphQL */ `
  subscription OnDeleteCollectionDocuments(
    $filter: ModelSubscriptionCollectionDocumentsFilterInput
  ) {
    onDeleteCollectionDocuments(filter: $filter) {
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
export const onCreateContributorDocuments = /* GraphQL */ `
  subscription OnCreateContributorDocuments(
    $filter: ModelSubscriptionContributorDocumentsFilterInput
  ) {
    onCreateContributorDocuments(filter: $filter) {
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
export const onUpdateContributorDocuments = /* GraphQL */ `
  subscription OnUpdateContributorDocuments(
    $filter: ModelSubscriptionContributorDocumentsFilterInput
  ) {
    onUpdateContributorDocuments(filter: $filter) {
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
export const onDeleteContributorDocuments = /* GraphQL */ `
  subscription OnDeleteContributorDocuments(
    $filter: ModelSubscriptionContributorDocumentsFilterInput
  ) {
    onDeleteContributorDocuments(filter: $filter) {
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
export const onCreateEditionDocuments = /* GraphQL */ `
  subscription OnCreateEditionDocuments(
    $filter: ModelSubscriptionEditionDocumentsFilterInput
  ) {
    onCreateEditionDocuments(filter: $filter) {
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
export const onUpdateEditionDocuments = /* GraphQL */ `
  subscription OnUpdateEditionDocuments(
    $filter: ModelSubscriptionEditionDocumentsFilterInput
  ) {
    onUpdateEditionDocuments(filter: $filter) {
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
export const onDeleteEditionDocuments = /* GraphQL */ `
  subscription OnDeleteEditionDocuments(
    $filter: ModelSubscriptionEditionDocumentsFilterInput
  ) {
    onDeleteEditionDocuments(filter: $filter) {
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
export const onCreateLanguageDocuments = /* GraphQL */ `
  subscription OnCreateLanguageDocuments(
    $filter: ModelSubscriptionLanguageDocumentsFilterInput
  ) {
    onCreateLanguageDocuments(filter: $filter) {
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
export const onUpdateLanguageDocuments = /* GraphQL */ `
  subscription OnUpdateLanguageDocuments(
    $filter: ModelSubscriptionLanguageDocumentsFilterInput
  ) {
    onUpdateLanguageDocuments(filter: $filter) {
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
export const onDeleteLanguageDocuments = /* GraphQL */ `
  subscription OnDeleteLanguageDocuments(
    $filter: ModelSubscriptionLanguageDocumentsFilterInput
  ) {
    onDeleteLanguageDocuments(filter: $filter) {
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
export const onCreateTagDocuments = /* GraphQL */ `
  subscription OnCreateTagDocuments(
    $filter: ModelSubscriptionTagDocumentsFilterInput
  ) {
    onCreateTagDocuments(filter: $filter) {
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
export const onUpdateTagDocuments = /* GraphQL */ `
  subscription OnUpdateTagDocuments(
    $filter: ModelSubscriptionTagDocumentsFilterInput
  ) {
    onUpdateTagDocuments(filter: $filter) {
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
export const onDeleteTagDocuments = /* GraphQL */ `
  subscription OnDeleteTagDocuments(
    $filter: ModelSubscriptionTagDocumentsFilterInput
  ) {
    onDeleteTagDocuments(filter: $filter) {
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
export const onCreateDocument = /* GraphQL */ `
  subscription OnCreateDocument($filter: ModelSubscriptionDocumentFilterInput) {
    onCreateDocument(filter: $filter) {
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
export const onUpdateDocument = /* GraphQL */ `
  subscription OnUpdateDocument($filter: ModelSubscriptionDocumentFilterInput) {
    onUpdateDocument(filter: $filter) {
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
export const onDeleteDocument = /* GraphQL */ `
  subscription OnDeleteDocument($filter: ModelSubscriptionDocumentFilterInput) {
    onDeleteDocument(filter: $filter) {
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
export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection(
    $filter: ModelSubscriptionCollectionFilterInput
  ) {
    onCreateCollection(filter: $filter) {
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
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection(
    $filter: ModelSubscriptionCollectionFilterInput
  ) {
    onUpdateCollection(filter: $filter) {
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
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection(
    $filter: ModelSubscriptionCollectionFilterInput
  ) {
    onDeleteCollection(filter: $filter) {
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
export const onCreateContributor = /* GraphQL */ `
  subscription OnCreateContributor(
    $filter: ModelSubscriptionContributorFilterInput
  ) {
    onCreateContributor(filter: $filter) {
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
export const onUpdateContributor = /* GraphQL */ `
  subscription OnUpdateContributor(
    $filter: ModelSubscriptionContributorFilterInput
  ) {
    onUpdateContributor(filter: $filter) {
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
export const onDeleteContributor = /* GraphQL */ `
  subscription OnDeleteContributor(
    $filter: ModelSubscriptionContributorFilterInput
  ) {
    onDeleteContributor(filter: $filter) {
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
export const onCreateEdition = /* GraphQL */ `
  subscription OnCreateEdition($filter: ModelSubscriptionEditionFilterInput) {
    onCreateEdition(filter: $filter) {
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
export const onUpdateEdition = /* GraphQL */ `
  subscription OnUpdateEdition($filter: ModelSubscriptionEditionFilterInput) {
    onUpdateEdition(filter: $filter) {
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
export const onDeleteEdition = /* GraphQL */ `
  subscription OnDeleteEdition($filter: ModelSubscriptionEditionFilterInput) {
    onDeleteEdition(filter: $filter) {
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
export const onCreateLanguage = /* GraphQL */ `
  subscription OnCreateLanguage($filter: ModelSubscriptionLanguageFilterInput) {
    onCreateLanguage(filter: $filter) {
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
export const onUpdateLanguage = /* GraphQL */ `
  subscription OnUpdateLanguage($filter: ModelSubscriptionLanguageFilterInput) {
    onUpdateLanguage(filter: $filter) {
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
export const onDeleteLanguage = /* GraphQL */ `
  subscription OnDeleteLanguage($filter: ModelSubscriptionLanguageFilterInput) {
    onDeleteLanguage(filter: $filter) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
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
