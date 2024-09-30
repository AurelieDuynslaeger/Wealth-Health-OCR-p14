import { useEffect } from 'react';
import PropTypes from 'prop-types';
import "./Modal.css";

/**
 * Modal - Un composant de modal personnalisable.
 *
 * @component
 * @param {boolean} isOpen - Indique si la modal est ouverte ou fermée.
 * @param {string} [title] - Titre de la modal.
 * @param {ReactNode} children - Contenu à afficher à l'intérieur de la modal.
 * @param {Function} onClose - Fonction de rappel appelée lorsque la modal est fermée.
 * @param {Object} [primaryButton] - Informations sur le bouton principal.
 * @param {string} primaryButton.label - Étiquette du bouton principal.
 * @param {Function} primaryButton.onClick - Fonction de rappel appelée lorsque le bouton principal est cliqué.
 * @param {Object} [secondaryButton] - Informations sur le bouton secondaire.
 * @param {string} secondaryButton.label - Étiquette du bouton secondaire.
 * @param {Function} secondaryButton.onClick - Fonction de rappel appelée lorsque le bouton secondaire est cliqué.
 * @param {string} [backgroundColor='white'] - Couleur de fond de la modal.
 * @param {string} [textColor='black'] - Couleur du texte de la modal.
 * @param {Object} [buttonStyle={}] - Styles CSS à appliquer aux boutons.
 * @param {string} [borderRadius='4px'] - Rayon de bordure de la modal.
 * @param {string} [padding='20px'] - Espacement intérieur de la modal.
 * @param {string} [boxShadow='0 2px 10px rgba(0,0,0,0.1)'] - Ombre portée de la modal.
 *
 * @example
 * const primaryAction = () => { console.log('Primary Action!'); };
 * const secondaryAction = () => { console.log('Secondary Action!'); };
 *
 * <Modal 
 *   isOpen={true} 
 *   title="My Modal" 
 *   onClose={() => console.log('Modal closed')} 
 *   primaryButton={{ label: 'Confirm', onClick: primaryAction }} 
 *   secondaryButton={{ label: 'Cancel', onClick: secondaryAction }}
 * >
 *   <p>This is the content of the modal.</p>
 * </Modal>
 */
const Modal = ({
  isOpen,
  title,
  children,
  onClose,
  primaryButton,
  secondaryButton,
  backgroundColor = 'white',
  textColor = 'black',
  buttonStyle = {},
  borderRadius = '4px',
  padding = '20px',
  boxShadow = '0 2px 10px rgba(0,0,0,0.1)',
}) => {
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()} 
        style={{ 
          backgroundColor, 
          color: textColor, 
          borderRadius, 
          padding,
          boxShadow 
        }}
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="modal-header">
          {title && <h2 id="modal-title">{title}</h2>}
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>
        <div className="modal-body" id="modal-description">
          {children}
        </div>
        <div className="modal-footer">
          {primaryButton && (
            <button 
              style={buttonStyle.primary} 
              onClick={primaryButton.onClick}
              aria-label={primaryButton.label}
            >
              {primaryButton.label}
            </button>
          )}
          {secondaryButton && (
            <button 
              style={buttonStyle.secondary} 
              onClick={secondaryButton.onClick}
              aria-label={secondaryButton.label}
            >
              {secondaryButton.label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  primaryButton: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
  secondaryButton: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  buttonStyle: PropTypes.shape({
    primary: PropTypes.object,
    secondary: PropTypes.object,
  }),
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  boxShadow: PropTypes.string,
};

export default Modal;
