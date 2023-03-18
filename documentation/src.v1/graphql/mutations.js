/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDocument = /* GraphQL */ `
  mutation CreateDocument(
    $input: CreateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    createDocument(input: $input, condition: $condition) {
      id
      filename
      title
      subtitle
      description
      notes
      phelps_info
      file_size
      page_total
      cross_references
      audio_version
      permission_type
      views
      authors
      editions
      collections
      contributors
      languages
      tags
      locales
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
      id
      filename
      title
      subtitle
      description
      notes
      phelps_info
      file_size
      page_total
      cross_references
      audio_version
      permission_type
      views
      authors
      editions
      collections
      contributors
      languages
      tags
      locales
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
      id
      filename
      title
      subtitle
      description
      notes
      phelps_info
      file_size
      page_total
      cross_references
      audio_version
      permission_type
      views
      authors
      editions
      collections
      contributors
      languages
      tags
      locales
      createdAt
      updatedAt
    }
  }
`;
