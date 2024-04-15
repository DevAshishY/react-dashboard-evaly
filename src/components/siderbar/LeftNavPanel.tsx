import React, { useState } from "react";
import { Aside, LeftNav, LogoWrapper } from "./leftNavStyle";
import logo from "../../assets/images/logo.png";
import { LuIndent } from "react-icons/lu";
import { LinkList } from "../../constant/data";
import { Link, NavLink } from "react-router-dom";
import { TbIndentDecrease } from "react-icons/tb";


const LeftNavPanel: React.FC = () => {
  const [NavOpen,setOpenNav] =useState(false)


  return (
    <Aside className={NavOpen ? 'close' : ''}>

      <LogoWrapper  className={NavOpen ? 'close flex-center' : 'flex-center'} >
        <a>
          <img src={logo}></img>
        </a>
        <span>evaly</span>
        <em onClick={()=>setOpenNav(!NavOpen)}>
          {
            NavOpen? <LuIndent />:  <TbIndentDecrease/>
          }
          
        
        </em>
      </LogoWrapper>
      <LeftNav className={NavOpen ? 'close' : ''}>
        {LinkList.map((item, index) => {
          return (
            <div key={index}>
              <strong>{item.name}</strong>
              <ul>
                {item.nav.map((navItem, navIndex) => {
                  // Convert IconType to React element
                  const IconComponent = navItem.icons as React.ElementType;
                  return (
                    <li key={navIndex} title={navItem.navName}>
                      <NavLink   to={navItem.link}> <IconComponent />
                        {navItem.navName}</NavLink >
                    
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </LeftNav>
    </Aside>
  );
};

export default LeftNavPanel;
