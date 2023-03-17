import React from 'react';

const EditionsFormInputs = ({editions, handleEditionChange, handleAddEdition, handleRemoveEdition}) => {
    return (
        <div>
            {editions.L.map((edition, index) => (
                <div key={index}>
                    <h3>Edition {index + 1}</h3>
                    {Object.keys(edition.M).map((key) => (
                        <div key={key}>
                            <b><label>{key}</label></b>
                            <input
                                type="text"
                                value={edition.M[key].S || ''}
                                onChange={(e) => handleEditionChange(e, index, key)}
                            />
                        </div>
                    ))}
                    <button type="button" onClick={() => handleRemoveEdition(index)}>Remove Edition</button>
                </div>
            ))}
            <button type="button" onClick={handleAddEdition}>Add Edition</button>
        </div>
    );
};

export default EditionsFormInputs;
