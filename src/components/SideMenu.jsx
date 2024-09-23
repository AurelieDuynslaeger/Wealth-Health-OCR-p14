import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, People } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import whlogo from "../../public/assets/wealthhealthlogo.png"

import '../styles/components/SideMenu.css'

const SideMenu = () => {
  return (
    <div style={{ width: '250px', height: '100vh', backgroundColor: '#f5f9ce', color: '#232C07', borderTopRightRadius : "25px", borderBottomRightRadius : "25px" }}>
      <img src={whlogo} alt="Wealth Health HR Net Logo"  />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <Home style={{ color: '#637615' }} />
          </ListItemIcon>
          <ListItemText primary="Accueil" />
        </ListItem>
        <ListItem button component={Link} to="/employees-list">
          <ListItemIcon>
            <People style={{ color: '#637615' }} />
          </ListItemIcon>
          <ListItemText primary="Liste des Employés" />
        </ListItem>
      </List>
    </div>
  );
};

export default SideMenu;
