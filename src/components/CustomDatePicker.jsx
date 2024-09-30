
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { format } from 'date-fns';
import PropTypes from 'prop-types';

const CustomDatePicker = ({ label, onChange }) => {
  const [value, setValue] = useState(null);

  const handleDateChange = (newValue) => {
    setValue(newValue);
    // Formater la date avant de l'envoyer
    const formattedDate = format(newValue, 'dd-MM-yyyy'); // Formatage direct avec date-fns
    onChange(formattedDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        onChange={handleDateChange}
      />
    </LocalizationProvider>
  );
};

CustomDatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomDatePicker;
