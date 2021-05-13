import   { useState } from "react";
import PropTypes from "prop-types"; 
import {   Topbar } from "./Components"; 
 

const Main = (props) => {
  const { children } = props;
   
 
  return (
  
      <div 
        className="h-full"
      >
        {/*llamamos al topbar en cualquier vista*/}{" "}
        <Topbar  /> 
        {/*EN EL MAIN LLAMAMOS AL HIJO QUE SERÁ EL LAYOUT DE CUALQUIER VISTA*/}
        <main className="h-full">{children}</main>
      </div> 
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
