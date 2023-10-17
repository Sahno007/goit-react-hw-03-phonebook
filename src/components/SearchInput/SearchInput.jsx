import PropTypes from 'prop-types';

const SearchInput = ({ onChange, value }) => {
  return <input onChange={onChange} value={value} />;
};

export default SearchInput;

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};