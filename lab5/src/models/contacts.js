import { createEvent, createStore } from 'effector';

export const addContact = createEvent();
export const updateContact = createEvent();
export const deleteContact = createEvent();

export const $contacts = createStore([])
  .on(addContact, (state, contact) => [...state, { id: Date.now(), ...contact }])
  .on(updateContact, (state, updatedContact) =>
    state.map((contact) => (contact.id === updatedContact.id ? updatedContact : contact))
  )
  .on(deleteContact, (state, id) => state.filter((contact) => contact.id !== id));
