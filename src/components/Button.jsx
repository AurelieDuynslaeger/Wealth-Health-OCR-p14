import PropTypes from 'prop-types';
import '../styles/components/button.css';

/**
 * MyButton - Un composant de bouton personnalisé.
 *
 * @component
 * @param {Function} onClick - Fonction de rappel appelée lorsque le bouton est cliqué.
 * @param {ReactNode} children - Contenu à afficher à l'intérieur du bouton.
 * @param {Object} [style] - Styles CSS supplémentaires à appliquer au bouton.
 * @param {('button'|'submit'|'reset')} [type='button'] - Type du bouton HTML.
 *
 */
const MyButton = ({ onClick, children, style, type = 'button' }) => {
  return (
    <button className="custom-button" onClick={onClick} style={style} type={type}>
      {children}
    </button>
  );
};

MyButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default MyButton;
