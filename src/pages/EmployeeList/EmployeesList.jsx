import React from 'react';
import EmployeeTable from "../../components/EmployeeTable/EmployeeTable"
import './employeeslist.css'


const EmployeesList = () => {
  return (
   
   <div className="hr-employees-list">
      <h1>Current Employees</h1>
      <EmployeeTable/>
    </div>
   
  )
}

export default EmployeesList