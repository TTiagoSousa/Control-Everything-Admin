import React, { useEffect, useState } from 'react';
import './Sidebar_Home.scss';
import { NavLink, useLocation } from 'react-router-dom';
import * as Color from '../../../Styles/Colors';
import * as Icon from '../../../Imports/icons';
import { navItems } from '../Navigation_Map';
import { ThemeState } from '../../../Contexts/Theme_Context';

const Sidebar_Home = () => {

  const { mode } = ThemeState();

  // Styles
    const activeNavLinkStyle = {
      color: 'Dark' ? Color.blue : 'Blue' ? Color.secundary_color_dark : "",
    };

    const TextStyle = {
      color: 'Dark' ? Color.gray :'Blue' ? Color.white : "",
    };

    const activeIcon = {
      fill: 'Dark' ? Color.blue : 'Blue' ? Color.secundary_color_dark : "",
    };

    const iconStyle = {
      fill: 'Dark' ? Color.gray :'Blue' ? Color.white : "",
    };

    const IconStyle = {
      fill:
        mode === 'dark' ?   Color.gray : 
        mode === 'light' ?  Color.gray_dark : "",
    };

    const activeIconkStyle = {
      fill: 
        mode === 'dark' ? Color.blue :
        mode === 'light' ? Color.blue : "",
    };
  // Styles

  const location = useLocation();

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const [isArrowActive, setIsArrowActive] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(prevIndex => (prevIndex === index ? null : index));
    setIsArrowActive(!isArrowActive); // Inverte o estado da classe da seta ao abrir/fechar o submenu
  };

  const isAnyDropdownItemActive = (dropdownItems) => {
    return dropdownItems.some(dropdownItem => location.pathname === dropdownItem.to);
  };

  return (
    <nav className='Sidebar_Home'>
      <div className="Sidebar_Body">
        {navItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.dropdownItems ? (
              <div style={{position: "relative"}}>
                <NavLink
                  to={item.to}
                  onClick={() => toggleDropdown(index)}
                  className='Nav_Item_With_Drop_Menu'
                  style={location.pathname === item.to ? activeNavLinkStyle : TextStyle}
                >
                  <div className='Icon'>
                    <div>   
                      <Icon.GLobal_SVG 
                         Global_Color={(openDropdownIndex === index || isAnyDropdownItemActive(item.dropdownItems)) ? activeIconkStyle.fill :  IconStyle.fill}
                      >
                        {item.icon}
                      </Icon.GLobal_SVG>
                    </div>
                  </div>
                  <div className='Text'>
                    <span style={(openDropdownIndex === index || isAnyDropdownItemActive(item.dropdownItems)) ? activeNavLinkStyle : TextStyle}>{item.text}</span>
                    <div className='Icon_Arrow'>
                      <div className={openDropdownIndex === index && isArrowActive ? 'arrow active' : 'arrow'}>
                        <Icon.Simple_Triangle 
                          Global_Color={Color.whitte}
                        />
                      </div>
                    </div>
                  </div>
                </NavLink>
                {openDropdownIndex === index && (
                  <div className='DropdownItems' >
                    {item.dropdownItems.map((dropdownItem, idx) => (
                      <NavLink key={idx} to={dropdownItem.to}  style={location.pathname === dropdownItem.to ? activeNavLinkStyle : TextStyle}>
                        <span >{dropdownItem.text}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={index}
                to={item.to}
                className='Nav_Item'
                style={location.pathname === item.to ? activeNavLinkStyle : TextStyle}
              >
                <div className='Icon'>
                  <div>
                  <Icon.GLobal_SVG Global_Color={location.pathname === item.to ? activeIcon.fill : iconStyle.fill}>  
                      {item.icon}
                    </Icon.GLobal_SVG>
                  </div>
                </div>
                <div className='Text' >
                  <span>{item.text}</span>
                </div>
              </NavLink>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar_Home;