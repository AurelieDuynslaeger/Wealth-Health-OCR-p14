import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/slices/employeeSlice';
import { useState } from 'react';
import Select from 'react-select';
import { optionsStates, optionsDepartement } from '../lib/optionsValues';
import { Button } from '@mui/material';
import CustomDatepicker from './CustomDatePicker';

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
        <CustomDatepicker
            selectedDate={birthDate}
            onDateChange={(date) => {
                setBirthDate(date);
                setValue('dateOfBirth', date);
            }}
          />
        {/* <input {...register('dateOfBirth')} type="date" required /> */}
        <CustomDatepicker
            selectedDate={startDate}
            onDateChange={(date) => {
                setStartDate(date);
                setValue('startDate', date);
            }}
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