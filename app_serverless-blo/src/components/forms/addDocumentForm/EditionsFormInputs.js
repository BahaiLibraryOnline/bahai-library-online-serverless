import React from "react";

const EditionsFormInputs = ({
                                editions,
                                handleAddEdition,
                                handleRemoveEdition,
                                handleEditionChange,
                            }) => {
    return (
        <div>
            {editions.map((edition, index) => (
                <div key={index}>
                    <h3>Edition {index + 1}</h3>
                    <h4>Publication</h4>
                    <input
                        type="text"
                        id={`publication-${index}`}
                        name={`publication-${index}`}
                        value={edition.publication}
                        onChange={(e) => handleEditionChange(e, index, "publication")}
                        aria-label={`Publication for Edition ${index + 1}`}
                    />

                    <h4>Publisher</h4>
                    <input
                        type="text"
                        id={`publisher-${index}`}
                        name={`publisher-${index}`}
                        value={edition.publisher}
                        onChange={(e) => handleEditionChange(e, index, "publisher")}
                        aria-label={`Publisher for Edition ${index + 1}`}
                    />

                    <h4>City</h4>
                    <input
                        type="text"
                        id={`city-${index}`}
                        name={`city-${index}`}
                        value={edition.city}
                        onChange={(e) => handleEditionChange(e, index, "city")}
                        aria-label={`City for Edition ${index + 1}`}
                    />

                    <h4>Date</h4>
                    <input
                        type="text"
                        id={`date-${index}`}
                        name={`date-${index}`}
                        value={edition.date}
                        onChange={(e) => handleEditionChange(e, index, "date")}
                        aria-label={`Date for Edition ${index + 1}`}
                    />

                    <h4>ISBN</h4>
                    <input
                        type="text"
                        id={`isbn-${index}`}
                        name={`isbn-${index}`}
                        value={edition.isbn}
                        onChange={(e) => handleEditionChange(e, index, "isbn")}
                        aria-label={`ISBN for Edition ${index + 1}`}
                    />

                    <h4>Original Title</h4>
                    <input
                        type="text"
                        id={`originalTitle-${index}`}
                        name={`originalTitle-${index}`}
                        value={edition.originalTitle}
                        onChange={(e) => handleEditionChange(e, index, "originalTitle")}
                        aria-label={`Original Title for Edition ${index + 1}`}
                    />

                    <h4>Volume</h4>
                    <input
                        type="text"
                        id={`volume-${index}`}
                        name={`volume-${index}`}
                        value={edition.volume}
                        onChange={(e) => handleEditionChange(e, index, "volume")}
                        aria-label={`Volume for Edition ${index + 1}`}
                    />

                    <h4>Page Range</h4>
                    <input
                        type="text"
                        id={`pageRange-${index}`}
                        name={`pageRange-${index}`}
                        value={edition.pageRange}
                        onChange={(e) => handleEditionChange(e, index, "pageRange")}
                        aria-label={`Page Range for Edition ${index + 1}`}
                    />

                    <button type="button" onClick={() => handleRemoveEdition(index)}>
                        Remove Edition
                    </button>
                </div>
            ))}
            <button type="button" onClick={handleAddEdition}>
                Add Edition
            </button>
        </div>
    );
};

export default EditionsFormInputs;
