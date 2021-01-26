// Import React
import React from 'react';
import PropTypes from 'prop-types';

// Import data
import './styles.scss';

// to simplify the recovery of the props, we destructure directly
// the props object passed as a parameter
// you must then remember to validate the past props => PropTypes

const Header = ({ baseAmount }) => {
console.log('Header');
  // React.createElement(Converter, null);
  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <p className="header__base-amount">{baseAmount} Euro</p>
    </header>
  );
};

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
};

export default Header;
