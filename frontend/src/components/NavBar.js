import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { useContext } from "react";

import { UserContext } from "../context/userContext";

export const NavBar = () => {
  const { status, userName } = useContext(UserContext);

  // console.log("user-information", userName);
  // console.log("status", status);

  return (
    <>
      {!status && (
        <NavbarContainer>
          <Logo to="/">
            <LogoText>Facespace</LogoText>
          </Logo>
          <SignIn to="/signin">Sign-In</SignIn>
        </NavbarContainer>
      )}
      {status && (
        <NavbarContainer>
          <Logo to="/">
            <LogoText>Facespace</LogoText>
          </Logo>
          <WelcomeHere>{`Hey, ${userName}`}!</WelcomeHere>
        </NavbarContainer>
      )}
    </>
  );
};

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--page-horizontal-padding);
  height: var(--header-height);
  font-family: var(--heading-font-family);
  background-color: var(--primary-color);
`;
const Logo = styled(NavLink)`
  text-decoration: none;
`;
const LogoText = styled.h1`
  color: white;
`;
const SignIn = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

const WelcomeHere = styled.h1`
  color: white;
`;
