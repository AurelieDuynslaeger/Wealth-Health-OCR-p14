import EmployeeTable from "../components/EmployeeTable"
import '../styles/pages/employeeslist.css'


const EmployeesList = () => {
  return (
   
   <div className="hr-employees-list">
      <h1>Current Employees</h1>
      <EmployeeTable/>
    </div>
   
  )
}

export default EmployeesList