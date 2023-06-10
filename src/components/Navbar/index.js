import React from "react";
import toast from "react-hot-toast";
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
import { useTranslation } from "react-i18next";
import I18n from "../I18n";

const Navbar = ({ toggle }) => {
  const { setCurrentTheme, getOpositeTheme, currentTheme } = useTheme();
  const { t } = useTranslation();

  const switchTheme = () => {
    setCurrentTheme(getOpositeTheme());

    if (currentTheme === "Light") {
      toast("Hello darkness my old friend! 🎶", {
        icon: "👋",
        style: {
          borderRadius: "10px",
          border: "1px solid #333",
          background: "#f2f2f2",
          color: "#333",
        },
      });
    } else {
      toast("Light My Fire! 🎶", {
        icon: "🔥",
        style: {
          borderRadius: "10px",
          border: "1px solid #f2f2f2",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

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
              {t("home.message")}
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
        <NavBtnLink onClick={() => switchTheme()}>
          {currentTheme === "Light" ? (
            <ThemeIconNight id="dark" />
          ) : (
            <ThemeIconLight id="light" />
          )}
        </NavBtnLink>
        <I18n />
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
