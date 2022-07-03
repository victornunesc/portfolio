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
      <NavLogo to="Home" smooth={true} offset={-80} duration={500}>
        Victor Nunes C.
      </NavLogo>
      <NavbarContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Quem sou
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              activeClass="active"
              to="Portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Portfólio
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contato
            </NavLinks>
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
