import   { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";  
import { Sidebar, Topbar } from "./Components"; 
 

const Main = (props) => {
  const { children } = props;
  
  const isDesktop =  {
    defaultMatches: true,
  } ;

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar =  openSidebar;  
  return (
  
      <div 
        className="h-full"
      >
        {/*llamamos al topbar en cualquier vista*/}{" "}
        <Topbar onSidebarOpen={handleSidebarOpen} />
        {/*llamamos al sidebar {" "}
        <Sidebar
          onClose={handleSidebarClose}
          open={shouldOpenSidebar}
          variant={"temporary"}
        /> */}
        {/*EN EL MAIN LLAMAMOS AL HIJO QUE SERÁ EL LAYOUT DE CUALQUIER VISTA*/}
        <main className="h-full">{children}</main>
      </div> 
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
