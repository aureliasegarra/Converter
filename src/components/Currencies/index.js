import React from 'react';
import PropTypes from 'prop-types';

import Currency from './Currency';

import './styles.scss';

const Currencies = ({
  currencies,
  setCurrency,
  inputValue,
  setSearchValue,
}) => {
  const currenciesList = currencies.map((currency) => {
    // we come to sotcker the value of the name of the currency
    const currencyName = currency.name;
    // we return a Currency component for each element of the new array
    return (
      <Currency
        key={currency.name}
        text={currencyName}
        onClickCurrency={setCurrency}
      />
    );
  });

  return (
    <div className="currencies">
      <input
        className="currencies__input"
        type="text"
        placeholder="Rechercher une devise"
        value={inputValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
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
    }),
  ).isRequired,
  setCurrency: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default Currencies;
