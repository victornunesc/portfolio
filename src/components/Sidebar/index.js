import { useTheme } from "../../providers/ThemeContext";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarTheme,
  SidebarWrapper,
  SideBtnWrap,
} from "./styles";

const Sidebar = ({ isOpen, toggle }) => {
  const { setCurrentTheme, getOpositeTheme } = useTheme();

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={toggle}
          >
            Quem sou
          </SidebarLink>
          <SidebarLink
            activeClass="active"
            to="Portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggle}
          >
            Portfólio
          </SidebarLink>
          <SidebarLink
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggle}
          >
            Contato
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarTheme
            to="signin"
            onClick={() => setCurrentTheme(getOpositeTheme())}
          >
            Modo {getOpositeTheme()}
          </SidebarTheme>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
