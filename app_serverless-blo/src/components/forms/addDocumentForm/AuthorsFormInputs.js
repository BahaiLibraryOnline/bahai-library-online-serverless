import React from 'react';

const AuthorsFormInputs = ({authors, handleAddAuthor, handleRemoveAuthor, handleAuthorChange}) => {
    return (
        <div>
            {authors.L.map((author, index) => (
                <div key={index}>
                    <h3>Author {index + 1}</h3>
                    <h4>First Names</h4>
                    <input
                        type="text"
                        value={author.M.firstNames.S}
                        onChange={(event) => handleAuthorChange(event, index, 'firstNames', 'S')}
                        aria-label={`Author ${index + 1} First Names`}
                    />
                    <h4>Surnames</h4>
                    <input
                        type="text"
                        value={author.M.surnames.S}
                        onChange={(event) => handleAuthorChange(event, index, 'surnames', 'S')}
                        aria-label={`Author ${index + 1} Surnames`}
                    />
                    <b><label>First Names In This Publication</label></b>
                    <input
                        type="text"
                        value={author.M.publishedFirstNames.S}
                        onChange={(event) => handleAuthorChange(event, index, 'publishedFirstNames', 'S')}
                        aria-label={`Author ${index + 1} First Names In This Publication`}
                    />
                    <label>Surnames In This Publication</label>
                    <input
                        type="text"
                        value={author.M.publishedSurnames.S}
                        onChange={(event) => handleAuthorChange(event, index, 'publishedSurnames', 'S')}
                        aria-label={`Author ${index + 1} Surnames In This Publication`}
                    />
                    <button onClick={() => handleRemoveAuthor(index)}>Remove Author</button>
                </div>
            ))}
            <button onClick={() => handleAddAuthor()}>Add Author</button>
        </div>
    );
};

export default AuthorsFormInputs;
