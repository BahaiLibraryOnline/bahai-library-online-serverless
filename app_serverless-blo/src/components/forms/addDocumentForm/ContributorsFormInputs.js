import React from "react";

const ContributorsFormInputs = ({
                                    contributors,
                                    handleAddContributor,
                                    handleRemoveContributor,
                                    handleContributorChange,
                                }) => {
    const roles = [
        { label: "Author", key: "isAuthor" },
        { label: "Editor", key: "isEditor" },
        { label: "Translator", key: "isTranslator" },
        { label: "Compiler", key: "isCompiler" },
        { label: "Illustrator", key: "isIllustrator" },
        { label: "Other", key: "isOther" },
    ];

    return (
        <div>
            {contributors.map((contributor, index) => (
                <div key={index}>
                        <h3>Contributor {index + 1}</h3>
                        <h4>First Names</h4>
                        <input
                            type="text"
                            id={`firstNames-${index}`}
                            name={`firstNames-${index}`}
                            value={contributor.firstNames}
                            onChange={(e) => handleContributorChange(e, index, "firstNames")}
                            aria-label={`First Names for Contributor ${index + 1}`}
                        />

                        <h4>Surnames</h4>
                        <input
                            type="text"
                            id={`surnames-${index}`}
                            name={`surnames-${index}`}
                            value={contributor.surnames}
                            onChange={(e) => handleContributorChange(e, index, "surnames")}
                            aria-label={`Surnames for Contributor ${index + 1}`}
                        />

                        <h4>Publication First Names</h4>
                        <input
                            type="text"
                            id={`publicationFirstNames-${index}`}
                            name={`publicationFirstNames-${index}`}
                            value={contributor.publicationFirstNames}
                            onChange={(e) => handleContributorChange(e, index, "publicationFirstNames")}
                            aria-label={`Publication First Names for Contributor ${index + 1}`}
                        />

                        <h4>Publication Surnames</h4>
                        <input
                            type="text"
                            id={`publicationSurnames-${index}`}
                            name={`publicationSurnames-${index}`}
                            value={contributor.publicationSurnames}
                            onChange={(e) => handleContributorChange(e, index, "publicationSurnames")}
                            aria-label={`Publication Surnames for Contributor ${index + 1}`}
                        />

                        {roles.map((role) => (
                            <div key={role.key}>
                                <label htmlFor={`${role.key}-${index}`}>
                                    {role.label}:
                                </label>
                                <input
                                    type="checkbox"
                                    id={`${role.key}-${index}`}
                                    name={`${role.key}-${index}`}
                                    checked={contributor[role.key]}
                                    onChange={(e) => handleContributorChange(e, index, role.key)}
                                    aria-label={`${role.label} for Contributor ${index + 1}`}
                                />
                            </div>
                        ))}

                    {contributor.isOther && (
                        <div>
                            <h4>Other Description</h4>
                            <input
                                type="text"
                                id={`otherDescription-${index}`}
                                name={`otherDescription-${index}`}
                                value={contributor.otherDescription}
                                onChange={(e) => handleContributorChange(e, index, "otherDescription")}
                                aria-label={`Other Description for Contributor ${index + 1}`}
                            />
                        </div>
                    )}

                    <button type="button" onClick={() => handleRemoveContributor(index)}>
                        Remove Contributor
                    </button>
                </div>
            ))}
            <button type="button" onClick={handleAddContributor}>
                Add Contributor
            </button>
        </div>
    );
};

export default ContributorsFormInputs;