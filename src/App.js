import { ThemeProvider } from "styled-components";
import About from "./pages/About";

import Home from "./pages/Home";
import { useTheme } from "./providers/ThemeContext";
import GlobalStyle from "./styles/globalStyles";
import { themes } from "./styles/themes";

function App() {
  const { currentTheme } = useTheme();

  return (
    <>
      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyle />
        <Home />
        <About />
      </ThemeProvider>
    </>
  );
}

export default App;
