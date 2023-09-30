import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  margin: 15px;
  align-items: center;

  ul {
    column-count: 2;
    list-style: none;
  }

  li {
    margin: 3px;
    width: 100%;
  }

  p {
    font-family: Arial;
    margin: 0px 10px;
    color: ${({ theme }) => theme.colorText};
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
`;

export const PortfolioImage = styled.img`
  display: none;
  width: 500px;
  height: 265px;

  @media screen and (min-width: 769px) and (min-height: 628px),
    (min-height: 700px) {
    display: block;
  }
`;

export const DescriptionImage = styled.h3`
  text-align: center;
  padding: 8px;
`;

export const SectionDescription = styled.div`
  overflow-y: auto;
  scrollbar-color: #c22e18;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.p`
  text-align: center;
  padding: 8px;
`;

export const Button = styled.button`
  background-color: #f2f2f2;
  border: 2px solid #422800;
  border-radius: 5px;
  box-shadow: black 3px 3px 0 0;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 28px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: #fff;
  }

  &:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }

  @media (min-width: 768px) {
    min-width: 120px;
    padding: 0 25px;
  }
`;

export const ContainerStack = styled.div`
  display: flex;
  justify-content: center;
  max-width: 300px;
  max-height: 150px;

  @media (min-width: 768px) {
    max-width: 500px;
    max-height: 250px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContainerDescription = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
