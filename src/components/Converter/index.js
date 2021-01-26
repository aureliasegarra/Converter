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
    open: false,
    baseAmount: 1,
    currency: 'United States Dollar',
  }

  toggle = () => {
    const { open } = this.state;
    // DO NOT CHANGE STATE VALUES DIRECTLY
    // to change a state value, you have to go through this.setState
    this.setState({
      open: !open,
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

  render() {
    // to return the JSX of our components
    // the React Component class gives us the render() method
    const { open, baseAmount, currency } = this.state;
    const convertedAmount = this.makeConversion();

    return (
      <div className="converter">
        <Header baseAmount={baseAmount} />
        <Toggler onClickButton={this.toggle} />
        {open && ( // make conditional view in the JSX, we use the && operator
          <Currencies currencies={currenciesData} />
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
