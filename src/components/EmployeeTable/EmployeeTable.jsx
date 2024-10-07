import { useSelector } from 'react-redux';
import { useState } from 'react';
import { TablePagination } from '@mui/material';
import { HiChevronUp, HiChevronDown } from "react-icons/hi2";
import './employeetable.css'; 

const EmployeeTable = () => {
  const employees = useSelector((state) => state.employees.employees);

  //state pour la pagination
  const [page, setPage] = useState(0);
  //afficher 10 résultats par page
  const [rowsPerPage, setRowsPerPage] = useState(10); 

  //state pour le tri
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
   //state pour la recherche
   const [searchTerm, setSearchTerm] = useState('');


  //gestion du changement de page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  //gestion du changement du nombre de résultats par page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //fonction de tri
  const sortedEmployees = [...employees].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });

  //gérer le tri en cliquant sur un <th>
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  //afficher la flèche du tri
  const getSortArrow = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? <HiChevronUp /> : <HiChevronDown />;
    }
    return null;
  };

  // Filtrer les employés en fonction du terme de recherche
  const filteredEmployees = sortedEmployees.filter((employee) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      employee.firstName.toLowerCase().includes(searchTermLower) ||
      employee.lastName.toLowerCase().includes(searchTermLower) ||
      employee.street.toLowerCase().includes(searchTermLower) ||
      employee.city.toLowerCase().includes(searchTermLower) ||
      employee.state.toLowerCase().includes(searchTermLower) ||
      employee.zipcode.toLowerCase().includes(searchTermLower)
    );
  });

  //calcul des employés à afficher pour la page courante
  const paginatedEmployees = filteredEmployees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div className="table-container">
      {/* Champ de recherche */}
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <table className="employee-table">
      <thead>
          <tr>
            <th onClick={() => handleSort('firstName')}>
              First Name {getSortArrow('firstName')}
            </th>
            <th onClick={() => handleSort('lastName')}>
              Last Name {getSortArrow('lastName')}
            </th>
            <th onClick={() => handleSort('startDate')}>
              Start Date {getSortArrow('startDate')}
            </th>
            <th onClick={() => handleSort('dateOfBirth')}>
              Date of Birth {getSortArrow('dateOfBirth')}
            </th>
            <th onClick={() => handleSort('street')}>
              Street {getSortArrow('street')}
            </th>
            <th onClick={() => handleSort('city')}>
              City {getSortArrow('city')}
            </th>
            <th onClick={() => handleSort('state')}>
              State {getSortArrow('state')}
            </th>
            <th onClick={() => handleSort('zipcode')}>
              Zip Code {getSortArrow('zipcode')}
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.startDate}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination MUI */}
      <TablePagination
        component="div"
        count={employees.length} 
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Résultats par page:"
      />
    </div>
  );
};

export default EmployeeTable;
