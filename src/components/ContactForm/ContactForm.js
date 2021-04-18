import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';

const ContactForm = ({ contacts, onAdd }) => {
  let item = { name: '', number: '' };

  const onInputChange = event => {
    item = { ...item, [event.target.id]: event.target.value };
  };

  const isAlreadyContact = () => {
    const Names = contacts.map(contact => contact.name);
    return Names.includes(item.name);
  };

  const onSave = event => {
    event.preventDefault();
    isAlreadyContact()
      ? alert(`${item.name} is already in contacts.`)
      : onAdd(item);
  };

  return (
    <form className={styles.ContactForm}>
      <label>Name</label>
      <input type="text" onChange={onInputChange} id="name"></input>
      <label>Number</label>
      <input type="text" onChange={onInputChange} id="number"></input>
      <button className={styles.ContactButton} type="submit" onClick={onSave}>
        AddContact
      </button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getContacts(state),
  };
};

const mapDispatchProps = dispatch => {
  return {
    onAdd: value => dispatch(contactsOperations.addContact(value)),
  };
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onAdd: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchProps)(ContactForm);
