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
  TitleSkills,
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
    <Container id="Home">
      <Title>Olá! Prazer em ver você por aqui!</Title>
      <Section>
        <figure>
          <ProfileImage src={Profile} alt="Foto de perfil" />
          <DescriptionProfile>
            "Truth can only be found in one place: the code.“
          </DescriptionProfile>
        </figure>
        <AboutMe>
          <AboutText>
            Me chamo Victor Nunes e minha trajetória profissional começou
            através da música onde me dediquei por mais de 10 anos tocando em
            diversos locais e conhecendo diversas pessoas! Em paralelo à
            carreira de musicista me formei em Administração, cheguei a ter
            vários tipos de trabalhos e hoje dedico 100% do meu tempo na arte da
            programação!
          </AboutText>
          <AboutText>
            Faz mais de um ano que venho me aprofundando em desenvolvimento de
            softwares tanto de tecnologias relacionadas ao Front-end quanto ao
            Back-end. Gosto de ler sobre Clean Code, Arquitetura de Softwares,
            Design Patterns, TDD e outros conceitos/técnicas que fazem de mim um
            programador melhor a cada dia!
          </AboutText>
        </AboutMe>
      </Section>

      <hr />
      <TitleSkills>&#1645;&#9733; Skills &#9733;&#1645;</TitleSkills>
      <div>
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
      <hr />
    </Container>
  );
};

export default About;
