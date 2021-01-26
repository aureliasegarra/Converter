// Import React
import React from 'react';

import PropTypes from 'prop-types';

// Import Components
import Currency from './Currency';

// Import data
import './styles.scss';

const Currencies = ({ currencies }) => {
  const currenciesList = currencies.map((currency) => {
    const currencyName = currency.name;
    return <Currency key={currency.name} text={currencyName} />;
  });

  return (
    <div className="currencies">
      <p className="currencies__title">Currencies</p>
      <ul className="currencies__list">
        {currenciesList}
      </ul>
    </div>
  );
};

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      // here rate is not used, so no need to validate it
    }),
  ).isRequired,
};

export default Currencies;
