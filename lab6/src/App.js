import React from 'react';
import { ContactProvider } from './context/ContactContext';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import "./App.css";

const App = () => {
  return (
    <ContactProvider>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h1>Менеджер контактів</h1>
        <AddContact />
        <ContactList />
      </div>
    </ContactProvider>
  );
};

export default App;
