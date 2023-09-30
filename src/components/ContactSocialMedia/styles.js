import styled from "styled-components";

export const ContainerSocial = styled.div`
  width: 100%;

  .buttons {
    display: flex;
    justify-content: space-evenly;
  }

  .effect {
    /*display: flex; */

    a,
    button {
      cursor: pointer;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 25px;
      overflow: hidden;
      position: relative;
      background-color: transparent;
      color: ${(props) => props.theme.color};
      border: 2px solid ${(props) => props.theme.color};

      i {
        position: relative;
        z-index: 3;
      }

      :last-child {
        margin-right: 0px;
      }

      :before {
        content: "";
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }

      i {
        display: inline-block;
        vertical-align: middle;
      }
    }

    @media screen and (max-width: 768px) {
      a {
        width: 50px;
        height: 50px;
      }
      button {
        width: 50px;
        height: 50px;
      }
    }

    @media screen and (max-width: 480px) {
    }

    @media screen and (max-width: 420px) {
      a {
        width: 40px;
        height: 40px;
      }

      button {
        width: 40px;
        height: 40px;
      }
    }
  }

  .effect.varrius {
    a,
    button {
      transition: all 0.2s linear 0s;

      :after {
        content: "";
        display: block;
        width: 90%;
        height: 90%;
        top: -110%;
        left: 0;
        right: 0;
        margin: auto;
        position: absolute;
        background-color: ${(props) => props.theme.color};
        border-radius: 50%;
      }

      :hover {
        color: #c22e18;

        &:after {
          top: 5%;
          transition: all 0.2s linear 0s;
        }
      }
    }
  }
`;
