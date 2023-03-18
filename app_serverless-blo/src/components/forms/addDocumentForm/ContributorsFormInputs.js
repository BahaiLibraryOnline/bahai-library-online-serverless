import React from "react";

const ContributorsFormInputs = ({
                                    contributors,
                                    handleAddContributor,
                                    handleRemoveContributor,
                                    handleContributorChange,
                                    handleAddRole,
                                    handleRemoveRole,
                                }) => {
    return (
        <div>
            {contributors.L.map((contributor, index) => (
                <div key={index}>
                    <h3>Contributor {index + 1}</h3>
                    <h4>First Names</h4>
                    <input
                        type="text"
                        id={`firstNames-${index}`}
                        name={`firstNames-${index}`}
                        value={contributor.M.firstNames.S}
                        onChange={(e) => handleContributorChange(e, index, "firstNames", "S")}
                        aria-label={`First Names for Contributor ${index + 1}`}
                    />

                    <h4>Surnames</h4>
                    <input
                        type="text"
                        id={`surnames-${index}`}
                        name={`surnames-${index}`}
                        value={contributor.M.surnames.S}
                        onChange={(e) => handleContributorChange(e, index, "surnames", "S")}
                        aria-label={`Surnames for Contributor ${index + 1}`}
                    />

                    {contributor.M.contributor_roles &&
                        contributor.M.contributor_roles.L.map((role, roleIndex) => (
                            <div key={roleIndex}>
                                <h5>Role</h5>
                                <input
                                    type="text"
                                    id={`role-${index}-${roleIndex}`}
                                    name={`role-${index}-${roleIndex}`}
                                    value={role.M.role.S}
                                    onChange={(e) =>
                                        handleContributorChange(e, index, "contributor_roles", "L", roleIndex, "role", "S")
                                    }
                                    aria-label={`Role for Contributor ${index + 1} - Role ${roleIndex + 1}`}
                                />

                                <h5>Abbreviation</h5>
                                <input
                                    type="text"
                                    id={`abbreviation-${index}-${roleIndex}`}
                                    name={`abbreviation-${index}-${roleIndex}`}
                                    value={role.M.abbreviation.S}
                                    onChange={(e) =>
                                        handleContributorChange(e, index, "contributor_roles", "L", roleIndex, "abbreviation", "S")
                                    }
                                    aria-label={`Abbreviation for Contributor ${index + 1} - Role ${roleIndex + 1}`}
                                />

                                <button type="button" onClick={() => handleRemoveRole(index, roleIndex)}>
                                    Remove Role
                                </button>
                            </div>
                        ))}

                    <button type="button" onClick={() => handleAddRole(index)}>
                        Add Role
                    </button>

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
