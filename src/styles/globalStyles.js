import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    /*Colors*/
    --color-primary-dark: #102131;
    --color-primary-light:  #F2F2F2F2;
  }

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Encode Sans Expanded", sans-serif;
}

  body {
    color: ${(props) => props.theme.color};
    transition: background-color 0.8s linear, color 0.5s linear;
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.backgroundColor};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  .ReactModal__Body--open {
    overflow: hidden;
  }
`;

export default GlobalStyle;
