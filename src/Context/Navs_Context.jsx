import React, { useState, createContext, useContext, useEffect } from 'react';

const Navs = createContext({});

const NavsContext = ({ children }) => {

  // Alert  
    const [ alert, setAlert ] = useState({
      open: false, // Alert Close
      message: "", // Alert message
      type: "", // type of alert
    })
  // Alert

  // Choose navigation type
  const [typeOfNavifation, setTypeOfNavifation] = useState(
    localStorage.getItem("sidebarPosition") || (window.innerWidth < 1100 ? "Mobile_Menu" : "Sidebar_Home")
  );

  useEffect(() => {
    localStorage.setItem("sidebarPosition", typeOfNavifation);
  }, [typeOfNavifation]);

  function handleTypeofPositionChange(e) {
    const position = e.target.value;
    switch (position) {
      case "Sidebar_Home":
      case "Top_Nav_Navigation":
      case "Mobile_Menu":
        setTypeOfNavifation(position);
        break;
      default:
        console.log("Invalid position");
    }
  }

  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth < 1100;
      setTypeOfNavifation(isMobile ? "Mobile_Menu" : "Sidebar_Home");
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Choose navigation type

  // Open SideBarHome
    const [ mobile_Sidebar_Home, set_Mobile_Sidebar_Home ] = useState(false);
    const show_Mobile_Sidebar_Home = () => set_Mobile_Sidebar_Home(!mobile_Sidebar_Home);
  // Open SideBarHome

  return (
    <Navs.Provider 
      value={{ 
        alert, setAlert,
        typeOfNavifation, setTypeOfNavifation, handleTypeofPositionChange,
        mobile_Sidebar_Home, set_Mobile_Sidebar_Home, show_Mobile_Sidebar_Home,
      }}
    >
      {children}
    </Navs.Provider>
  )

};

export default NavsContext;

export const NavsState = () => {
  return useContext(Navs);
};