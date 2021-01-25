// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Results from 'src/components/Results';

// == Import
import data from 'src/data/currencies';
import './styles.scss';

// == Composant
const Converter = () => (
  <div className="converter">
    <Header />
    <Currencies
      name={data.name}
      rate={data.rate}
    />
    <Results
      name={data.name}
      rate={data.rate}
    />
  </div>
);

// == Export
export default Converter;
