import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CustomDatePicker from './CustomDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import '@testing-library/jest-dom';

describe('CustomDatePicker', () => {
    const mockOnChange = vi.fn();
  
    beforeEach(() => {
      render(
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CustomDatePicker label="Date of Birth" onChange={mockOnChange} />
        </LocalizationProvider>
      );
    });
  
    it('renders the CustomDatePicker with the correct label', () => {
      const labelElement = screen.getByLabelText(/date of birth/i);
      expect(labelElement).toBeInTheDocument();
    });
  
    it('calls onChange with formatted date when a date is selected', async () => {
        const dateInput = screen.getByRole('textbox');
      
        //simuler la sélection d'une date
        await userEvent.type(dateInput, '2024-10-10');
      
        //vérifier que onChange a été appelé avec la date formatée
        expect(mockOnChange).toHaveBeenCalledWith('10-10-2024');
      });
  
    it('calls onChange with an empty string when date is cleared', () => {
      const dateInput = screen.getByRole('textbox');
  
      //simuler la sélection d'une date
      fireEvent.focus(dateInput);
      fireEvent.change(dateInput, { target: { value: '2024-10-10' } });
  
      //simuler la suppression de la date
      fireEvent.change(dateInput, { target: { value: '' } });
  
      //sérifier que onChange a été appelé avec une chaîne vide
      expect(mockOnChange).toHaveBeenCalledWith('');
    });
  });