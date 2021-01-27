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

  // LifeCycles => interaction with DOM
  componentDidMount() {
    this.changePageTitleEffect();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currency } = this.state;
    if (currency !== prevState.currency) {
      this.changePageTitleEffect();
    }
  }

  changePageTitleEffect = () => {
    const { currency } = this.state;
    document.title = `Euro to ${currency}`;
  }

  toggle = () => {
    // DO NOT CHANGE STATE VALUES DIRECTLY
    // to change a state value, you have to go through this.setState
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  // Function that will change the value of the currency, state currency
  setCurrency = (currency) => {
    this.setState({
      currency,
    });
  }

  makeConversion = () => {
    const { baseAmount, currency } = this.state;

    // I get the exchange rate
    const foundCurrency = currenciesData.find((element) => element.name === currency);

    // I make the conversion that we will send back
    const convertedAmount = baseAmount * foundCurrency.rate;

    return Math.round(convertedAmount * 100) / 100;
  }

  // function which will modify the value of value in the state
  setSearch = (value) => {
    this.setState({
      search: value,
    });
  }

  // function to search for a currency
  getCurrencies = () => {
    // by default I want to return the complete list of currencies
    let filteredCurrencies = currenciesData;
    const { search } = this.state;
    // if search is not equal to an empty character string, we filter the currencies
    // if (search !== '') {
    // we can use the truthy value of the non-empty string
    if (search) {
      // we just filter the list of currencies
      filteredCurrencies = currenciesData.filter((currency) => {
        // we pass everything in lowercase to compare
        const loweredCurrency = currency.name.toLowerCase();
        const loweredSearch = search.toLowerCase();
        // here we come to test if in the character string of the name of the currency
        // we have what we have in research
        return loweredCurrency.includes(loweredSearch);
      });
    }
    return filteredCurrencies;
  }

  // function which will modify the value of amount in the state
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
