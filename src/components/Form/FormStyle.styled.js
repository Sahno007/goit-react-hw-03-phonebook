import { styled } from 'styled-components';

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  label {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  button {
    border-radius: 4px;
    cursor: pointer;
  }
`;

export default FormStyle;