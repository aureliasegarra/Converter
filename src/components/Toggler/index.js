import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Toggler = ({ onClickButton, isOpen }) => {
  const handleClick = () => {
    onClickButton();
  };
  const classnames = isOpen ? 'toggler toggler--open' : 'toggler'; // ternaire
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
  onClickButton: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Toggler;
