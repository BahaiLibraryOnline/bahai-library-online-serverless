import React, {useState, useEffect} from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import {
    createDocument,
    createContributor,
    createContributorDocuments,
    createCollection,
    createCollectionDocuments,
    createLanguage,
    createLanguageDocuments,
    createEdition,
    createEditionDocuments,
    createTag,
    createTagDocuments
} from '../../../graphql/mutations';

import DocumentFormInputs from './DocumentFormInputs';
import EditionsFormInputs from './EditionsFormInputs';
import ContributorsFormInputs from './ContributorsFormInputs';
import LanguagesFormInputs from './LanguagesFormInputs';
import CollectionsFormInputs from './CollectionsFormInputs';
import TagsFormInputs from './TagsFormInputs';
import AddDocumentFormValidationSchema from './AddDocumentFormValidationSchema';
import {v4 as uuidv4} from 'uuid';

const createRelationshipMutation = {
    // createContributor,
    // createContributorDocuments,
    createCollection,
    createCollectionDocuments,
    // createLanguage,
    // createLanguageDocuments,
    // createEdition,
    // createEditionDocuments,
    // createTag,
    // createTagDocuments
}
const AddDocumentForm = () => {
        const initialDocumentId = uuidv4();

        const initialDocumentObject = {
            id: uuidv4(),
            filename: uuidv4(),
            collections: uuidv4(),
            contributors:undefined,
            languages: undefined,
            editions: undefined,
            tags: undefined
        }
        const initialCollectionObject = {
            id: initialDocumentObject.collections,
            name: "test collection name",
            documents: undefined
        }

        const initialCollectionDocumentsObject = {
            documentfilename: initialDocumentObject.filename,
            collectionId: initialDocumentObject.collectionId,
            documentId: initialDocumentObject.id
        }



        const initialDocumentData = {
            id: initialDocumentId,
            filename: '',
            title: '',
            subtitle: '',
            description: '',
            dateCurrentPublication: '',
            dateOriginalPublication: '',
            notes: '',
            phelpsInfo: '',
            audioVersion: '',
            locales: '',
            crossReferences: '',
            permissionType: '',
            pageRange: '',
            pageTotal: undefined,
            fileSize: undefined,
            // contributors: [{id: uuidv4()}],
            // languages: [{id: uuidv4()}],
            // editions: [{id: uuidv4()}],
            collections: uuidv4(),
            // tags: [{id: uuidv4()}],
        };

        const [documentData, setDocumentData] = useState(initialDocumentData);
        useEffect(() => {
            setDocumentData(initialDocumentData);
        }, []);

        const handleChange = (event, key) => {
            setDocumentData({
                ...documentData,
                [key]: event.target.value,
            });
        };

        const handleContributorChange = (event, index, key) => {
            const updatedContributors = [...documentData.contributors];
            updatedContributors[index] = {
                ...updatedContributors[index],
                [key]: event.target.type === "checkbox" ? event.target.checked : event.target.value,
            };
            setDocumentData({
                ...documentData,
                contributors: updatedContributors,
            });
        };

        const handleAddContributor = () => {
            setDocumentData({
                ...documentData,
                contributors: [...documentData.contributors, {
                    id: uuidv4(),
                }],
            });
        };

        const handleRemoveContributor = (index) => {
            setDocumentData({
                ...documentData,
                contributors: documentData.contributors.filter((_, i) => i !== index),
            });
        };

        const handleAddCollection = () => {
            setDocumentData({
                ...documentData,
                collections: [
                    ...documentData.collections,
                    {
                        id: uuidv4(),
                        documentID: documentData.id
                    }
                ]
            });
        };


        const handleRemoveCollection = (index) => {
            setDocumentData({
                ...documentData,
                collections: [
                    ...documentData.collections.slice(0, index),
                    ...documentData.collections.slice(index + 1),
                ],
            });
        };

        const handleCollectionChange = (event, index) => {
            const updatedCollections = [...documentData.collections];
            updatedCollections[index] = {
                ...updatedCollections[index],
                name: event.target.value,
            };
            setDocumentData({
                ...documentData,
                collections: updatedCollections,
            });
        };

        const handleAddLanguage = () => {
            setDocumentData({
                ...documentData,
                languages: [
                    ...documentData.languages,
                    {
                        id: uuidv4(),
                        language: ""
                    },
                ],
            });
        };

        const handleRemoveLanguage = (index) => {
            setDocumentData({
                ...documentData,
                languages: [
                    ...documentData.languages.slice(0, index),
                    ...documentData.languages.slice(index + 1),
                ],
            });
        };

        const handleLanguageChange = (event, index, key, docIndex) => {
            if (key === "language") {
                setDocumentData({
                    ...documentData,
                    languages: [
                        ...documentData.languages.slice(0, index),
                        {
                            ...documentData.languages[index],
                            [key]: event.target.value,
                        },
                        ...documentData.languages.slice(index + 1),
                    ]
                });
            } else if (key === "documents") {
                const {value} = event.target;
                setDocumentData({
                    ...documentData,
                    languages: [
                        ...documentData.languages.slice(0, index),
                        {
                            ...documentData.languages[index],
                            [key]: [
                                ...documentData.languages[index].documents.slice(0, docIndex),
                                value, ...documentData.languages[index].documents.slice(docIndex + 1),
                            ],
                        },
                        ...documentData.languages.slice(index + 1),
                    ],
                });
            }
        };

        const handleAddEdition = () => {
            setDocumentData({
                ...documentData,
                editions: [
                    ...documentData.editions,
                    {
                        id: uuidv4(),
                        city: '',
                        date: '',
                        isbn: '',
                        isCurrentDocument: false,
                        originalTitle: '',
                        pageRange: '',
                        publication: '',
                        publisher: '',
                        volume: '',
                    },
                ],
            });
        };

        const handleRemoveEdition = (index) => {
            setDocumentData({
                ...documentData,
                editions: [
                    ...documentData.editions.slice(0, index),
                    ...documentData.editions.slice(index + 1),
                ],
            });
        };

        const handleEditionChange = (event, index, key) => {
            const {value} = event.target;
            setDocumentData({
                ...documentData,
                editions: [
                    ...documentData.editions.slice(0, index),
                    {
                        ...documentData.editions[index],
                        [key]: value,
                    },
                    ...documentData.editions.slice(index + 1),
                ],
            });
        };

        const handleAddTag = () => {
            setDocumentData({
                ...documentData,
                tags: [...documentData.tags, {
                    id: uuidv4(),
                    name: ""
                }],
            });
        };

        const handleRemoveTag = (index) => {
            setDocumentData({
                ...documentData,
                tags: documentData.tags.filter((_, i) => i !== index),
            });
        };

        const handleTagChange = (event, index) => {
            setDocumentData({
                ...documentData,
                tags: [
                    ...documentData.tags.slice(0, index),
                    event.target.value,
                    ...documentData.tags.slice(index + 1),
                ],
            });
        };
        const removeErrorElement = (field) => {
            const inputElement = document.querySelector(`[id="${field}"]`);
            const errorElement = inputElement.previousSibling;
            if (errorElement && errorElement.tagName === 'P') {
                errorElement.parentNode.removeChild(errorElement);
                inputElement.style.border = '';
            }
        };

        const displayErrors = (errors) => {

            const errorMessages = errors.inner.map((error) => error.message);
            alert(`Validation errors:\n${errorMessages.join('\n')}`);
            errors.inner.forEach((error) => {
                const field = error.path;
                const inputElement = document.querySelector(`[id="${field}"]`);
                const errorElement = document.createElement('p');
                errorElement.innerText = error.message;
                errorElement.style.color = 'red';
                inputElement.parentNode.insertBefore(errorElement, inputElement);
                inputElement.style.border = '2px solid red';
            });
        };




    const handleSubmit = async (event) => {
        event.preventDefault();

        // Remove any previous error messages from the form
        const inputFields = document.querySelectorAll('input');
        inputFields.forEach((input) => removeErrorElement(input.id));

        try {
            // console.log(documentData);
            // await AddDocumentFormValidationSchema.validate(documentData, { abortEarly: false });
            // // const documentId = documentData.id;
            // const filename = documentData.filename;
            // const collectionID = documentData.collections


            // mutation MyMutation($filename: String = "trythis", $collectionId: ID = "abc123", $id: ID = "abc234") {
            //   createDocument(input: {filename: $filename, title: "testing iterations", collections: [$collectionId], id: $id}) {
            //     id
            //   }
            //   createCollection(input: {id: $collectionId, name: "trying again and again"}) {
            //     id
            //   }
            // }


            // const createdoc = await API.graphql(
            //     graphqlOperation(createDocument, { input: initialDocumentObject })
            // );
            // console.log(createdoc)
            //
            // await Promise.allSettled([createdoc])

            const createcoll = await API.graphql(
                graphqlOperation(createCollection, { input: initialCollectionObject })
            );
            console.log(createcoll)
            await Promise.allSettled([createcoll])
            //
            //
            // await API.graphql(
            //     graphqlOperation(createCollectionDocuments, { input: initialCollectionDocumentsObject })
            // );





            alert('Document created successfully');

        } catch (error) {
                console.error('Error creating document:', error);
                displayErrors(error);
            }
        };


        return (
            <form onSubmit={handleSubmit}>
                <h3>Document</h3>

                {/* Document */}
                <DocumentFormInputs documentData={documentData} handleChange={handleChange}/>

                Contributors
                {/*<ContributorsFormInputs*/}
                {/*    contributors={documentData.contributors}*/}
                {/*    handleAddContributor={handleAddContributor}*/}
                {/*    handleRemoveContributor={handleRemoveContributor}*/}
                {/*    handleContributorChange={handleContributorChange}*/}
                {/*/>*/}

                {/* Collections */}
                <CollectionsFormInputs
                    collections={documentData.collections}
                    handleAddCollection={handleAddCollection}
                    handleRemoveCollection={handleRemoveCollection}
                    handleCollectionChange={handleCollectionChange}
                />

                {/*/!* Languages *!/*/}
                {/*<LanguagesFormInputs*/}
                {/*    languages={documentData.languages}*/}
                {/*    handleAddLanguage={handleAddLanguage}*/}
                {/*    handleRemoveLanguage={handleRemoveLanguage}*/}
                {/*    handleLanguageChange={handleLanguageChange}*/}
                {/*/>*/}

                {/*/!* Editions *!/*/}
                {/*<EditionsFormInputs*/}
                {/*    editions={documentData.editions}*/}
                {/*    handleAddEdition={handleAddEdition}*/}
                {/*    handleRemoveEdition={handleRemoveEdition}*/}
                {/*    handleEditionChange={handleEditionChange}*/}
                {/*/>*/}

                {/*/!* Tags *!/*/}
                {/*<TagsFormInputs*/}
                {/*    tags={documentData.tags}*/}
                {/*    handleAddTag={handleAddTag}*/}
                {/*    handleRemoveTag={handleRemoveTag}*/}
                {/*    handleTagChange={handleTagChange}*/}
                {/*/>*/}

                <button type="submit">Add Document</button>
            </form>
        );
    }
;

export default AddDocumentForm;
// mutation MyMutation($filename: String = "9992", $collectionId: ID = "9992", $id: ID = "9992") {
//   createDocument(input: {filename: $filename, title: "9992", collections: [$collectionId], id: $id}) {
//     id
//   }
//   createCollectionDocuments(input: {collectionId: $collectionId, documentId: $id, documentfilename: $filename}) {
//     id
//   }
//   createCollection(input: {id: $collectionId, name: "9992"}) {
//     id
//   }
// }