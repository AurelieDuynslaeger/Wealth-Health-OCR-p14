import { Link } from 'react-router-dom'; 
// import whlogo from "../../public/assets/wealthhealthlogo.png"; 
import { FaHouse, FaPeopleGroup } from "react-icons/fa6";
import '../styles/components/SideMenu.css';

const navPaths = [
  {
    to: "/",
    name: "Accueil",
    icon: <FaHouse/>
  },
  {
    to: "/employees-list",
    name: "Liste des Employés",
    icon: <FaPeopleGroup/>
  }
]

const SideMenu = () => {
  return (
    <div className='side-menu'>
      <nav>
        <ul className="menu-list">
        {navPaths.map((nav) => (
            <li key={nav.to} className="menu-item">
              <Link to={nav.to} className="menu-link">
              <span className="menu-icon">{nav.icon}</span>
              <span className="menu-text">{nav.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;

