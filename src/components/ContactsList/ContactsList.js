import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import styles from './ContactsList.module.css';

const ContactsList = ({ filter, contacts, onDelete }) => {
  const onFilterContacts = () => {
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return filterContacts;
  };

  const handlerDelete = event => {
    onDelete(event.currentTarget.id);
    // console.log(event.target.id);

    // console.log(event.currentTarget.id);
  };

  return (
    <ul>
      {(filter ? onFilterContacts() : contacts).map(({ id, name, number }) => (
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
          {this.props.isLoadingContacts && <h1>Загружаем...</h1>}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
    isLoadingContactss: state.contacts.loading,
  };
};

const mapDispatchProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  onDelete: value => dispatch(contactsOperations.deleteContact(value)),
});

ContactsList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchProps)(ContactsList);
