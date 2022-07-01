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
      <NavLogo to="/">Victor Nunes C.</NavLogo>
      <NavbarContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">Quem sou</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="discover">Portfólio</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">Contato</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
      <NavBtn>
        <NavBtnLink onClick={() => setCurrentTheme(getOpositeTheme())}>
          {currentTheme === "Light" ? <ThemeIconNight /> : <ThemeIconLight />}
        </NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
