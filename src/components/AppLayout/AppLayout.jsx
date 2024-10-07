import SideMenu from '../SideMenu/SideMenu';
import MainContent from '../MainContent/MainContent';
import PropTypes from 'prop-types';

const AppLayout = ({ children }) => {
  return (
    <div className='app_layout'>
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
