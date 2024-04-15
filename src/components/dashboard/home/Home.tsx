import React, { useState } from "react";
import { styled } from "styled-components";
import { GlobalStyle } from '../../../styles/global';
import LeftNavPanel from '../../siderbar/LeftNavPanel';
import MainContent from '../../dashboard/Dashboard';

export const InputStyle = styled.div`
  position: relative;

`;

const MainContentWrapper = styled.div`
display:flex;
`;


const Home: React.FC = () => {
  return (
    <>
      <MainContentWrapper>
        <LeftNavPanel />
        <MainContent />
      </MainContentWrapper>
      <GlobalStyle />
    </>
  );
};

export default Home;
