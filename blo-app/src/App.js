import React from 'react';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Auth from '@aws-amplify/auth';
import AddDocumentForm from './components/forms/addDocumentForm/AddDocumentForm';
import DocumentList from './components/DocumentList';

function App() {
    return (
        <div className="App">
            <AddDocumentForm />

            <button onClick={() => Auth.signOut()}>Sign Out</button>
        </div>
    );
}

export default withAuthenticator(App);

/*<DocumentList />*/
