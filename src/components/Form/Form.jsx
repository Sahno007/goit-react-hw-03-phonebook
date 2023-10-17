import { Component } from 'react';
import PropTypes from 'prop-types';
import FormStyle from './FormStyle.styled';

class Form extends Component {
  state = {
    number: '',
    name: '',
  };
  handlerChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handlerSubmitForm = e => {
    e.preventDefault();

    if (
      this.props.contacts.some(
        contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
      )
    ) {
      setTimeout(() => {
        alert(`${this.state.name} is alredy in your contacts`);
      }, 300);
      return;
    }

    if (this.state.number && this.state.name) {
      this.props.createUser(this.state);
      this.setState({ number: '', name: '' });
    }
  };

  render() {
    return (
      <FormStyle onSubmit={this.handlerSubmitForm}>
        <label>
          Name
          <input
            value={this.state.name}
            onChange={this.handlerChangeInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Phone
          <input
            value={this.state.number}
            onChange={this.handlerChangeInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" disabled={!this.state.name || !this.state.number}>
          Add contact
        </button>
      </FormStyle>
    );
  }
}

export default Form;

Form.propTypes = {
  createUser: PropTypes.func.isRequired,
  userName: PropTypes.string,
  userNumber: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};