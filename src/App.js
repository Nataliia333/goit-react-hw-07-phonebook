import { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import Container from './components/Container/Container';

export default class App extends Component {
  render() {
    return (
      <Container>
        <h2>Form Contact</h2>
        <ContactForm />
        <h2>Contacts List</h2>
        <Filter />
        <ContactsList />
      </Container>
    );
  }
}
