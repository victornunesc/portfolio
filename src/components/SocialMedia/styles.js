import styled from "styled-components";

export const ContainerSocial = styled.nav`
  position: fixed;
  top: 300px;

  ul {
    padding: 0px;
    transform: translate(-270px, 0);
  }
  ul li {
    display: block;
    margin: 5px;
    background: rgba(0, 0, 0, 0.36);
    width: 300px;
    text-align: right;
    padding: 10px;
    border-radius: 0 30px 30px 0;
    transition: all 1s;
  }
  ul li:hover {
    transform: translate(110px, 0);
    background: rgba(255, 255, 255, 0.4);
  }
  ul li:hover a {
    color: #000;
  }
  ul li:hover i {
    color: #fff;
    background: rgba(0, 0, 0, 0.36);
    transform: rotate(360deg);
    transition: all 1s;
  }
  ul li i {
    margin-left: 10px;
    color: #000;
    background: #fff;
    padding: 10px;
    border-radius: 50%;
    font-size: 20px;
    background: #ffffff;
    transform: rotate(0deg);
  }

  @media screen and (max-width: 769px) {
    display: none;
  }
`;
