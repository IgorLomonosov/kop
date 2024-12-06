import React from 'react';
import { ContactsProvider } from './context/ContactsContext';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';

const App = () => {
  return (
    <ContactsProvider>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h1>Менеджер контактів</h1>
        <AddContact />
        <ContactList />
      </div>
    </ContactsProvider>
  );
};

export default App;
