const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getContacts = state => state.contacts.items;

const getVisibleContacts = state => {
  const filter = getFilter(state);
  const contacts = getContacts(state);
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

export default {
  getLoading,
  getFilter,
  getVisibleContacts,
  getContacts,
};
