import React from "react";

const LanguagesFormInputs = ({
                                 languages,
                                 handleAddLanguage,
                                 handleRemoveLanguage,
                                 handleLanguageChange,
                             }) => {
    return (
        <div>
            {languages.map((language, index) => (
                <div key={index}>
                    <h3>Language {index + 1}</h3>
                    <h4>Language</h4>
                    <input
                        type="text"
                        id={`language-${index}`}
                        name={`language-${index}`}
                        value={language.language}
                        onChange={(e) => handleLanguageChange(e, index, "language")}
                        aria-label={`Language for Language ${index + 1}`}
                    />

                    <div>
                        <h4>Is Current Document</h4>
                        <input
                            type="checkbox"
                            id={`isCurrentDocument-${index}`}
                            name={`isCurrentDocument-${index}`}
                            checked={language.isCurrentDocument}
                            onChange={(e) =>
                                handleLanguageChange(e, index, "isCurrentDocument")
                            }
                            aria-label={`Is Current Document for Language ${index + 1}`}
                        />
                    </div>

                    {language.documents.map((document, docIndex) => (
                        <div key={docIndex}>
                            <h4>Document {docIndex + 1}</h4>
                            <input
                                type="text"
                                id={`document-${docIndex}`}
                                name={`document-${docIndex}`}
                                value={document}
                                onChange={(e) =>
                                    handleLanguageChange(e, index, "documents", docIndex)
                                }
                                aria-label={`Document ${docIndex + 1} for Language ${index + 1}`}
                            />
                        </div>
                    ))}

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
