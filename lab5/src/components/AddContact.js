import React, { useState, useContext } from 'react';
import { ContactsContext } from '../context/ContactsContext';

const AddContact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { addContact } = useContext(ContactsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, phone });
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Ім'я"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Додати</button>
    </form>
  );
};

export default AddContact;
