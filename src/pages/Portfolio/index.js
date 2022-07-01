import {
  Container,
  IconDiv,
  PortfolioImage,
  DescriptionImage,
  Title,
  Description,
  Section,
  Button,
  DivButton,
} from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, EffectCoverflow } from "swiper";

import oilCycle from "../../assets/portfolio/oil-cycle.png";
import beer from "../../assets/portfolio/beer.png";
import habits from "../../assets/portfolio/habits.png";

import { useState } from "react";

const Portfolio = () => {
  const [isFront, setIsFront] = useState(true);

  return (
    <Container>
      <Title>Portfólio!</Title>
      <DivButton>
        <Button onClick={() => setIsFront(true)} blue>
          Front-end
        </Button>
        <Button onClick={() => setIsFront(false)}>Back-end</Button>
      </DivButton>
      {isFront ? (
        <div>
          <Swiper
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
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
            <SwiperSlide>
              <IconDiv>
                <PortfolioImage src={oilCycle} alt="Oil Cycle" />
                <DescriptionImage>Oil Cycle</DescriptionImage>
                <Section>
                  <div>
                    <h4>Técnologias utilizadas</h4>
                    <p>React, Chakra.ui, Typescript</p>
                  </div>
                  <div>
                    <h4>Serviços</h4>
                    <p>Frontend - UI/UX, Integração com APIs</p>
                  </div>
                  <div>
                    <h4>Data</h4>
                    <p>Fevereiro/2022</p>
                  </div>
                </Section>
                <hr />
                <Description>
                  Projeto feito em equipe para o Capstone de React na Kenzie
                  Academy. Fui escolhido como Tech Lead da equipe sendo algumas
                  de minha atribuições manter a qualidade e padronização do
                  código.
                </Description>
                <Description>
                  O site tem o objetivo de servir como intermedio entre
                  coletores e doares de óleo de cozinha de forma adiminuir a
                  poluição causada pelo descarte irregular
                </Description>
                <Description>
                  Deploy:{" "}
                  <a
                    href="https://oil-cycle.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Clique aqui
                  </a>
                </Description>
                <Description>
                  Github:{" "}
                  <a
                    href="https://github.com/victornunesc/Oil-Cycle"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Clique aqui
                  </a>
                </Description>
              </IconDiv>
            </SwiperSlide>
            <SwiperSlide>
              <IconDiv>
                <PortfolioImage src={beer} alt="Administração de bebidas" />
                <DescriptionImage>Administração de bebidas</DescriptionImage>
                <Section>
                  <div>
                    <h4>Técnologias utilizadas</h4>
                    <p>React, Chakra.ui, Typescript</p>
                  </div>
                  <div>
                    <h4>Serviços</h4>
                    <p>Frontend - UI/UX, Integração com APIs</p>
                  </div>
                  <div>
                    <h4>Data</h4>
                    <p>Fevereiro/2022</p>
                  </div>
                </Section>
                <hr />
                <Description>
                  Projeto feito em equipe para o Capstone de React na Kenzie
                  Academy. Fui escolhido como Tech Lead da equipe sendo algumas
                  de minha atribuições manter a qualidade e padronização do
                  código.
                </Description>
                <Description>
                  O site tem o objetivo de servir como intermedio entre
                  coletores e doares de óleo de cozinha de forma adiminuir a
                  poluição causada pelo descarte irregular
                </Description>
              </IconDiv>
            </SwiperSlide>
            <SwiperSlide>
              <IconDiv>
                <PortfolioImage src={habits} alt="Gestão de hábitos" />
                <DescriptionImage>Gestão de hábitos</DescriptionImage>
                <Section>
                  <div>
                    <h4>Técnologias utilizadas</h4>
                    <p>React, Chakra.ui, Typescript</p>
                  </div>
                  <div>
                    <h4>Serviços</h4>
                    <p>Frontend - UI/UX, Integração com APIs</p>
                  </div>
                  <div>
                    <h4>Data</h4>
                    <p>Fevereiro/2022</p>
                  </div>
                </Section>
                <hr />
                <Description>
                  Projeto feito em equipe para o Capstone de React na Kenzie
                  Academy. Fui escolhido como Tech Lead da equipe sendo algumas
                  de minha atribuições manter a qualidade e padronização do
                  código.
                </Description>
                <Description>
                  O site tem o objetivo de servir como intermedio entre
                  coletores e doares de óleo de cozinha de forma adiminuir a
                  poluição causada pelo descarte irregular
                </Description>
              </IconDiv>
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
        <div></div>
      )}
    </Container>
  );
};

export default Portfolio;
