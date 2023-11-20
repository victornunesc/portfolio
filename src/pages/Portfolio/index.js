import { Container, Title, Button, DivButton, ContainerStack } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, EffectCoverflow } from "swiper";

import { frontEnd, backEnd } from "../../utils/projects";

import { useState } from "react";
import PortfolioSlide from "../../components/PortfolioSlide";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const [isFront, setIsFront] = useState(true);
  const { t } = useTranslation();

  return (
    <Container id="Portfolio">
      <Title>{t("portfolio.title")}</Title>
      <DivButton>
        <Button onClick={() => setIsFront(true)} blue>
          Front-end
        </Button>
        <Button onClick={() => setIsFront(false)}>Back-end</Button>
      </DivButton>
      {isFront ? (
        <ContainerStack>
          <Swiper
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            slidesPerView={1}
            centeredSlides={true}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
          >
            {frontEnd.map((project, index) => (
              <SwiperSlide key={project.key}>
                <PortfolioSlide
                  imgPortfolio={project.image}
                  title={t(`portfolio.projects.frontend.${index}.title`)}
                  techs={t(`portfolio.projects.frontend.${index}.techs`)}
                  services={t(`portfolio.projects.frontend.${index}.services`)}
                  date={t(`portfolio.projects.frontend.${index}.date`)}
                  description={t(`portfolio.projects.frontend.${index}.description`)}
                  github={project.git}
                  deploy={project.deploy}
                  carousel={project.carousel}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </ContainerStack>
      ) : (
        <ContainerStack>
          <Swiper
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            slidesPerView={1}
            centeredSlides={true}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
          >
            {backEnd.map((project, index) => (
              <SwiperSlide key={project.key}>
                <PortfolioSlide
                  imgPortfolio={project.image}
                  title={t(`portfolio.projects.backend.${index}.title`)}
                  techs={t(`portfolio.projects.backend.${index}.techs`)}
                  services={t(`portfolio.projects.backend.${index}.services`)}
                  date={t(`portfolio.projects.backend.${index}.date`)}
                  description={t(`portfolio.projects.backend.${index}.description`)}
                  github={project.git}
                  deploy={project.deploy}
                  carousel={project.carousel}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </ContainerStack>
      )}
    </Container>
  );
};

export default Portfolio;
