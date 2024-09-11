import React from 'react';
import Private_Routes from '../../../Routes/Private_Routes';
import './CE_Work_Space.scss';
import Header_Home from '../../../Containers/Headers/Header_Home/Header_Home';
import { NavsState } from '../../../Contexts/Navs_Context';
import Sidebar_Home from '../../../Containers/Navigation_Home/Sidebar_Home/Sidebar_Home';
import Mobile_Menu_Home from '../../../Containers/Navigation_Home/Mobile_Menu_Home/Mobile_Menu_Home';

const CE_Work_Space = () => {

  const { typeOfNavifation } = NavsState();

  function getNavClass() {
    switch (typeOfNavifation) {
      case "Sidebar_Home":
        return "Container_With_Sidebar"
      case "Mobile_Menu":
        return "Container_With_MobileMenu";
      default:
        console.log("Invalid position");
        return "";
    }
  }

  return (
    <>

      <Header_Home />

      {
        typeOfNavifation === "Sidebar_Home" ? (
          <Sidebar_Home />
        ) : typeOfNavifation === "Mobile_Menu" ? (
          <Mobile_Menu_Home />
        ) : null
      }

      <div className='CE_Section'>
        <div className={getNavClass()}>
          <Private_Routes />
        </div>
      </div>
    </>
  )
};

export default CE_Work_Space;