import { useState, useContext } from "react";
import PropTypes from "prop-types"; 



const Sidebar = (props) => {
  const { open, variant, history, onClose } = props;  
  const handleLinkTo = (to) => {
    onClose();
    history.push(to);
  };

  return ( 
     <div>
       sidebard
     </div>  
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
