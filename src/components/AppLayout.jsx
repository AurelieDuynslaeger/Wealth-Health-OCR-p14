import SideMenu from './SideMenu';
import MainContent from './MainContent';
import PropTypes from 'prop-types';

const AppLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <SideMenu />
      <MainContent>
        {children}
      </MainContent>
    </div>
  );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired, 
  };

export default AppLayout;
