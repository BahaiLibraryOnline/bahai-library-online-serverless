import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import EditionsFormInputs from './EditionsFormInputs';
import AuthorsFormInputs from './AuthorsFormInputs';
import ContributorsFormInputs from './ContributorsFormInputs';
import LanguagesFormInputs from './LanguagesFormInputs';


const initialDocumentData = {
    documentId: {S: ''},
    audio_version: {S: ''},
    authors: {L: []},
    collections: {S: ''},
    contributors: {L: []},
    cross_references: {S: ''},
    date_created: {S: ''},
    date_updated: {S: ''},
    description: {S: ''},
    editions: {L: []},
    filename: {S: ''},
    file_size: {N: ''},
    languages: {L: []},
    locales: {S: ''},
    notes: {S: ''},
    page_total: {N: ''},
    permission_type: {S: ''},
    phelps_info: {S: ''},
    subtitle: {S: ''},
    tags: {S: ''},
    title: {S: ''},
    views: {N: '0'},
};

const AddDocumentForm = () => {
    const [documentData, setDocumentData] = useState(initialDocumentData);

    useEffect(() => {
        setDocumentData((prevState) => ({
            ...prevState,
            documentId: {S: uuidv4()},
            date_created: {S: new Date().toISOString()},
            date_updated: {S: new Date().toISOString()},
        }));
    }, []);

    const handleChange = (event, key, type) => {
        setDocumentData({
            ...documentData,
            [key]: {...documentData[key], [type]: event.target.value},
        });
    };

    const handleEditionChange = (event, index, key) => {
        const newArray = documentData.editions.L.slice();
        newArray[index] = {...newArray[index], M: {...newArray[index].M, [key]: {S: event.target.value}}};
        setDocumentData({...documentData, editions: {...documentData.editions, L: newArray}});
    };

    const handleAddEdition = () => {
        const newArray = documentData.editions.L.slice();
        newArray.push({
            M: {
                city: {S: ''},
                date: {S: ''},
                isbn: {S: ''},
                isCurrentDocument: {N: '0'},
                originalTitle: {S: ''},
                pageRange: {S: ''},
                publication: {S: ''},
                publisher: {S: ''},
                volume: {S: ''},
            },
        });
        setDocumentData({...documentData, editions: {...documentData.editions, L: newArray}});
    };

    const handleRemoveEdition = (index) => {
        const newArray = documentData.editions.L.slice();
        newArray.splice(index, 1);
        setDocumentData({...documentData, editions: {...documentData.editions, L: newArray}});
    };

    const handleAuthorChange = (event, index, key, type) => {
        const newArray = documentData.authors.L.slice();
        newArray[index] = {...newArray[index], M: {...newArray[index].M, [key]: {[type]: event.target.value}}};
        setDocumentData({...documentData, authors: {...documentData.authors, L: newArray}});
    };

    const handleAddAuthor = () => {
        const newArray = documentData.authors.L.slice();
        newArray.push({
            M: {
                firstNames: {S: ''},
                publishedFirstNames: {S: ''},
                publishedSurnames: {S: ''},
                surnames: {S: ''},
            },
        });
        setDocumentData({...documentData, authors: {...documentData.authors, L: newArray}});
    };

    const handleRemoveAuthor = (index) => {
        const newArray = documentData.authors.L.slice();
        newArray.splice(index, 1);
        setDocumentData({...documentData, authors: {...documentData.authors, L: newArray}});
    };

    const handleContributorChange = (
        e,
        contributorIndex,
        field,
        type,
        roleIndex = null,
        roleField = null,
        roleType = null
    ) => {
        const newContributorsArray = documentData.contributors.L.slice();

        if (roleIndex !== null && roleField !== null && roleType !== null) {
            newContributorsArray[contributorIndex].M.contributor_roles.L[roleIndex].M[
                roleField
                ][roleType] = e.target.value;
        } else {
            newContributorsArray[contributorIndex].M[field][type] = e.target.value;
        }

        setDocumentData({
            ...documentData,
            contributors: { ...documentData.contributors, L: newContributorsArray },
        });
    };


    const handleAddContributor = () => {
        const newArray = documentData.contributors.L.slice();
        newArray.push({
            M: {
                firstNames: { S: "" },
                surnames: { S: "" },
                contributor_roles: { L: [] },
            },
        });
        setDocumentData({
            ...documentData,
            contributors: { ...documentData.contributors, L: newArray },
        });
    };

    const handleAddRole = (contributorIndex) => {
        const newContributorsArray = documentData.contributors.L.slice();
        const newRolesArray =
            newContributorsArray[contributorIndex].M.contributor_roles.L.slice();

        newRolesArray.push({
            M: {
                role: { S: "" },
                abbreviation: { S: "" },
            },
        });

        newContributorsArray[contributorIndex].M.contributor_roles.L = newRolesArray;
        setDocumentData({
            ...documentData,
            contributors: { ...documentData.contributors, L: newContributorsArray },
        });
    };

    const handleRemoveRole = (contributorIndex, roleIndex) => {
        const newContributorsArray = documentData.contributors.L.slice();
        const newRolesArray =
            newContributorsArray[contributorIndex].M.contributor_roles.L.slice();

        newRolesArray.splice(roleIndex, 1);

        newContributorsArray[contributorIndex].M.contributor_roles.L = newRolesArray;
        setDocumentData({
            ...documentData,
            contributors: { ...documentData.contributors, L: newContributorsArray },
        });
    };

    const handleRemoveContributor = (index) => {
        const newArray = documentData.contributors.L.slice();
        newArray.splice(index, 1);
        setDocumentData({
            ...documentData,
            contributors: { ...documentData.contributors, L: newArray },
        });
    };

    const handleLanguageChange = (event, index, key, type) => {
        const newArray = documentData.languages.L.slice();
        newArray[index] = { ...newArray[index], M: { ...newArray[index].M, [key]: { [type]: event.target.value } } };
        setDocumentData({ ...documentData, languages: { ...documentData.languages, L: newArray } });
    };

    const handleAddLanguage = () => {
        const newArray = documentData.languages.L.slice();
        newArray.push({
            M: {
                isCurrentDocument: { BOOL: true },
                language: { S: '' },
            },
        });
        setDocumentData({ ...documentData, languages: { ...documentData.languages, L: newArray } });
    };

    const handleRemoveLanguage = (index) => {
        const newArray = documentData.languages.L.slice();
        newArray.splice(index, 1);
        setDocumentData({ ...documentData, languages: { ...documentData.languages, L: newArray } });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log(documentData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3 id="filename-label">Filename</h3>
            <input
                type="text"
                id="filename"
                name="filename"
                value={documentData.filename.S}
                onChange={(e) => handleChange(e, "filename", "S")}
                aria-labelledby="filename-label"
            />

            <h3 id="title-label">Title</h3>
            <input
                type="text"
                id="title"
                name="title"
                value={documentData.title.S}
                onChange={(e) => handleChange(e, "title", "S")}
                aria-labelledby="title-label"
            />

            <h3 id="subtitle-label">Subtitle</h3>
            <input
                type="text"
                id="subtitle"
                name="subtitle"
                value={documentData.subtitle.S}
                onChange={(e) => handleChange(e, "subtitle", "S")}
                aria-labelledby="subtitle-label"
            />

            <h3 id="description-label">Description</h3>
            <input
                type="text"
                id="description"
                name="description"
                value={documentData.description.S}
                onChange={(e) => handleChange(e, "description", "S")}
                aria-labelledby="description-label"
            />

            <AuthorsFormInputs
                authors={documentData.authors}
                handleAddAuthor={handleAddAuthor}
                handleRemoveAuthor={handleRemoveAuthor}
                handleAuthorChange={handleAuthorChange}
            />

            <ContributorsFormInputs
                contributors={documentData.contributors}
                handleAddContributor={handleAddContributor}
                handleRemoveContributor={handleRemoveContributor}
                handleContributorChange={handleContributorChange}
                handleAddRole={handleAddRole}
                handleRemoveRole={handleRemoveRole}
            />

            <LanguagesFormInputs
                languages={documentData.languages}
                handleLanguageChange={handleLanguageChange}
                handleAddLanguage={handleAddLanguage}
                handleRemoveLanguage={handleRemoveLanguage}
            />

            <EditionsFormInputs
                editions={documentData.editions}
                handleEditionChange={handleEditionChange}
                handleAddEdition={handleAddEdition}
                handleRemoveEdition={handleRemoveEdition}
            />

            <h3 id="page_total-label">Page total</h3>
            <input
                type="text"
                id="page_total"
                name="page_total"
                value={documentData.page_total.N}
                onChange={(e) => handleChange(e, "page_total", "N")}
                aria-labelledby="page_total-label"
            />

            <h3 id="notes-label">Notes</h3>
            <input
                type="text"
                id="notes"
                name="notes"
                value={documentData.notes.S}
                onChange={(e) => handleChange(e, "notes", "S")}
                aria-labelledby="notes-label"
            />

            <h3 id="collections-label">Collections</h3>
            <input
                type="text"
                id="collections"
                name="collections"
                value={documentData.collections.S}
                onChange={(e) => handleChange(e, "collections", "S")}
                aria-labelledby="collections-label"
            />

            <h3 id="tags-label">Tags</h3>
            <input
                type="text"
                id="tags"
                name="tags"
                value={documentData.tags.S}
                onChange={(e) => handleChange(e, "tags", "S")}
                aria-labelledby="tags-label"
            />

            <h3 id="locales-label">Locations</h3>
            <input
                type="text"
                id="locales"
                name="locales"
                value={documentData.locales.S}
                onChange={(e) => handleChange(e, "locales", "S")}
                aria-labelledby="locales-label"
            />

            <h3 id="cross_references-label">Cross references</h3>
            <input
                type="text"
                id="cross_references"
                name="cross_references"
                value={documentData.cross_references.S}
                onChange={(e) => handleChange(e, "cross_references", "S")}
                aria-labelledby="cross_references-label"
            />

            <h3 id="audio_version-label">Audio version</h3>
            <input
                type="text"
                id="audio_version"
                name="audio_version"
                value={documentData.audio_version.S}
                onChange={(e) => handleChange(e, "audio_version", "S")}
                aria-labelledby="audio_version-label"
            />

            <h3 id="phelps_info-label">Phelps info</h3>
            <input
                type="text"
                id="phelps_info"
                name="phelps_info"
                value={documentData.phelps_info.S}
                onChange={(e) => handleChange(e, "phelps_info", "S")}
                aria-labelledby="phelps_info-label"
            />

            <h3 id="permission_type-label">Permission type</h3>
            <input
                type="text"
                id="permission_type"
                name="permission_type"
                value={documentData.permission_type.S}
                onChange={(e) => handleChange(e, "permission_type", "S")}
                aria-labelledby="permission_type-label"
            />

            <h3 id="documentId-label">Document ID</h3>
            <input
                type="text"
                id="documentId"
                name="documentId"
                value={documentData.documentId.S}
                readOnly
                aria-labelledby="documentId-label"
            />

            <h3 id="date_created-label">Date created</h3>
            <input
                type="text"
                id="date_created"
                name="date_created"
                value={documentData.date_created.S}
                readOnly
                aria-labelledby="date_created-label"
            />

            <h3 id="date_updated-label">Date updated</h3>
            <input
                type="text"
                id="date_updated"
                name="date_updated"
                value={documentData.date_updated.S}
                readOnly
                aria-labelledby="date_updated-label"
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default AddDocumentForm;

