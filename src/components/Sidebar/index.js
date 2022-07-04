import toast from "react-hot-toast";
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
  const { setCurrentTheme, getOpositeTheme, currentTheme } = useTheme();

  const switchTheme = () => {
    setCurrentTheme(getOpositeTheme());

    if (currentTheme === "Light") {
      toast("Hello darkness! 🎶", {
        icon: "👋",
        position: "bottom-center",
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
        position: "bottom-center",
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
          <SidebarTheme onClick={() => switchTheme()}>
            Modo {getOpositeTheme()}
          </SidebarTheme>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
