import React from "react";
import { FaBars } from "react-icons/fa";
import { useTheme } from "../../providers/ThemeContext";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  ThemeIconLight,
  ThemeIconNight,
} from "./styles";

const Navbar = ({ toggle }) => {
  const { setCurrentTheme, getOpositeTheme, currentTheme } = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Victor Nunes C.</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">Sobre</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="discover">Portfólio</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">Novidades</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">Contato</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink onClick={() => setCurrentTheme(getOpositeTheme())}>
            {currentTheme === "Light" ? <ThemeIconNight /> : <ThemeIconLight />}
          </NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
