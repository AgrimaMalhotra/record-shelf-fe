import React from 'react';
import propTypes from 'prop-types';
import './ErrorMessage.css';
const ErrorMessage = ({ errorMessage }) => {
  return (
    <div className="error-container">
      <h3>Something Went Wrong!</h3>
      {errorMessage && <h5>{`Error code:${errorMessage}`}</h5>}
    </div>
  );
};

ErrorMessage.propTypes = {
  errorMessage: propTypes.oneOfType([propTypes.string, propTypes.number]),
};
export default ErrorMessage;
