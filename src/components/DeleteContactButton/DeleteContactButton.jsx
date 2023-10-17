import PropTypes from 'prop-types';

const DeleteContactButton = ({ userId, handleDeleteUser }) => {
  return <button onClick={() => handleDeleteUser(userId)}>Delete</button>;
};

export default DeleteContactButton;

DeleteContactButton.propTypes = {
  userId: PropTypes.string.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
};