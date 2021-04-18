import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import styles from './ContactsList.module.css';

const ContactsList = ({
  contacts,
  isLoadingContacts,
  onDelete,
  fetchContacts,
}) => {
  useEffect(() => fetchContacts(), []);
  const handlerDelete = event => {
    onDelete(event.currentTarget.id);
  };

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            id={id}
            className={styles.ContactButton}
            type="button"
            onClick={handlerDelete}
          >
            Delete
          </button>
          {isLoadingContacts && <h1>Loading...</h1>}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getVisibleContacts(state),
    filter: contactsSelectors.getFilter(state),
    isLoadingContacts: contactsSelectors.getLoading(state),
  };
};

const mapDispatchProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  onDelete: value => dispatch(contactsOperations.deleteContact(value)),
});

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchProps)(ContactsList);
