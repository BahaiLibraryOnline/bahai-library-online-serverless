import React, {useState, useEffect} from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import {createDocument} from '../../../graphql/mutations';
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
            await AddDocumentFormValidationSchema.validate(documentData, { abortEarly: false });
            console.log(documentData);

            const input = {
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
                contributors: documentData.contributors ? documentData.contributors.map(({ name, email }) => ({ name, email })) : [],
                languages: documentData.languages,
                editions: documentData.editions,
                collections: documentData.collections ? documentData.collections.map(({ name }) => ({ name })) : [],
                tags: documentData.tags,
            };

            const result = await API.graphql(graphqlOperation(createDocument, { input }));
            console.log('Document created:', result.data.createDocument);
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
