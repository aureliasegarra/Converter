// Import React
import React from 'react';

// Import Components
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Results from 'src/components/Results';
import Toggler from 'src/components/Toggler';

// Import data
import currenciesData from 'src/data/currencies';
import './styles.scss';

// to be able to manage a state, you must pass the Converter function to class
class Converter extends React.Component {
  state = {
    open: true,
    baseAmount: 1,
    currency: 'United States Dollar',
    search: '',
  }

  toggle = () => {
    // DO NOT CHANGE STATE VALUES DIRECTLY
    // to change a state value, you have to go through this.setState
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  // Fonction qui changera la valeur de la devise, de currency du state
  setCurrency = (currency) => {
    this.setState({
      currency,
    });
  }

  makeConversion = () => {
    const { baseAmount, currency } = this.state;

    // on va rechercher le taux de change
    const foundCurrency = currenciesData.find((element) => element.name === currency);

    // on va faire la convertion qu'on renverra
    const convertedAmount = baseAmount * foundCurrency.rate;

    return Math.round(convertedAmount * 100) / 100;
  }

  // fonction qui va modifier la valeur de value dans le state
  setSearch = (value) => {
    this.setState({
      search: value,
    });
  }

  // fonction pour rechercher une devise
  getCurrencies = () => {
    // par défaut je veux retourner la liste complète des devise
    let filteredCurrencies = currenciesData;
    const { search } = this.state;
    // si search n'est pas égal à une chaine de caractère vide, on filtre les devises
    // if (search !== '') {
    // on peut utiliser la valeur truthy de la chaine de caractère non-vide
    if (search) {
      // on vient filtrer la liste des devises
      filteredCurrencies = currenciesData.filter((currency) => {
        // on passe tout en minuscule pour comparer ce qui est comparable
        const loweredCurrency = currency.name.toLowerCase();
        const loweredSearch = search.toLowerCase();
        // ici on vient tester si dans la chaine de caractère du nom de la devises
        // on a bien ce qu'on a dans la recherche
        return loweredCurrency.includes(loweredSearch);
      });
    }

    return filteredCurrencies;
  }

  // fonction qui va modifier la valeur de amount dans le state
  setBaseAmount = (value) => {
    console.log('je veux changer la valeur de baseAmount');
    this.setState({
      baseAmount: value,
    });
  }

  render() {
  // to return the JSX of our components
  // the React Component class gives us the render() method
    const {
      open,
      baseAmount,
      currency,
      search,
    } = this.state;

    const convertedAmount = this.makeConversion();
    const filteredCurrencies = this.getCurrencies();

    return (
      <div className="converter">
        <Header baseAmount={baseAmount} setBaseAmount={this.setBaseAmount} />
        <Toggler onClickButton={this.toggle} isOpen={open} />
        {open && ( // make conditional view in the JSX, we use the && operator
          <Currencies
            currencies={filteredCurrencies}
            setCurrency={this.setCurrency}
            inputValue={search}
            setSearchValue={this.setSearch}
          />
        )}
        <Results
          value={convertedAmount}
          currency={currency}
        />
      </div>
    );
  }
}

export default Converter;
