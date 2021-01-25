// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Results from 'src/components/Results';
import './styles.scss';

// == Composant
const Converter = () => (
  <div className="converter">
    <Header />
    <Currencies />
    <Results />
  </div>
);

// == Export
export default Converter;
