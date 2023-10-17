import styled from 'styled-components';

const ContactsListStyled = styled.ul`
  list-style: none;
  padding-left: 0;
  button {
    cursor: pointer;
    background-color: red;
    color: white;
  }
  li {
    display: flex;
    align-items: center;
    column-gap: 30px;
  }
`;

export default ContactsListStyled;