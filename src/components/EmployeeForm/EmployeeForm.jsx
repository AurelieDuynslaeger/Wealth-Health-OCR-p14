import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../redux/slices/employeeSlice';
import React, { useState, Suspense } from 'react';
import { optionsStates, optionsDepartement } from '../../lib/optionsValues';
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker';
import Button from '../Button/Button';
import CustomSelect from '../CustomSelect/CustomSelect';
import ModalComponent from "modal-component-ocr-finalproject";

// const Modal = React.lazy(() => import('../Modal/Modal'));
import "./employeeform.css";

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
            dateOfBirth: data.dateOfBirth,
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
                <div className="identity-inputs">
                <input {...register('firstName')} placeholder="First Name" required />
                <input {...register('lastName')} placeholder="Last Name" required />

                </div>
                <div className='dates-pickers'>
                    <CustomDatePicker 
                        label="Date of Birth" 
                        onChange={(date) => {
                            setValue('dateOfBirth', date);
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
                    <div className='employee-location'>
                        <input {...register('zipcode')} placeholder="Zipcode" required />
                        <CustomSelect
                            options={optionsStates}
                            onChange={setSelectedOptionStat}
                            selectedOption={selectedOptionStat} 
                            placeholder="State"
                        />
                    </div>
                </fieldset>
                
                <CustomSelect
                    options={optionsDepartement}
                    onChange={setSelectedOptionDep}
                    selectedOption={selectedOptionDep} 
                    placeholder="Departement"
                />
                
                <Button type="submit">Save</Button>
            </form>
                {/* Affichage conditionnel de la modal avec fallback */}
                {isModalOpen && (
                <Suspense fallback={<div>Loading...</div>}>
                    <ModalComponent
                        isOpen={isModalOpen} 
                        onClose={closeModal} 
                        primaryButton={{ label: "OK", onClick: closeModal, style: {backgroundColor: "#98AC3B", color: "#000"} }}
                        text='Employee created!'
                        style={{
                            backgroundColor: "#f0f0f0",
                            color: "#000",
                            borderRadius: '8px',
                            padding: "20px",
                            boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)",
                        }}
                    />
                </Suspense>
            )}
        </>
    );
}

export default EmployeeForm;
