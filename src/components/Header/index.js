// Import React
import React from 'react';
import PropTypes from 'prop-types';

// Import data
import './styles.scss';

// to simplify the recovery of the props, we destructure directly
// the props object passed as a parameter
// you must then remember to validate the past props => PropTypes

const Header = ({ baseAmount, setBaseAmount }) => {
  const handleOnChange = (event) => {
    console.log('handleOnChange', event.target.value);
    const parsedValue = parseFloat(event.target.value, 10); // ou Number(event.target.value)
    setBaseAmount(parsedValue);
  };

  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <p className="header__base-amount">
        <input
          type="text"
          className="header__input"
          value={baseAmount}
          onChange={handleOnChange}
          placeholder="Combien voulez vous convertir ?"
        />
        Euro
      </p>
    </header>
  );
};

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  setBaseAmount: PropTypes.func.isRequired,
};

export default Header;
