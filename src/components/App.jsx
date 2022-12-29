import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Form from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const saveContacts = localStorage.getItem('contacts');
    if (saveContacts) {
      this.setState({ contacts: JSON.parse(saveContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = data => {
    const isExist = this.state.contacts.find(contact => {
      return contact.name === data.name;
    });
    if (isExist) {
      console.log('contact already exist');
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { ...data, id: nanoid() }],
      };
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => {
          return contact.id !== id;
        }),
      };
    });
  };

  setFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLocaleLowerCase());
    });
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <section className={css.phonebook}>
        <div className={css.container}>
          <h1>PhoneBook</h1>
        </div>
        <div className={css.container}>
          <Form onSubmit={this.formSubmitHandler} />
          <Filter setFilter={this.setFilter} />
          <ContactList
            contacts={visibleContacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </section>
    );
  }
}

export default App;
