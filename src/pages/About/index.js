import {
  Container,
  Section,
  ProfileImage,
  AboutMe,
  DescriptionSkills,
  IconDiv,
  SkillIcon,
  DescriptionProfile,
  AboutText,
  Title,
} from "./styles";
import Profile from "../../assets/example-perfil.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import Python from "../../assets/skills/python.png";
import Javascript from "../../assets/skills/js.png";
import CSS from "../../assets/skills/css-3.png";
import React from "../../assets/skills/react.png";
import Nodejs from "../../assets/skills/nodejs.png";
import Typescript from "../../assets/skills/typescript.png";
import HTML from "../../assets/skills/html-5.png";

const About = () => {
  return (
    <Container>
      <Title>Olá! Prazer em ver você por aqui!</Title>
      <Section>
        <figure>
          <ProfileImage src={Profile} alt="Foto de perfil" />
          <DescriptionProfile>
            "Combata funcionalidades… a única forma de fazer software seguro,
            confiável e rápido é faze-lo pequeno.“
          </DescriptionProfile>
        </figure>
        <AboutMe>
          <AboutText>
            Me chamo Victor Nunes, trabalho com desenvolvimento de software,
            entusiasta em UX. Especialista em Aplicativos e Games com mais de 12
            anos de experiência em mídias interativas. Possuo experiência com
            equipes multinacionais, além de certificação compatível e 4 prêmios
            de reconhecimento nacional junto à Funbites Games Studio.
          </AboutText>
          <AboutText>
            Trabalho com desenvolvimento iOS há 8 anos e tenho mais de 20
            aplicativos publicados na App Store. Atualmente atuo na X-team e
            compartilho conteúdo no canal Attekita Dev.
          </AboutText>
        </AboutMe>
      </Section>

      <hr />
      <div>
        <Title style={{ marginBottom: "20px" }}>Skills</Title>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{ 768: { slidesPerView: 5 } }}
        >
          <SwiperSlide>
            <IconDiv>
              <SkillIcon src={Python} alt="Python Icone" />
              <DescriptionSkills>Python (Flask, Django)</DescriptionSkills>
            </IconDiv>
          </SwiperSlide>
          <SwiperSlide>
            <IconDiv>
              <SkillIcon src={Javascript} alt="Javascript Icone" />
              <DescriptionSkills>Javascript</DescriptionSkills>
            </IconDiv>
          </SwiperSlide>
          <SwiperSlide>
            <IconDiv>
              <SkillIcon src={CSS} alt="CSS Icone" />
              <DescriptionSkills>CSS</DescriptionSkills>
            </IconDiv>
          </SwiperSlide>
          <SwiperSlide>
            <IconDiv>
              <SkillIcon src={Typescript} alt="Typescript Icone" />
              <DescriptionSkills>Typescript</DescriptionSkills>
            </IconDiv>
          </SwiperSlide>
          <SwiperSlide>
            <IconDiv>
              <SkillIcon src={React} alt="React Icone" />
              <DescriptionSkills>React</DescriptionSkills>
            </IconDiv>
          </SwiperSlide>
          <SwiperSlide>
            <IconDiv>
              <SkillIcon src={Nodejs} alt="Node.js Icone" />
              <DescriptionSkills>Node.js (Express)</DescriptionSkills>
            </IconDiv>
          </SwiperSlide>
          <SwiperSlide>
            <IconDiv>
              <SkillIcon src={HTML} alt="HTML Icone" />
              <DescriptionSkills>HTML</DescriptionSkills>
            </IconDiv>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default About;
