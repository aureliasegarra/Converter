// Import React
import React from 'react';

// Import Components
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Results from 'src/components/Results';

// Import data
import currenciesData from 'src/data/currencies';
import './styles.scss';

// to be able to manage a state, you must pass the Converter function to class
class Converter extends React.Component {
  state = {
    open: false,
  }

  toggle = () => {
    const { open } = this.state;
    // DO NOT CHANGE STATE VALUES DIRECTLY
    // to change a state value, you have to go through this.setState
    this.setState({
      open: !open,
    });
  }

  render() {
    // to return the JSX of our components
    // the React Component class gives us the render() method
    const { open } = this.state;

    return (
      <div className="converter">
        <Header baseAmount={1} />
        <button type="button" onClick={this.toggle}>Toggle</button>
        {open && ( // make conditional view in the JSX, we use the && operator
          <Currencies currencies={currenciesData} />
        )}
        <Results
          value={1.09}
          currency="United State Dollar"
        />
      </div>
    );
  }
}

export default Converter;
