// DocumentList.js
import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listDocuments } from '../graphql/queries';
import { updateDocument, deleteDocument } from '../graphql/mutations';

function DocumentList() {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        fetchDocuments();
    }, []);

    async function fetchDocuments() {
        try {
            const documentData = await API.graphql(graphqlOperation(listDocuments));
            const documents = documentData.data.listDocuments.items;
            setDocuments(documents);
        } catch (err) {
            console.error('Error fetching documents:', err);
        }
    }

    async function updateDocument(document) {
        try {
            await API.graphql(graphqlOperation(updateDocument, { input: document }));
        } catch (err) {
            console.error('Error updating document:', err);
        }
    }

    async function deleteDocument(document) {
        try {
            await API.graphql(
                graphqlOperation(deleteDocument, { input: { id: document.id } }),
            );
            setDocuments(documents.filter((doc) => doc.id !== document.id));
        } catch (err) {
            console.error('Error deleting document:', err);
        }
    }

    return (
        <div>
            <h2>Document List</h2>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Filename</th>
                    {/* Add more columns for other document attributes as needed */}
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {documents.map((document) => (
                    <tr key={document.id}>
                        <td>{document.title}</td>
                        <td>{document.filename}</td>
                        {/* Add more cells for other document attributes as needed */}
                        <td>
                            <button onClick={() => updateDocument(document)}>Update</button>
                            <button onClick={() => deleteDocument(document)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default DocumentList;
