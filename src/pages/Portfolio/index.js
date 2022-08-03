import { Container, Title, Button, DivButton, ContainerStack } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, EffectCoverflow } from "swiper";

import { frontEnd, backEnd } from "../../utils/projects";

import { useState } from "react";
import PortfolioSlide from "../../components/PortfolioSlide";

const Portfolio = () => {
  const [isFront, setIsFront] = useState(true);

  return (
    <Container id="Portfolio">
      <Title>Portfólio!</Title>
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
            {frontEnd.map((project) => (
              <SwiperSlide key={project.key}>
                <PortfolioSlide
                  imgPortfolio={project.image}
                  title={project.title}
                  techs={project.techs}
                  services={project.services}
                  date={project.date}
                  description={project.description}
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
            {backEnd.map((project) => (
              <SwiperSlide key={project.key}>
                <PortfolioSlide
                  imgPortfolio={project.image}
                  title={project.title}
                  techs={project.techs}
                  services={project.services}
                  date={project.date}
                  description={project.description}
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
