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
    // on vient sotcker la valeur du nom de la devise
    const currencyName = currency.name;
    // on retourne un composant Currency pour chaque élément du nouveau tableau
    // attetion, il faut bien penser à rajouter la prop key pour chaque élément de cet tableau
    return (
      <Currency
        key={currency.name}
        text={currencyName}
        onClickCurrency={setCurrency}
      />
    );
  });

  // const currenciesList = currencies.map((currency) => <Currency text={currency.name} />);
  // React.createElement(Currencies, null);
  return (
    <div className="currencies">
      <input
        className="currencies__input"
        type="text"
        placeholder="Rechercher une devise"
        // je te donne la valeur du state que tu dois afficher
        // https://fr.reactjs.org/docs/forms.html#controlled-components
        value={inputValue}
        // à chaque fois qu'on va taper au clavier
        // on veut déclencher la fonction qui est stockée
        // dans la props setSearchValue
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <ul className="currencies__list">
        {currenciesList}
      </ul>
    </div>
  );
};

Currencies.propTypes = {
  // currencies: PropTypes.array.isRequired,
  // on peu tpréciser ce qu'il y a dans le tableau
  currencies: PropTypes.arrayOf(
    // on vient décrire ce qu'il y a comme propriétés dans les objets du tableau
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      // ici rate n'est pas utilisé, donc pas la peine de le valider
      // rate: PropTypes.number.isRequired,
    }),
  ).isRequired,
  setCurrency: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default Currencies;
