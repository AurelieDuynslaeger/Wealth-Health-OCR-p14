import EmployeeForm from "../components/EmployeeForm"
import "../styles/pages/home.css"


const Home = () => {
  return (
    <div className="hr-form">
      <h1>HR Net</h1>
      <p>Create an Employee</p>
      <EmployeeForm/>
    </div>
  )
}

export default Home