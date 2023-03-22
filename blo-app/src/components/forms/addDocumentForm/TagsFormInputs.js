import React from "react";

const TagsFormInputs = ({ tags, handleAddTag, handleRemoveTag, handleTagChange }) => {
    return (
        <div>
            {tags.map((tag, index) => (
                <div key={index}>
                    <h3>Tag {index + 1}</h3>
                    <input
                        type="text"
                        id={`tag-${index}`}
                        name={`tag-${index}`}
                        value={tag}
                        onChange={(e) => handleTagChange(e, index)}
                        aria-label={`Tag ${index + 1}`}
                    />

                    <button type="button" onClick={() => handleRemoveTag(index)}>
                        Remove Tag
                    </button>
                </div>
            ))}
            <button type="button" onClick={handleAddTag}>
                Add Tag
            </button>
        </div>
    );
};

export default TagsFormInputs;
