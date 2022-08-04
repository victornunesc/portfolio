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

import { skills } from "../../utils/skills";

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
          {skills.map((skill) => (
            <SwiperSlide key={skill.key}>
              <IconDiv>
                <SkillIcon src={skill.icon} alt={skill.alt} />
                <DescriptionSkills>{skill.description}</DescriptionSkills>
              </IconDiv>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <hr />
    </Container>
  );
};

export default About;
