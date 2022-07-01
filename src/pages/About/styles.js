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
  height: 100vh;
  justify-content: space-evenly;
  top: -80px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
`;

export const ProfileImage = styled.img`
  width: 224px;
  height: 275px;
`;

export const AboutMe = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;
