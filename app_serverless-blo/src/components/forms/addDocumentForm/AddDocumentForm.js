import React, {useState, useEffect} from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import {
    createDocument as createDocumentMutation,
    createContributor as createContributorMutation,
    createContributorDocuments as createContributorDocumentsMutation,
    createCollection as createCollectionMutation,
    createCollectionDocuments as createCollectionDocumentsMutation,
    createLanguage as createLanguageMutation,
    createLanguageDocuments as createLanguageDocumentsMutation,
    createEdition as createEditionMutation,
    createEditionDocuments as createEditionDocumentsMutation,
    createTag as createTagMutation,
    createTagDocuments as createTagDocumentsMutation,
} from '../../../graphql/mutations';

import DocumentFormInputs from './DocumentFormInputs';
import EditionsFormInputs from './EditionsFormInputs';
import ContributorsFormInputs from './ContributorsFormInputs';
import LanguagesFormInputs from './LanguagesFormInputs';
import CollectionsFormInputs from './CollectionsFormInputs';
import TagsFormInputs from './TagsFormInputs';
import AddDocumentFormValidationSchema from './AddDocumentFormValidationSchema';

const AddDocumentForm = () => {
    const initialDocumentData = {
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
        contributors: [],
        languages: [],
        editions: [],
        collections: [],
        tags: [],
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
            contributors: [...documentData.contributors, {}],
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
            collections: [...documentData.collections, {name: ""}],
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
                    language: "",
                    documents: [],
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
            tags: [...documentData.tags, ""],
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
        try {
            await AddDocumentFormValidationSchema.validate(documentData, {abortEarly: false});
            console.log(documentData);

            const documentInput = {
                filename: documentData.filename,
                title: documentData.title,
                subtitle: documentData.subtitle,
                description: documentData.description,
                dateCurrentPublication: documentData.dateCurrentPublication,
                dateOriginalPublication: documentData.dateOriginalPublication,
                notes: documentData.notes,
                phelpsInfo: documentData.phelpsInfo,
                audioVersion: documentData.audioVersion,
                locales: documentData.locales,
                crossReferences: documentData.crossReferences,
                permissionType: documentData.permissionType,
                pageRange: documentData.pageRange,
                pageTotal: documentData.pageTotal,
                fileSize: documentData.fileSize,
            };

            const contributorsInput = {
                contributors: documentData.contributors ? documentData.contributors : [],
                language: documentData.languages,
                edition: documentData.editions,
                collection: documentData.collections ? documentData.collections : [],
                tags: documentData.tags,
            }

            const languagesInput = {
                language: documentData.languages,
            }

            const editionsInput = {
                edition: documentData.editions,
            }

            const collectionsInput = {
                collection: documentData.collections ? documentData.collections : [],
            }

            const tagsInput = {
                tags: documentData.tags,
            }


            // Create the document and get the autogenerated ID
            const documentResult = await API.graphql(graphqlOperation(createDocumentMutation, {input: documentInput}));
            const createdDocumentId = documentResult.data.createDocument.id;

// Create related entities with the generated ID
            const createRelatedEntities = async () => {
                // Create contributors and store their IDs
                const contributorIds = await Promise.all(documentData.contributors.map(async (contributor) => {
                    const result = await API.graphql(graphqlOperation(createContributorMutation, {
                        input: {
                            ...contributorsInput,
                            contributor
                        }
                    }));
                    return result.data.createContributor.id;
                }));

                // Create ContributorDocuments relationships
                const createContributorDocuments = contributorIds.map(contributorId => {
                    return API.graphql(graphqlOperation(createContributorDocumentsMutation, {
                        input: {
                            documentId: createdDocumentId,
                            contributorId
                        }
                    }));
                });

                // Create collections and store their IDs
                const collectionIds = await Promise.all(documentData.collections.map(async (collection) => {
                    const result = await API.graphql(graphqlOperation(createCollectionMutation, {
                        input: {
                            ...collectionsInput,
                            collection
                        }
                    }));
                    return result.data.createCollection.id;
                }));

                // Create CollectionDocuments relationships
                const createCollectionDocuments = collectionIds.map(collectionId => {
                    return API.graphql(graphqlOperation(createCollectionDocumentsMutation, {
                        input: {
                            documentId: createdDocumentId,
                            collectionId
                        }
                    }));
                });

                // Create editions and store their IDs
                const editionIds = await Promise.all(documentData.editions.map(async (edition) => {
                    const result = await API.graphql(graphqlOperation(createEditionMutation, {
                        input: {
                            ...editionsInput,
                            edition
                        }
                    }));
                    return result.data.createEdition.id;
                }));

                // Create EditionDocuments relationships
                const createEditionDocuments = editionIds.map(editionId => {
                    return API.graphql(graphqlOperation(createEditionDocumentsMutation, {
                        input: {
                            documentId: createdDocumentId,
                            editionId
                        }
                    }));
                });

                // Create languages and store their IDs
                const languageIds = await Promise.all(documentData.languages.map(async (language) => {
                    const result = await API.graphql(graphqlOperation(createLanguageMutation, {input: {...languagesInput, language}}));
                    return result.data.createLanguage.id;
                }));

                // Create LanguageDocuments relationships
                const createLanguageDocuments = languageIds.map(languageId => {
                    return API.graphql(graphqlOperation(createLanguageDocumentsMutation, {
                        input: {
                            documentId: createdDocumentId,
                            languageId
                        }
                    }));
                });

                // Create tags and store their IDs
                const tagIds = await Promise.all(documentData.tags.map(async (tag) => {
                    const result = await API.graphql(graphqlOperation(createTagMutation, {input: {...tagsInput, tag}}));
                    return result.data.createTag.id;
                }));

                // Create TagDocuments relationships
                const createTagDocuments = tagIds.map(tagId => {
                    return API.graphql(graphqlOperation(createTagDocumentsMutation, {
                        input: {
                            documentId: createdDocumentId,
                            tagId
                        }
                    }));
                });

                await Promise.all([...createContributorDocuments, ...createCollectionDocuments, ...createEditionDocuments, ...createLanguageDocuments, ...createTagDocuments]);
            };

            await createRelatedEntities();

            console.log('Document created:', documentResult.data.createDocument);

        } catch (errors) {
            console.error(errors);
            displayErrors(errors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Document</h3>

            {/* Document */}
            <DocumentFormInputs documentData={documentData} handleChange={handleChange}/>

            {/* Contributors */}
            <ContributorsFormInputs
                contributors={documentData.contributors}
                handleAddContributor={handleAddContributor}
                handleRemoveContributor={handleRemoveContributor}
                handleContributorChange={handleContributorChange}
            />

            {/* Collections */}
            <CollectionsFormInputs
                collections={documentData.collections}
                handleAddCollection={handleAddCollection}
                handleRemoveCollection={handleRemoveCollection}
                handleCollectionChange={handleCollectionChange}
            />

            {/* Languages */}
            <LanguagesFormInputs
                languages={documentData.languages}
                handleAddLanguage={handleAddLanguage}
                handleRemoveLanguage={handleRemoveLanguage}
                handleLanguageChange={handleLanguageChange}
            />

            {/* Editions */}
            <EditionsFormInputs
                editions={documentData.editions}
                handleAddEdition={handleAddEdition}
                handleRemoveEdition={handleRemoveEdition}
                handleEditionChange={handleEditionChange}
            />

            {/* Tags */}
            <TagsFormInputs
                tags={documentData.tags}
                handleAddTag={handleAddTag}
                handleRemoveTag={handleRemoveTag}
                handleTagChange={handleTagChange}
            />

            <button type="submit">Add Document</button>
        </form>
    );
};

export default AddDocumentForm;
