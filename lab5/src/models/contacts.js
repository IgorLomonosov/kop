import { createEvent, createStore } from 'effector';

export const addContact = createEvent();
export const updateContact = createEvent();
export const deleteContact = createEvent();

const loadContactsFromLocalStorage = () => {
  const storedContacts = localStorage.getItem('contacts');
  return storedContacts ? JSON.parse(storedContacts) : [];
};

const saveContactsToLocalStorage = (contacts) => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

export const $contacts = createStore(loadContactsFromLocalStorage())
  .on(addContact, (state, contact) => {
    const updatedState = [...state, { id: Date.now(), ...contact }];
    saveContactsToLocalStorage(updatedState);
    return updatedState;
  })
  .on(updateContact, (state, updatedContact) => {
    const updatedState = state.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    saveContactsToLocalStorage(updatedState);
    return updatedState;
  })
  .on(deleteContact, (state, id) => {
    const updatedState = state.filter((contact) => contact.id !== id);
    saveContactsToLocalStorage(updatedState);
    return updatedState;
  });
