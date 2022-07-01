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
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

export const ProfileImage = styled.img`
  display: none;
  width: 224px;
  height: 275px;

  @media screen and (min-width: 769px) {
    display: block;
  }
`;

export const DescriptionProfile = styled.figcaption`
  font-family: "Gentium Book Plus", serif;
  font-style: italic;
  font-size: 12px;

  @media screen and (max-width: 769px) {
    display: none;
  }
`;

export const AboutMe = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const AboutText = styled.p`
  font-family: "Syne Mono", monospace;
  font-size: 15px;
  padding: 12px;

  @media screen and (min-width: 769px) {
    font-size: 17px;
  }
`;

export const Title = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: bold;
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const SkillIcon = styled.img`
  width: 40px;
  height: 40px;

  @media screen and (min-width: 769px) {
    width: 80px;
    height: 80px;
  }
`;

export const DescriptionSkills = styled.span`
  text-align: center;
  padding: 8px;
`;
