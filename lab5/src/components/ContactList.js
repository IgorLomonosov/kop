import React, { useContext } from 'react';
import { ContactsContext } from '../context/ContactsContext';

const ContactList = () => {
  const { contacts, deleteContact } = useContext(ContactsContext);

  return (
    <div>
      <h2>Контакти</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {contacts.map((contact) => (
          <li
            key={contact.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 0',
              borderBottom: '1px solid #ddd',
            }}
          >
            <span>
              {contact.name} - {contact.phone}
            </span>
            <button onClick={() => deleteContact(contact.id)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
