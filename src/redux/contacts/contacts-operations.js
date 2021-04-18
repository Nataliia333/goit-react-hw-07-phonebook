import axios from 'axios';
import actions from './contact-actions';
axios.defaults.baseURL = 'http://localhost:3030';

const addContact = ({ name, number }) => dispatch => {
  const contact = { name, number };

  dispatch(actions.addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSucces(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

export default {
  addTodo,
};
