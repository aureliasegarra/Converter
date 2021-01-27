// Import React
import React from 'react';
import PropTypes from 'prop-types';

// Import data
import './styles.scss';

const Amount = ({ value, currency }) => (
  <div className="amount">
    <p className="amount__value">{value}</p>
    <p className="amount__currency">{currency}</p>
  </div>
);

Amount.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Amount;
