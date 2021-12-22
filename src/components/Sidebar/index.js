import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRouter,
  SidebarWrapper,
  SideBtnWrap,
} from "./styles";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">Sobre</SidebarLink>
          <SidebarLink to="discover">Portfólio</SidebarLink>
          <SidebarLink to="services">Novidades</SidebarLink>
          <SidebarLink to="signup">Contato</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRouter to="signin">Sign In</SidebarRouter>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
