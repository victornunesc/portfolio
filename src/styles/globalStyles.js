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

  .ReactModal__Content { 
      position: absolute;
      top: 40px;
      left: 40px;
      right: 40px;
      bottom: 40px;
      border: 1px solid #ccc;
      background: #fff;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      border-radius: 4px;
      outline: none;
      padding: 20px;
      top: 50%;
      left: 50%;
      right: auto;
      bottom: auto;
      margin-right: -50%;
      transform: translate(-50%, -50%);
      max-width: 768px;
      max-height: 90vh;
      color: black;
    }
`;

export default GlobalStyle;
