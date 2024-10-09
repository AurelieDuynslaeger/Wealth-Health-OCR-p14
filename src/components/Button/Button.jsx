import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Button - Un composant de bouton personnalisé.
 *
 * @component
 * @param {ReactNode} children - Contenu à afficher à l'intérieur du bouton.
 * @param {Object} [style] - Styles CSS supplémentaires à appliquer au bouton.
 * @param {('button'|'submit'|'reset')} [type='button'] - Type du bouton HTML.
 *
 */
const Button = ({ children, style, type = 'button' }) => {
  return (
    <button className="custom-button" style={style} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;

