import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    const isExist = contacts.find(contact => {
      return contact.name === data.name;
    });
    if (isExist) {
      alert('contact already exist');
      return;
    }

    setContacts(prevState => [...prevState, { ...data, id: nanoid() }]);
  };

  const deleteContacts = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const filterContacts = event => {
    setFilter(event.target.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <section className={css.phonebook}>
      <div className={css.container}>
        <h1>PhoneBook</h1>
      </div>
      <div className={css.container}>
        <Form onSubmit={formSubmitHandler} />
        <Filter filterContacts={filterContacts} />
        <ContactList
          visibleContacts={visibleContacts}
          deleteContact={deleteContacts}
        />
      </div>
    </section>
  );
};
