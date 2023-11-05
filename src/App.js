import { ThemeProvider } from "styled-components";
import About from "./pages/About";
import Home from "./pages/Home";
import { useTheme } from "./providers/ThemeContext";
import GlobalStyle from "./styles/globalStyles";
import { themes } from "./styles/themes";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./pages/Footer";

function App() {
  const { currentTheme } = useTheme();

  return (
    <>
      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyle />
        <Toaster position="bottom-right" reverseOrder={false} />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
