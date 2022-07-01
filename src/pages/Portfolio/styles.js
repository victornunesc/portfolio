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
  width: 600px;
  height: 300px;
`;

export const DescriptionImage = styled.span`
  text-align: center;
  padding: 8px;
`;

export const Description = styled.p`
  text-align: center;
  padding: 8px;
`;
