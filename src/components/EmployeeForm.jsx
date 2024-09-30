import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/slices/employeeSlice';
import { useState } from 'react';
import { optionsStates, optionsDepartement } from '../lib/optionsValues';
import CustomDatePicker from './CustomDatePicker';
import Button from './Button';
import CustomSelect from './CustomSelect';
import Modal from './Modal';
import "../styles/components/employeeform.css";

const EmployeeForm = () => {
    const { register, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch();
    const [selectedOptionDep, setSelectedOptionDep] = useState(null);
    const [selectedOptionStat, setSelectedOptionStat] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onSubmit = (data) => {
        const formattedData = {
            ...data,
            id: Date.now(),
            department: selectedOptionDep?.value,
            state: selectedOptionStat?.value,
            birthDate: data.birthDate,
            startDate: data.startDate,
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
                <div className='dates-pickers'>
                    <CustomDatePicker 
                        label="Date of Birth" 
                        onChange={(date) => {
                            setValue('birthDate', date);
                        }}
                    />
                    <CustomDatePicker 
                        label="Start Date" 
                        onChange={(date) => {
                            setValue('startDate', date);
                        }}
                    />
                </div>

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
    );
}

export default EmployeeForm;
