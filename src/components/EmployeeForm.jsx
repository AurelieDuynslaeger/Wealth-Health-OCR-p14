import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/slices/employeeSlice';
import { useState } from 'react';
import { format } from 'date-fns';
import { optionsStates, optionsDepartement } from '../lib/optionsValues';
import CustomDatepicker from './CustomDatePicker';
import Button from './Button';
import CustomSelect from './CustomSelect';
import Modal from './Modal';
import "../styles/components/employeeform.css"

const EmployeeForm = () => {
    const { register, handleSubmit, setValue } = useForm();
    const dispatch = useDispatch();
    const [selectedOptionDep, setSelectedOptionDep] = useState(null);
    const [selectedOptionStat, setSelectedOptionStat] = useState(null);
    const [birthDate, setBirthDate] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const onSubmit = (data) => {
      const formattedData = {
        ...data,
        id: Date.now(),
        department: selectedOptionDep?.value,
        state: selectedOptionStat?.value,
        birthDate: format(data.birthDate, 'dd-MM-yyyy'), 
        startDate: format(data.startDate, 'dd-MM-yyyy'), 
      };
    
      dispatch(addEmployee(formattedData)); 
      setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
};

  return (
    <>
    
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName')} placeholder="First Name" required />
        <input {...register('lastName')} placeholder="Last Name" required />
        <CustomDatepicker
            selectedDate={birthDate}
            onDateChange={(date) => {
                setBirthDate(date);
                setValue('birthDate', date);
            }}
            placeholder='Date of Birth'
          />
        <CustomDatepicker
            selectedDate={startDate}
            onDateChange={(date) => {
                setStartDate(date);
                setValue('startDate', date);
            }}
            placeholder='Start Date'
          />

        <fieldset>
          <legend>Address</legend>
            <input {...register('street')} placeholder="Street" required />
            <input {...register('city')} placeholder="City" required />
            <CustomSelect
              options={optionsStates}
              onChange={setSelectedOptionStat}
              selectedOption={selectedOptionStat} 
              placeholder="State"
            />
            <input {...register('zipcode')} placeholder="Zipcode" required />
        </fieldset>
          <CustomSelect
            options={optionsDepartement}
            onChange={setSelectedOptionDep}
            selectedOption={selectedOptionDep} 
            placeholder="Departement"
          />
       <Button type="submit">Save</Button>
    </form>

    <Modal
    isOpen={isModalOpen} 
    onClose={closeModal} 
    primaryButton={{ label: "OK", onClick: closeModal }}
    >
    <p>Employee created!</p>
    </Modal>
    </>
  )
}

export default EmployeeForm