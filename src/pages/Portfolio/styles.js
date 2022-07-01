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
  height: 98vh;
  justify-content: space-evenly;
  /* top: -80px; */
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const PortfolioImage = styled.img`
  width: 80px;
  height: 80px;
`;

export const DescriptionImage = styled.span`
  text-align: center;
  padding: 8px;
`;
