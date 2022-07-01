import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  position: relative;
  text-align: center;
  padding: 15px;
  height: 90vh;
  justify-content: space-evenly;
  /* top: -80px; */
`;

export const Title = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: bold;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;

  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const PortfolioImage = styled.img`
  max-width: 340px;
  height: 300px;

  @media screen and (min-width: 769px) {
    max-width: 600px;
    height: 300px;
  }
`;

export const DescriptionImage = styled.span`
  text-align: center;
  padding: 8px;
`;

export const Description = styled.p`
  text-align: center;
  padding: 8px;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.blue ? "#3dd1e7" : "#c22e18")};
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  color: ${(props) => props.theme.color};
  display: flex;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.5rem;
  padding: 0.75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 190px;
  margin: 0px 10px;
  max-width: 460px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:focus {
    outline: 0;
  }

  &:after {
    content: "";
    position: absolute;
    border: 1px solid ${(props) => props.theme.color};
    bottom: 4px;
    left: 4px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
  }

  &:hover:after {
    bottom: 2px;
    left: 2px;
  }

  @media (min-width: 768px) {
    padding: 0.75rem 3rem;
    font-size: 1.25rem;
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
