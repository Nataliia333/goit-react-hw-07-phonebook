import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const deleteContact = createAction('app/Delete_contact');
const updateFilter = createAction('app/Update_filter');

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  addContact,
  deleteContact,
  updateFilter,
};
