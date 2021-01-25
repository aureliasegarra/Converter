// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Results = ({ currencies}) => {
  const jsxCurrencies = currencies.map((currency) => {
    const title = <h1>{rate}</h1>;
    const subtitle = <p>{name}</p>;
    return title, subtitle;
  });
  return (
    <div className="results">
      {jsxCurrencies}
    </div>
  );
};

Results.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
};

// == Export
export default Results;
