import DeleteContactButton from 'components/DeleteContactButton/DeleteContactButton';
import PropTypes from 'prop-types';

const ContactItem = ({ userName, userNumber, id, handleDeleteUser }) => {
  return (
    <li id={id}>
      <p>{`${userName}: ${userNumber}`}</p>
      <DeleteContactButton userId={id} handleDeleteUser={handleDeleteUser} />
    </li>
  );
};

export default ContactItem;

DeleteContactButton.propTypes = {
  userName: PropTypes.string,
  userNumber: PropTypes.string,
  id: PropTypes.string,
  handleDeleteUser: PropTypes.func.isRequired,
};