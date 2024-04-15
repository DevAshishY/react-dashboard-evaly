// src/components/MainContent.tsx
import React from 'react';
import { DashboarHeader, DashboarHeaderRight, DashboardWrapper } from './dashboardStyle';
import { Outlet } from 'react-router';
import { styled } from 'styled-components';
export const Header = styled.div`
position: absolute;
right: 31px;
top:10px;

`;



const MainContent: React.FC = () => {
  return (
    <DashboardWrapper>
      <Header>
      <DashboarHeader className='flex-justify'>
       
  
       <DashboarHeaderRight>
         <span className='notification'>login</span>
       </DashboarHeaderRight>
     </DashboarHeader>
      </Header>
 

      <Outlet/>
    
    </DashboardWrapper>
  );
};

export default MainContent;
