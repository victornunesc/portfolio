import { Container, Title, Button, DivButton, ContainerStack } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, EffectCoverflow } from "swiper";

import oilCycle from "../../assets/portfolio/oil-cycle.png";
import beer from "../../assets/portfolio/beer.png";
import habits from "../../assets/portfolio/habits.png";

import { useState } from "react";
import PortfolioSlide from "../../components/PortfolioSlide";

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
        <ContainerStack>
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
              <PortfolioSlide
                imgPortfolio={oilCycle}
                title="Oil Cycle"
                techs="React, Chakra.ui, Typescript"
                services="Frontend - UI/UX, Integração com APIs"
                date="Fevereiro/2022"
                description="Projeto feito em equipe para o Capstone de React na Kenzie Academy.
                Dempenhei o papel de Tech Lead sendo algumas de minha
                atribuições manter a qualidade e padronização do código. O site tem o objetivo de servir como intermedio entre coletores e
                doares de óleo de cozinha de forma adiminuir a poluição causada pelo
                descarte irregular"
                github="https://github.com/victornunesc/Oil-Cycle"
                deploy="https://oil-cycle.vercel.app/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSlide
                imgPortfolio={beer}
                title="Administração de bebidas"
                techs="React, Chakra.ui, Typescript"
                services="Frontend - UI/UX, Integração com APIs"
                date="Fevereiro/2022"
                description="Projeto feito em equipe para o Capstone de React na Kenzie Academy.
                Fui escolhido como Tech Lead da equipe sendo algumas de minha
                atribuições manter a qualidade e padronização do código. \n O site tem o objetivo de servir como intermedio entre coletores e
                doares de óleo de cozinha de forma adiminuir a poluição causada pelo
                descarte irregular"
                github="https://github.com/victornunesc/Oil-Cycle"
                deploy={"https://oil-cycle.vercel.app/"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSlide
                imgPortfolio={habits}
                title="Gestão de hábitos"
                techs="React, Chakra.ui, Typescript"
                services="Frontend - UI/UX, Integração com APIs"
                date="Fevereiro/2022"
                description="Projeto feito em equipe para o Capstone de React na Kenzie Academy.
                Fui escolhido como Tech Lead da equipe sendo algumas de minha
                atribuições manter a qualidade e padronização do código. \n O site tem o objetivo de servir como intermedio entre coletores e
                doares de óleo de cozinha de forma adiminuir a poluição causada pelo
                descarte irregular"
                github="https://github.com/victornunesc/Oil-Cycle"
                deploy={"https://oil-cycle.vercel.app/"}
              />
            </SwiperSlide>
          </Swiper>
        </ContainerStack>
      ) : (
        <div></div>
      )}
    </Container>
  );
};

export default Portfolio;
