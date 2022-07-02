import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  margin: 15px;

  ul {
    column-count: 2;
    list-style: none;
  }

  li {
    margin: 3px;
    width: 100%;
  }

  h4 {
  }

  p {
    margin: 0px 10px;
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-height: 100%;

  .ReactModal__Html--open,
  .ReactModal__Body--open {
    overflow: hidden; /* prevents background page from scrolling when the modal is open */
  }
  .ReactModal__Overlay {
    position: fixed;
    z-index: 999999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ReactModal__Content {
    background: white;
    width: 50rem;
    max-width: calc(100vw - 2rem);
    max-height: calc(100vh - 2rem);
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.25);
    overflow-y: auto;
    position: relative;
  }

  .modal-close-btn {
    cursor: pointer;
    top: 1.5rem;
    right: 1.5rem;
    position: absolute;
    width: 3rem;
    height: 3rem;
  }
`;

export const PortfolioImage = styled.img`
  display: none;
  width: 500px;
  height: 265px;

  @media screen and (min-width: 769px) and (min-height: 628px),
    (min-height: 628px) {
    display: block;
  }
`;

export const DescriptionImage = styled.span`
  text-align: center;
  padding: 8px;
`;

export const SectionDescription = styled.div`
  overflow-y: auto;
  scrollbar-color: #c22e18;
`;

export const Description = styled.p`
  text-align: center;
  padding: 8px;
`;
