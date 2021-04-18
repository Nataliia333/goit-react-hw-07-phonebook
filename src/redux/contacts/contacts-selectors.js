// мемоизация селекторов
import { createSelector } from '@reduxjs/toolkit';

//
const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getContacts = state => state.contacts.items;

// const getVisibleContacts = state => {
//   const filter = getFilter(state);
//   const contacts = getContacts(state);
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };
// мемоизация селекторов
const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getLoading,
  getFilter,
  getContacts,
  getVisibleContacts,
};
