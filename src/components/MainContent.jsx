import { Container } from '@mui/material';
import PropTypes from 'prop-types';

const MainContent = ({ children }) => {
    return (
      <Container style={{ padding: '40px' }}>
        {children}
      </Container>
    );
  };

  MainContent.propTypes = {
    children: PropTypes.node.isRequired, 
  };
  
  export default MainContent;