import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees: JSON.parse(localStorage.getItem('employeesData')) || [],
}

export const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        getAll: (state) => {
            return state;
        },
        addEmployee: (state, action) => {
            const newEmployee = action.payload;
            state.employees.push(newEmployee);
            localStorage.setItem('employeesData', JSON.stringify(state.employees));
        },
        updateEmployee: (state, action) => {
            const updatedEmployee = action.payload;
            const index = state.employees.findIndex(emp => emp.id === updatedEmployee.id);
            if (index !== -1) {
                state.employees[index] = updatedEmployee;
                localStorage.setItem('employeesData', JSON.stringify(state.employees));
            }
        },
        deleteEmployee: (state, action) => {
            const employeeId = action.payload;
            state.employees = state.employees.filter(emp => emp.id !== employeeId);
            localStorage.setItem('employeesData', JSON.stringify(state.employees));
        },
    }
});

export const { getAll, addEmployee, updateEmployee, deleteEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;