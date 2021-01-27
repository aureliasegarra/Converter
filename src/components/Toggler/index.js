import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Toggler = ({ onClickButton, isOpen }) => {
  const handleClick = () => {
    onClickButton();
  };
  const classnames = isOpen ? 'toggler toggler--open' : 'toggler';
  // ici on vient utiliser la fonction qu'on nous a passé à travers les props
  // celle-ci sera exécuter à chaque clic
  // return <button type="button" onClick={onClickButton}>Toggle</button>;
  return (
    <button
      type="button"
      onClick={handleClick}
      className={classnames}
    >
      =
    </button>
  );
};

Toggler.propTypes = {
  // on oublie pas de valider la props de type function
  onClickButton: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Toggler;
