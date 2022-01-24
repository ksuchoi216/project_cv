import React from "react";
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWapper>
        <h1>Create CV</h1>
      </HeaderWapper>
    </HeaderContainer>
  );
};


const HeaderContainer = styled.div`
  background-color: ${({theme}) => theme.colors.secondaryDark};
`

const HeaderWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

export default Header;
