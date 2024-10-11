import { render, screen, fireEvent } from '@testing-library/react';
import CustomSelect from './CustomSelect';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom';

describe('CustomSelect Component', () => {
    const options = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ];
  
    //crée une fonction mock
    const mockOnChange = vi.fn(); 
  
    beforeEach(() => {
      render(
        <CustomSelect
          options={options}
          onChange={mockOnChange}
          //simule un état non sélectionné
          selectedOption={null} 
          placeholder="Select an option"
        />
      );
    });
  
    it('renders correctly with placeholder', () => {
      const placeholderElement = screen.getByText(/select an option/i);
      expect(placeholderElement).toBeInTheDocument();
    });
  
    it('opens options when clicked', () => {
      const selectControl = screen.getByRole('button', { hidden: true });
      fireEvent.click(selectControl);
  
      //vérifie si les options sont affichées
      const optionElement1 = screen.getByText('Option 1');
      const optionElement2 = screen.getByText('Option 2');
      expect(optionElement1).toBeInTheDocument();
      expect(optionElement2).toBeInTheDocument();
    });
  
    it('calls onChange with selected option', () => {
      const selectControl = screen.getByRole('button', { hidden: true });
      fireEvent.click(selectControl);
  
      //sélectionne l'option
      const optionElement = screen.getByText('Option 1');
      fireEvent.click(optionElement);
  
      expect(mockOnChange).toHaveBeenCalledWith({ value: '1', label: 'Option 1' });
    });
  });
