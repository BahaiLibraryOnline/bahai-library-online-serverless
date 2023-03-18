import React from 'react';

const LanguagesFormInputs = ({ languages, handleLanguageChange, handleAddLanguage, handleRemoveLanguage }) => {
    return (
        <div>
            {languages.L.map((languageItem, index) => (
                <div key={index}>
                    <h3>Language {index + 1}</h3>
                    <input
                        type="text"
                        id={`language-${index}`}
                        name={`language-${index}`}
                        value={languageItem.M.language.S}
                        onChange={(event) => handleLanguageChange(event, index, 'language', 'S')}
                        aria-label={`Language ${index + 1}`}
                    />

                    <h4>Is Language Of Current File</h4>
                    <input
                        type="text"
                        id={`isCurrentDocument-${index}`}
                        name={`isCurrentDocument-${index}`}
                        placeholder="1 for true, 0 for false"
                        onChange={(event) => handleLanguageChange(event, index, 'isCurrentDocument', 'N')}
                        aria-label={`Is Language ${index + 1} of Current File`}
                    />

                    <button type="button" onClick={() => handleRemoveLanguage(index)}>
                        Remove Language
                    </button>
                </div>
            ))}
            <button type="button" onClick={handleAddLanguage}>
                Add Language
            </button>
        </div>
    );
};

export default LanguagesFormInputs;
