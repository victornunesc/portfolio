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

    p {
      font-family: "Georgia,Cambria,Times New Roman,Times,serif";
      font-size: 0.8em;
      padding: 12px;

      @media screen and (min-width: 769px) {
        font-size: 1em;
      }
    }

    h1 {
      font-weight: bold;
      font-size: 1em;

      @media screen and (min-width: 769px) {
        font-size: 1.6em;
      }
      
      @media screen and (max-width: 480px) {
        font-size: 26px;
      }

      @media screen and (max-width: 420px) {
        font-size: 18px;
      }
  }

    h3 {
      font-family: "Playfair Display", serif;
      font-weight: bold;
      font-size: 0.8em;

      @media screen and (min-width: 769px) {
        font-size: 1.3em;
      }
    }

    a {
        color: "#010606";
        text-decoration: none;
      }
`;

export default GlobalStyle;
