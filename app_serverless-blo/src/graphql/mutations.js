/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
          tagId
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
          tagId
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
          tagId
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
export const createCollection = /* GraphQL */ `
  mutation CreateCollection(
    $input: CreateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    createCollection(input: $input, condition: $condition) {
      name
      documents {
        items {
          id
          documentId
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
export const updateCollection = /* GraphQL */ `
  mutation UpdateCollection(
    $input: UpdateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    updateCollection(input: $input, condition: $condition) {
      name
      documents {
        items {
          id
          documentId
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
export const deleteCollection = /* GraphQL */ `
  mutation DeleteCollection(
    $input: DeleteCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    deleteCollection(input: $input, condition: $condition) {
      name
      documents {
        items {
          id
          documentId
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
export const createContributor = /* GraphQL */ `
  mutation CreateContributor(
    $input: CreateContributorInput!
    $condition: ModelContributorConditionInput
  ) {
    createContributor(input: $input, condition: $condition) {
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
export const updateContributor = /* GraphQL */ `
  mutation UpdateContributor(
    $input: UpdateContributorInput!
    $condition: ModelContributorConditionInput
  ) {
    updateContributor(input: $input, condition: $condition) {
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
export const deleteContributor = /* GraphQL */ `
  mutation DeleteContributor(
    $input: DeleteContributorInput!
    $condition: ModelContributorConditionInput
  ) {
    deleteContributor(input: $input, condition: $condition) {
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
export const createEdition = /* GraphQL */ `
  mutation CreateEdition(
    $input: CreateEditionInput!
    $condition: ModelEditionConditionInput
  ) {
    createEdition(input: $input, condition: $condition) {
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
export const updateEdition = /* GraphQL */ `
  mutation UpdateEdition(
    $input: UpdateEditionInput!
    $condition: ModelEditionConditionInput
  ) {
    updateEdition(input: $input, condition: $condition) {
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
export const deleteEdition = /* GraphQL */ `
  mutation DeleteEdition(
    $input: DeleteEditionInput!
    $condition: ModelEditionConditionInput
  ) {
    deleteEdition(input: $input, condition: $condition) {
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
export const createLanguage = /* GraphQL */ `
  mutation CreateLanguage(
    $input: CreateLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    createLanguage(input: $input, condition: $condition) {
      isCurrentDocument
      language
      documents {
        items {
          id
          documentId
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
export const updateLanguage = /* GraphQL */ `
  mutation UpdateLanguage(
    $input: UpdateLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    updateLanguage(input: $input, condition: $condition) {
      isCurrentDocument
      language
      documents {
        items {
          id
          documentId
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
export const deleteLanguage = /* GraphQL */ `
  mutation DeleteLanguage(
    $input: DeleteLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    deleteLanguage(input: $input, condition: $condition) {
      isCurrentDocument
      language
      documents {
        items {
          id
          documentId
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      language
      documents {
        items {
          id
          documentId
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      language
      documents {
        items {
          id
          documentId
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      language
      documents {
        items {
          id
          documentId
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
export const createSummary = /* GraphQL */ `
  mutation CreateSummary(
    $input: CreateSummaryInput!
    $condition: ModelSummaryConditionInput
  ) {
    createSummary(input: $input, condition: $condition) {
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
export const updateSummary = /* GraphQL */ `
  mutation UpdateSummary(
    $input: UpdateSummaryInput!
    $condition: ModelSummaryConditionInput
  ) {
    updateSummary(input: $input, condition: $condition) {
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
export const deleteSummary = /* GraphQL */ `
  mutation DeleteSummary(
    $input: DeleteSummaryInput!
    $condition: ModelSummaryConditionInput
  ) {
    deleteSummary(input: $input, condition: $condition) {
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
      collectionId
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
export const updateCollectionDocuments = /* GraphQL */ `
  mutation UpdateCollectionDocuments(
    $input: UpdateCollectionDocumentsInput!
    $condition: ModelCollectionDocumentsConditionInput
  ) {
    updateCollectionDocuments(input: $input, condition: $condition) {
      id
      documentId
      collectionId
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
export const deleteCollectionDocuments = /* GraphQL */ `
  mutation DeleteCollectionDocuments(
    $input: DeleteCollectionDocumentsInput!
    $condition: ModelCollectionDocumentsConditionInput
  ) {
    deleteCollectionDocuments(input: $input, condition: $condition) {
      id
      documentId
      collectionId
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
export const createContributorDocuments = /* GraphQL */ `
  mutation CreateContributorDocuments(
    $input: CreateContributorDocumentsInput!
    $condition: ModelContributorDocumentsConditionInput
  ) {
    createContributorDocuments(input: $input, condition: $condition) {
      id
      documentId
      contributorId
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
export const updateContributorDocuments = /* GraphQL */ `
  mutation UpdateContributorDocuments(
    $input: UpdateContributorDocumentsInput!
    $condition: ModelContributorDocumentsConditionInput
  ) {
    updateContributorDocuments(input: $input, condition: $condition) {
      id
      documentId
      contributorId
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
export const deleteContributorDocuments = /* GraphQL */ `
  mutation DeleteContributorDocuments(
    $input: DeleteContributorDocumentsInput!
    $condition: ModelContributorDocumentsConditionInput
  ) {
    deleteContributorDocuments(input: $input, condition: $condition) {
      id
      documentId
      contributorId
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
export const createEditionDocuments = /* GraphQL */ `
  mutation CreateEditionDocuments(
    $input: CreateEditionDocumentsInput!
    $condition: ModelEditionDocumentsConditionInput
  ) {
    createEditionDocuments(input: $input, condition: $condition) {
      id
      documentId
      editionId
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
export const updateEditionDocuments = /* GraphQL */ `
  mutation UpdateEditionDocuments(
    $input: UpdateEditionDocumentsInput!
    $condition: ModelEditionDocumentsConditionInput
  ) {
    updateEditionDocuments(input: $input, condition: $condition) {
      id
      documentId
      editionId
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
export const deleteEditionDocuments = /* GraphQL */ `
  mutation DeleteEditionDocuments(
    $input: DeleteEditionDocumentsInput!
    $condition: ModelEditionDocumentsConditionInput
  ) {
    deleteEditionDocuments(input: $input, condition: $condition) {
      id
      documentId
      editionId
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
export const createLanguageDocuments = /* GraphQL */ `
  mutation CreateLanguageDocuments(
    $input: CreateLanguageDocumentsInput!
    $condition: ModelLanguageDocumentsConditionInput
  ) {
    createLanguageDocuments(input: $input, condition: $condition) {
      id
      documentId
      languageId
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
export const updateLanguageDocuments = /* GraphQL */ `
  mutation UpdateLanguageDocuments(
    $input: UpdateLanguageDocumentsInput!
    $condition: ModelLanguageDocumentsConditionInput
  ) {
    updateLanguageDocuments(input: $input, condition: $condition) {
      id
      documentId
      languageId
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
export const deleteLanguageDocuments = /* GraphQL */ `
  mutation DeleteLanguageDocuments(
    $input: DeleteLanguageDocumentsInput!
    $condition: ModelLanguageDocumentsConditionInput
  ) {
    deleteLanguageDocuments(input: $input, condition: $condition) {
      id
      documentId
      languageId
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
export const createTagDocuments = /* GraphQL */ `
  mutation CreateTagDocuments(
    $input: CreateTagDocumentsInput!
    $condition: ModelTagDocumentsConditionInput
  ) {
    createTagDocuments(input: $input, condition: $condition) {
      id
      documentId
      tagId
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
export const updateTagDocuments = /* GraphQL */ `
  mutation UpdateTagDocuments(
    $input: UpdateTagDocumentsInput!
    $condition: ModelTagDocumentsConditionInput
  ) {
    updateTagDocuments(input: $input, condition: $condition) {
      id
      documentId
      tagId
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
export const deleteTagDocuments = /* GraphQL */ `
  mutation DeleteTagDocuments(
    $input: DeleteTagDocumentsInput!
    $condition: ModelTagDocumentsConditionInput
  ) {
    deleteTagDocuments(input: $input, condition: $condition) {
      id
      documentId
      tagId
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
