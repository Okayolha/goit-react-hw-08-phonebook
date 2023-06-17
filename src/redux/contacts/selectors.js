export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.contacts.filter;

export const selectFilteredContacts = ({ contacts }) => {
  if (!contacts.filter) {
    return contacts.items;
  }
  const normalizedFilter = contacts.filter.toLowerCase();

  return contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
