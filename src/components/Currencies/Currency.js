// Import React
import React from 'react';
import PropTypes from 'prop-types';

// Import data
import './styles.scss';

const Currency = ({ text }) => (
  <li className="currency">{text}</li>
);

Currency.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Currency;
