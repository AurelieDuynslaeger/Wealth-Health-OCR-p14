
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';


const EmployeeTable = () => {
  const employees = useSelector((state) => state.employees.employees);

  console.log(employees);
  return (
    <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Position</TableCell>
          <TableCell>Department</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {employees.map((employee) => (
          <TableRow key={employee.id}>
            <TableCell>{employee.firstName}</TableCell>
            <TableCell>{employee.lastName}</TableCell>
            <TableCell>{employee.startDate}</TableCell>
            <TableCell>{employee.dateOfBirth}</TableCell>
            <TableCell>{employee.street}</TableCell>
            <TableCell>{employee.city}</TableCell>
            <TableCell>{employee.state}</TableCell>
            <TableCell>{employee.zipcode}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}

export default EmployeeTable