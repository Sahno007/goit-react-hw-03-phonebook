import Form from './Form/Form';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './FriendsList/ContactsList';
import SearchInput from './SearchInput/SearchInput';

export class App extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    filter: '',
  };

  // componentDidMount = () => {
  //   this.state.contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  // }

  componentDidUpdate = () => {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };

  handleDeleteUser = id => {
    if (window.confirm('Are you sure?')) {
      this.setState({
        contacts: [...this.state.contacts.filter(user => user.id !== id)],
      });
    }
  };

  createUser = data => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        { name: data.name, id: nanoid(), number: data.number },
      ],
    });
  };

  handlerSearch = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
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
        <h1> Phone book </h1>
        <Form
          createUser={this.createUser}
          userNumber={this.state.number}
          userName={this.state.name}
          contacts={this.state.contacts}
        />
        <p>Find contacts by name</p>
        <SearchInput onChange={this.handlerSearch} value={this.state.filter} />

        <h2>Contacts</h2>
        <ContactList
          handleDeleteUser={this.handleDeleteUser}
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </div>
    );
  }
}