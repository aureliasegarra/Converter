import React from 'react';
import PropTypes from 'prop-types';

const Currency = ({ text, onClickCurrency }) => {
  // l'intérêt de passer par un handler, c'est de pouvoir ajouter des instruction
  // dans le corps de la fonction
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

// version condensée
// const Currency = ({ text, onClickCurrency }) => (
//   <li className="currency" onClick={() => onClickCurrency(text)}>{text}</li>
// );

Currency.propTypes = {
  text: PropTypes.string.isRequired,
  onClickCurrency: PropTypes.func.isRequired,
};

export default Currency;
