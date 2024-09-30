import PropTypes from 'prop-types';
import './button.css';

/**
 * MyButton - Un composant de bouton personnalisé.
 *
 * @component
 * @param {ReactNode} children - Contenu à afficher à l'intérieur du bouton.
 * @param {Object} [style] - Styles CSS supplémentaires à appliquer au bouton.
 * @param {('button'|'submit'|'reset')} [type='button'] - Type du bouton HTML.
 *
 */
const MyButton = ({ children, style, type = 'button' }) => {
  return (
    <button className="custom-button" style={style} type={type}>
      {children}
    </button>
  );
};

MyButton.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default MyButton;

