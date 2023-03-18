/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteDocument = /* GraphQL */ `
  mutation DeleteDocument(
    $input: DeleteDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    deleteDocument(input: $input, condition: $condition) {
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
export const createDocumentCollection = /* GraphQL */ `
  mutation CreateDocumentCollection(
    $input: CreateDocumentCollectionInput!
    $condition: ModelDocumentCollectionConditionInput
  ) {
    createDocumentCollection(input: $input, condition: $condition) {
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
export const updateDocumentCollection = /* GraphQL */ `
  mutation UpdateDocumentCollection(
    $input: UpdateDocumentCollectionInput!
    $condition: ModelDocumentCollectionConditionInput
  ) {
    updateDocumentCollection(input: $input, condition: $condition) {
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
export const deleteDocumentCollection = /* GraphQL */ `
  mutation DeleteDocumentCollection(
    $input: DeleteDocumentCollectionInput!
    $condition: ModelDocumentCollectionConditionInput
  ) {
    deleteDocumentCollection(input: $input, condition: $condition) {
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
export const createDocumentContributor = /* GraphQL */ `
  mutation CreateDocumentContributor(
    $input: CreateDocumentContributorInput!
    $condition: ModelDocumentContributorConditionInput
  ) {
    createDocumentContributor(input: $input, condition: $condition) {
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
export const updateDocumentContributor = /* GraphQL */ `
  mutation UpdateDocumentContributor(
    $input: UpdateDocumentContributorInput!
    $condition: ModelDocumentContributorConditionInput
  ) {
    updateDocumentContributor(input: $input, condition: $condition) {
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
export const deleteDocumentContributor = /* GraphQL */ `
  mutation DeleteDocumentContributor(
    $input: DeleteDocumentContributorInput!
    $condition: ModelDocumentContributorConditionInput
  ) {
    deleteDocumentContributor(input: $input, condition: $condition) {
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
export const createDocumentEdition = /* GraphQL */ `
  mutation CreateDocumentEdition(
    $input: CreateDocumentEditionInput!
    $condition: ModelDocumentEditionConditionInput
  ) {
    createDocumentEdition(input: $input, condition: $condition) {
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
export const updateDocumentEdition = /* GraphQL */ `
  mutation UpdateDocumentEdition(
    $input: UpdateDocumentEditionInput!
    $condition: ModelDocumentEditionConditionInput
  ) {
    updateDocumentEdition(input: $input, condition: $condition) {
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
export const deleteDocumentEdition = /* GraphQL */ `
  mutation DeleteDocumentEdition(
    $input: DeleteDocumentEditionInput!
    $condition: ModelDocumentEditionConditionInput
  ) {
    deleteDocumentEdition(input: $input, condition: $condition) {
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
export const createDocumentLanguage = /* GraphQL */ `
  mutation CreateDocumentLanguage(
    $input: CreateDocumentLanguageInput!
    $condition: ModelDocumentLanguageConditionInput
  ) {
    createDocumentLanguage(input: $input, condition: $condition) {
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
export const updateDocumentLanguage = /* GraphQL */ `
  mutation UpdateDocumentLanguage(
    $input: UpdateDocumentLanguageInput!
    $condition: ModelDocumentLanguageConditionInput
  ) {
    updateDocumentLanguage(input: $input, condition: $condition) {
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
export const deleteDocumentLanguage = /* GraphQL */ `
  mutation DeleteDocumentLanguage(
    $input: DeleteDocumentLanguageInput!
    $condition: ModelDocumentLanguageConditionInput
  ) {
    deleteDocumentLanguage(input: $input, condition: $condition) {
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
export const createDocumentTag = /* GraphQL */ `
  mutation CreateDocumentTag(
    $input: CreateDocumentTagInput!
    $condition: ModelDocumentTagConditionInput
  ) {
    createDocumentTag(input: $input, condition: $condition) {
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
export const updateDocumentTag = /* GraphQL */ `
  mutation UpdateDocumentTag(
    $input: UpdateDocumentTagInput!
    $condition: ModelDocumentTagConditionInput
  ) {
    updateDocumentTag(input: $input, condition: $condition) {
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
export const deleteDocumentTag = /* GraphQL */ `
  mutation DeleteDocumentTag(
    $input: DeleteDocumentTagInput!
    $condition: ModelDocumentTagConditionInput
  ) {
    deleteDocumentTag(input: $input, condition: $condition) {
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
export const createDocumentSummary = /* GraphQL */ `
  mutation CreateDocumentSummary(
    $input: CreateDocumentSummaryInput!
    $condition: ModelDocumentSummaryConditionInput
  ) {
    createDocumentSummary(input: $input, condition: $condition) {
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
export const updateDocumentSummary = /* GraphQL */ `
  mutation UpdateDocumentSummary(
    $input: UpdateDocumentSummaryInput!
    $condition: ModelDocumentSummaryConditionInput
  ) {
    updateDocumentSummary(input: $input, condition: $condition) {
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
export const deleteDocumentSummary = /* GraphQL */ `
  mutation DeleteDocumentSummary(
    $input: DeleteDocumentSummaryInput!
    $condition: ModelDocumentSummaryConditionInput
  ) {
    deleteDocumentSummary(input: $input, condition: $condition) {
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
export const createCollectionDocuments = /* GraphQL */ `
  mutation CreateCollectionDocuments(
    $input: CreateCollectionDocumentsInput!
    $condition: ModelCollectionDocumentsConditionInput
  ) {
    createCollectionDocuments(input: $input, condition: $condition) {
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
export const updateCollectionDocuments = /* GraphQL */ `
  mutation UpdateCollectionDocuments(
    $input: UpdateCollectionDocumentsInput!
    $condition: ModelCollectionDocumentsConditionInput
  ) {
    updateCollectionDocuments(input: $input, condition: $condition) {
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
export const deleteCollectionDocuments = /* GraphQL */ `
  mutation DeleteCollectionDocuments(
    $input: DeleteCollectionDocumentsInput!
    $condition: ModelCollectionDocumentsConditionInput
  ) {
    deleteCollectionDocuments(input: $input, condition: $condition) {
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
export const createContributorDocuments = /* GraphQL */ `
  mutation CreateContributorDocuments(
    $input: CreateContributorDocumentsInput!
    $condition: ModelContributorDocumentsConditionInput
  ) {
    createContributorDocuments(input: $input, condition: $condition) {
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
export const updateContributorDocuments = /* GraphQL */ `
  mutation UpdateContributorDocuments(
    $input: UpdateContributorDocumentsInput!
    $condition: ModelContributorDocumentsConditionInput
  ) {
    updateContributorDocuments(input: $input, condition: $condition) {
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
export const deleteContributorDocuments = /* GraphQL */ `
  mutation DeleteContributorDocuments(
    $input: DeleteContributorDocumentsInput!
    $condition: ModelContributorDocumentsConditionInput
  ) {
    deleteContributorDocuments(input: $input, condition: $condition) {
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
export const createEditionDocuments = /* GraphQL */ `
  mutation CreateEditionDocuments(
    $input: CreateEditionDocumentsInput!
    $condition: ModelEditionDocumentsConditionInput
  ) {
    createEditionDocuments(input: $input, condition: $condition) {
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
export const updateEditionDocuments = /* GraphQL */ `
  mutation UpdateEditionDocuments(
    $input: UpdateEditionDocumentsInput!
    $condition: ModelEditionDocumentsConditionInput
  ) {
    updateEditionDocuments(input: $input, condition: $condition) {
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
export const deleteEditionDocuments = /* GraphQL */ `
  mutation DeleteEditionDocuments(
    $input: DeleteEditionDocumentsInput!
    $condition: ModelEditionDocumentsConditionInput
  ) {
    deleteEditionDocuments(input: $input, condition: $condition) {
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
export const createLanguageDocuments = /* GraphQL */ `
  mutation CreateLanguageDocuments(
    $input: CreateLanguageDocumentsInput!
    $condition: ModelLanguageDocumentsConditionInput
  ) {
    createLanguageDocuments(input: $input, condition: $condition) {
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
export const updateLanguageDocuments = /* GraphQL */ `
  mutation UpdateLanguageDocuments(
    $input: UpdateLanguageDocumentsInput!
    $condition: ModelLanguageDocumentsConditionInput
  ) {
    updateLanguageDocuments(input: $input, condition: $condition) {
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
export const deleteLanguageDocuments = /* GraphQL */ `
  mutation DeleteLanguageDocuments(
    $input: DeleteLanguageDocumentsInput!
    $condition: ModelLanguageDocumentsConditionInput
  ) {
    deleteLanguageDocuments(input: $input, condition: $condition) {
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
export const createTagDocuments = /* GraphQL */ `
  mutation CreateTagDocuments(
    $input: CreateTagDocumentsInput!
    $condition: ModelTagDocumentsConditionInput
  ) {
    createTagDocuments(input: $input, condition: $condition) {
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
export const updateTagDocuments = /* GraphQL */ `
  mutation UpdateTagDocuments(
    $input: UpdateTagDocumentsInput!
    $condition: ModelTagDocumentsConditionInput
  ) {
    updateTagDocuments(input: $input, condition: $condition) {
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
export const deleteTagDocuments = /* GraphQL */ `
  mutation DeleteTagDocuments(
    $input: DeleteTagDocumentsInput!
    $condition: ModelTagDocumentsConditionInput
  ) {
    deleteTagDocuments(input: $input, condition: $condition) {
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
export const createDocument = /* GraphQL */ `
  mutation CreateDocument(
    $input: CreateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    createDocument(input: $input, condition: $condition) {
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
export const updateDocument = /* GraphQL */ `
  mutation UpdateDocument(
    $input: UpdateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    updateDocument(input: $input, condition: $condition) {
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
