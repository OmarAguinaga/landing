import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import logo from "../../images/logo.svg";

const HeaderWrapper = styled.div`
  background: #382d45bf;
  margin: 0;
`;
const LogoContainer = styled.div`
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  img {
    height: 250px;
    margin: 0;
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} alt="CodeMonkey Logo" />
      </LogoContainer>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
