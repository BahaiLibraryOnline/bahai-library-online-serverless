import React from 'react';

const DocumentFormInputs = ({ documentData, handleChange }) => {
    const inputFields = [
        { label: 'Filename', id: 'filename', type: 'text' },
        { label: 'Title', id: 'title', type: 'text' },
        { label: 'Subtitle', id: 'subtitle', type: 'text' },
        { label: 'Description', id: 'description', type: 'text' },
        { label: 'Date Current Publication', id: 'dateCurrentPublication', type: 'text' },
        { label: 'Date Original Publication', id: 'dateOriginalPublication', type: 'text' },
        { label: 'Notes', id: 'notes', type: 'text' },
        { label: 'Phelps Info', id: 'phelpsInfo', type: 'text' },
        { label: 'Audio Version', id: 'audioVersion', type: 'text' },
        { label: 'Locales', id: 'locales', type: 'text' },
        { label: 'Cross References', id: 'crossReferences', type: 'text' },
        { label: 'Permission Type', id: 'permissionType', type: 'text' },
        { label: 'Page Range', id: 'pageRange', type: 'text' },
        { label: 'Page Total', id: 'pageTotal', type: 'number' },
        { label: 'File Size', id: 'fileSize', type: 'number' },
    ];

    return (
        <>
            {inputFields.map((field) => (
                <div key={field.id}>
                    <label htmlFor={field.id}>{field.label}:</label>
                    <input
                        type={field.type}
                        id={field.id}
                        value={documentData[field.id]}
                        onChange={(event) => handleChange(event, field.id)}
                    />
                </div>
            ))}
        </>
    );
};

export default DocumentFormInputs;
