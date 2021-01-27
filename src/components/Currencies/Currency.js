import React from 'react';
import PropTypes from 'prop-types';

const Currency = ({ text, onClickCurrency }) => {
  // the advantage of going through a handler is to be able to add instructions
  // in the body of the function
  const handleClick = (event) => {
    // ici on puvait utiliser la valeur de event.target.textContent
    // onClickCurrency(event.target.textContent);
    // ou utiliser directement la valeur de la props text
    onClickCurrency(text);
  };

  return (
    <li className="currency" onClick={handleClick}>{text}</li>
  );
};

Currency.propTypes = {
  text: PropTypes.string.isRequired,
  onClickCurrency: PropTypes.func.isRequired,
};

export default Currency;
