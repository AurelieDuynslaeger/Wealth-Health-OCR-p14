import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatepicker = ({ selectedDate, onDateChange }) => {
    return (
        <DatePicker
            selected={selectedDate}
            onChange={onDateChange}
            dateFormat="yyyy/MM/dd"
            isClearable
            placeholderText="Select a date"
        />
    );
};

CustomDatepicker.propTypes = {
    selectedDate: PropTypes.instanceOf(Date),
    onDateChange: PropTypes.func.isRequired,  
};

export default CustomDatepicker;
