import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  position: relative;
  text-align: center;
  padding: 0px 15px;
  height: calc(100vh - 80px);
  justify-content: space-evenly;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column-reverse;
  max-height: 100%;
  overflow-y: scroll;

  @media screen and (min-width: 769px) {
    overflow: auto;
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
  font-size: 0.8em;
  padding: 12px;

  @media screen and (min-width: 769px) {
    font-size: 1em;
  }
`;

export const Title = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 1em;

  @media screen and (min-width: 769px) {
    font-size: 1.6em;
  }
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const SkillIcon = styled.img`
  max-width: 40px;
  max-height: 40px;

  @media screen and (min-width: 769px) {
    max-width: 80px;
    max-height: 80px;
  }
`;

export const DescriptionSkills = styled.span`
  text-align: center;
  padding: 8px;
`;
