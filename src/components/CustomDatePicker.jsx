
import { useState } from 'react';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { format } from 'date-fns';
import PropTypes from 'prop-types';

const CustomDatePicker = ({ label, onChange }) => {
  const [value, setValue] = useState(null);

  const handleDateChange = (newValue) => {
    setValue(newValue);
    //formater la date avant de l'envoyer
    if (newValue) {
      //formatage direct avec date-fns
      const formattedDate = format(newValue, 'dd-MM-yyyy'); 
      onChange(formattedDate);
    } else {
      //en cas de suppression de la date
      onChange(''); 
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        onChange={handleDateChange}
        components={{
          TextField: (props) => 
          <TextField 
          {...props} 
            variant="outlined" 
            fullWidth
            margin="normal"
             />
        }}
      />
    </LocalizationProvider>
  );
};

CustomDatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomDatePicker;
