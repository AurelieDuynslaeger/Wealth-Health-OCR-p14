import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/slices/employeeSlice';
import { useState } from 'react';
import Select from 'react-select';
import { optionsStates, optionsDepartement } from '../lib/optionsValues';
import { Button } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EmployeeForm = () => {
    const { register, handleSubmit, setValue } = useForm();
    const dispatch = useDispatch();
    const [selectedOptionDep, setSelectedOptionDep] = useState(null);
    const [selectedOptionStat, setSelectedOptionStat] = useState(null);
    const [birthDate, setBirthDate] = useState(null);
    const [startDate, setStartDate] = useState(null);


    const onSubmit = (data) => {
      dispatch(addEmployee({ 
          ...data, 
          id: Date.now(), 
          department: selectedOptionDep?.value, 
          state: selectedOptionStat?.value 
      }));
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName')} placeholder="First Name" required />
        <input {...register('lastName')} placeholder="Last Name" required />
        <DatePicker
                selected={birthDate}
                onChange={(date) => {
                    setBirthDate(date);
                    setValue('dateOfBirth', date);
                }}
                placeholderText="Date of Birth"
                dateFormat="yyyy/MM/dd"
                isClearable
            />
        {/* <input {...register('dateOfBirth')} type="date" required /> */}
        <DatePicker
                selected={startDate}
                onChange={(date) => {
                    setStartDate(date);
                    setValue('startDate', date); // Mettre à jour le champ du formulaire
                }}
                placeholderText="Start Date"
                dateFormat="yyyy/MM/dd"
                isClearable
            />
        {/* <input {...register('startDate')} type="date" required /> */}
        <input {...register('street')} placeholder="Street" required />
        <input {...register('city')} placeholder="City" required />
        <Select
          defaultValue={selectedOptionStat}
          onChange={setSelectedOptionStat}
          options={optionsStates}
        />
        <input {...register('zipcode')} placeholder="Zipcode" required />
        <Select
          defaultValue={selectedOptionDep}
          onChange={setSelectedOptionDep}
          options={optionsDepartement}
        />
        <Button variant="contained">Save</Button>
    </form>
  )
}

export default EmployeeForm