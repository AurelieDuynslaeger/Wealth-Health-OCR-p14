import PropTypes from 'prop-types';

const MainContent = ({ children }) => {
    return (
      <div className='main_content'>
        {children}
      </div>
    );
};

MainContent.propTypes = {
    children: PropTypes.node.isRequired, 
};

export default MainContent;