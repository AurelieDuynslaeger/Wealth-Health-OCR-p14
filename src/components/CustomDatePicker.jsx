import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatepicker = ({ selectedDate, onDateChange, placeholder = "Select a date" }) => {
    return (
        <DatePicker
            selected={selectedDate}
            onChange={onDateChange}
            dateFormat="dd/MM/yyyy"
            isClearable
            placeholderText={placeholder}
        />
    );
};

CustomDatepicker.propTypes = {
    selectedDate: PropTypes.instanceOf(Date),
    onDateChange: PropTypes.func.isRequired,  
    placeholder: PropTypes.string,
};

export default CustomDatepicker;
