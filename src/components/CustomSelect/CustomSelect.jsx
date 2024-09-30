import { useState } from 'react';
import PropTypes from 'prop-types';
import './customselect.css';

/**
 * CustomSelect - Un composant de sélection personnalisé.
 *
 * @component
 * @param {Object[]} options - Liste des options à afficher dans le sélecteur.
 * @param {Object} options[].value - La valeur de l'option.
 * @param {string} options[].label - Le texte affiché pour l'option.
 * @param {Function} onChange - Fonction de rappel appelée lors de la sélection d'une option.
 * @param {Object} [selectedOption] - L'option actuellement sélectionnée.
 * @param {string} placeholder - Texte d'espace réservé affiché lorsque rien n'est sélectionné.
 * 
 */
const CustomSelect = ({ options, onChange, selectedOption, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select" onClick={toggleOptions}>
      <div 
        className="custom-select__control" 
        onClick={() => setIsOpen(!isOpen)} 
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <span className={`arrow ${isOpen ? 'up' : ''}`} />
      </div>
      {isOpen && (
        <ul className="custom-select__options" role="listbox">
          {options.map((option) => (
            <li 
              key={option.value} 
              className="custom-select__option" 
              onClick={() => handleOptionClick(option)}
              role="option"
              tabIndex="0"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
  selectedOption: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

export default CustomSelect;

