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
          <SidebarLink to="about" onClick={toggle}>
            Quem sou
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Portfólio
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
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
