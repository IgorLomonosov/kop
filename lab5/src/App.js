import React from 'react';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import "./App.css";

const App = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Менеджер контактів</h1>
      <AddContact />
      <ContactList />
    </div>
  );
};

export default App;
