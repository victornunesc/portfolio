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
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <Container id="Home">
      <Title>{t("home.title")}</Title>
      <Section>
        <figure>
          <ProfileImage src={Profile} alt="Foto de perfil" />
          <DescriptionProfile>
            {t("home.descriptionProfile")}
          </DescriptionProfile>
        </figure>
        <AboutMe>
          <AboutText>{t("home.aboutMe")}</AboutText>
          <AboutText>{t("home.aboutMe2")}</AboutText>
          <AboutText>{t("home.aboutMe3")}</AboutText>
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
