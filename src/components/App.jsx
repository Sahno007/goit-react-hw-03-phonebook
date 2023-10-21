import Form from './Form/Form';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './FriendsList/ContactsList';
import SearchInput from './SearchInput/SearchInput';

export class App extends Component {
  state = {
    contacts: [], // Видалено парсинг localStorage зі стану
    filter: '',
  };

  componentDidMount() { // Додано componentDidMount для отримання контактів при завантаженні сторінки
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    this.setState({ contacts: storedContacts });
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  handleDeleteUser = (id) => {
    if (window.confirm('Are you sure?')) {
      this.setState({
        contacts: [...this.state.contacts.filter((user) => user.id !== id)],
      });
    }
  };

  createUser = (data) => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        { name: data.name, id: nanoid(), number: data.number },
      ],
    });
  };

  handleSearch = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => { // Додано функцію для фільтрації контактів
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts(); // Використано функцію фільтрації контактів

    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          paddingTop: '100px',
        }}
      >
        <h1>Phone book</h1>
        <Form
          createUser={this.createUser}
          userNumber={this.state.number}
          userName={this.state.name}
          contacts={this.state.contacts}
        />
        <p>Find contacts by name</p>
        <SearchInput onChange={this.handleSearch} value={this.state.filter} />

        <h2>Contacts</h2>
        <ContactList
          handleDeleteUser={this.handleDeleteUser}
          contacts={filteredContacts} // Передано вже відфільтровані контакти
          filter={this.state.filter}
        />
      </div>
    );
  }
}
