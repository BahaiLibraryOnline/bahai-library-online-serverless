import React from "react";

const CollectionsFormInputs = ({ collections, handleAddCollection, handleRemoveCollection, handleCollectionChange }) => {
    return (
        <div>
            {collections.map((collection, index) => (
                <div key={index}>
                    <h3>Collection {index + 1}</h3>
                    <input
                        type="text"
                        id={`collection-${index}`}
                        name={`collection-${index}`}
                        value={collection.name}
                        onChange={(e) => handleCollectionChange(e, index)}
                        aria-label={`Name for Collection ${index + 1}`}
                    />

                    <button type="button" onClick={() => handleRemoveCollection(index)}>
                        Remove Collection
                    </button>
                </div>
            ))}
            <button type="button" onClick={handleAddCollection}>
                Add Collection
            </button>
        </div>
    );
};

export default CollectionsFormInputs;
