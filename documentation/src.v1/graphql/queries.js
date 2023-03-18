/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDocument = /* GraphQL */ `
  query GetDocument($id: ID!) {
    getDocument(id: $id) {
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
export const listDocuments = /* GraphQL */ `
  query ListDocuments(
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
