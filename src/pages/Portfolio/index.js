import { Container, Title, Button, DivButton, ContainerStack } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, EffectCoverflow } from "swiper";

//OilCycle
import oilCycleHome from "../../assets/portfolio/oilCycle/oil-cycle-home.png";
import oilCycleDashboard from "../../assets/portfolio/oilCycle/oil-cycle-dashboard.png";
import oilCycleMarket from "../../assets/portfolio/oilCycle/oil-cycle-market.png";
import oilCycleMobile from "../../assets/portfolio/oilCycle/oil-cycle-mobile.png";
import oilCycleRegister from "../../assets/portfolio/oilCycle/oil-cycle-register.png";

//habits
import habitsLogin from "../../assets/portfolio/habits/habit-login.png";
import habitsRegister from "../../assets/portfolio/habits/habit-register.png";
import habitsHome from "../../assets/portfolio/habits/habit-home.png";
import habitsPerfil from "../../assets/portfolio/habits/habit-perfil.png";
import habitsGroup from "../../assets/portfolio/habits/habit-group.png";

//beer
import beerHome from "../../assets/portfolio/beer/beer-home.png";
import beerList from "../../assets/portfolio/beer/beer-list.png";
import beerToast from "../../assets/portfolio/beer/beer-toast.png";

//risk
import riskDiagram from "../../assets/portfolio/risk/risk-diagram.png";
//reOff
import reOffDiagram from "../../assets/portfolio/reOff/reOff-diagram.png";

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
                imgPortfolio={oilCycleHome}
                title="Oil Cycle"
                techs="React, Chakra.ui, Typescript, JSON Server"
                services="Code, UI/UX, Fake REST API"
                date="Fevereiro/2022"
                description="Projeto feito em equipe para o Capstone de React na Kenzie Academy.
                Desempenhei o papel de Tech Lead sendo algumas de minhas
                atribuições manter a qualidade e padronização do código. O site tem o objetivo de servir como intermediário entre coletores e
                doadores de óleo de cozinha de forma adiminuir a poluição causada pelo
                descarte irregular"
                github="https://github.com/victornunesc/Oil-Cycle"
                deploy="https://oil-cycle.vercel.app/"
                carousel={[
                  oilCycleHome,
                  oilCycleRegister,
                  oilCycleMobile,
                  oilCycleDashboard,
                  oilCycleMarket,
                ]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSlide
                imgPortfolio={habitsRegister}
                title="Gestão de hábitos"
                techs="React, Styled-components, Javascript"
                services="Code, UI/UX, Integração com APIs externa"
                date="Dezembro/2021"
                description="Projeto feito em equipe na Kenzie Academy.
                O objetivo da plataforma é que o usuário faça cadastro e consiga gerir seus hábitos, 
                e participar de grupos com outras pessoas com a mesma categoria de hábitos e metas. 
                Fui escolhido como Tech Lead do projeto"
                github="https://github.com/victornunesc/WeDo"
                deploy={"https://we-do.vercel.app/"}
                carousel={[
                  habitsLogin,
                  habitsRegister,
                  habitsHome,
                  habitsPerfil,
                  habitsGroup,
                ]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSlide
                imgPortfolio={beerHome}
                title="Administração de bebidas"
                techs="React, Styled-components, Javascript"
                services="Code, UI/UX, Integração com APIs externa"
                date="Novembro/2021"
                description="Projeto feito para fins didáticos. O objetivo era utilizar Context API para criar 3 eventos distintos onde pudesse 
                escolher de forma independente a lista de bebidas para cada evento através da API - PUNK API"
                github="
                https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-administracao-de-eventos-victornunesc"
                deploy={
                  "https://react-entrega-s3-administracao-de-eventos-victornunesc.vercel.app/"
                }
                carousel={[beerHome, beerList, beerToast]}
              />
            </SwiperSlide>
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
                imgPortfolio={riskDiagram}
                title="Classificação de Risco e Saúde Mental API"
                techs="Typescript, Node.js, Express, PostgreSQL, Jest"
                services="Code, API REST"
                date="Junho/2022"
                description="API criada para suprir as necessidades de um sistema para teleatendimento 
                de gestão de risco clínico, tendo por objetivo estabelecer prioridades para o atendimento 
                dos pacientes de saúde mental que acessam o sistema de saúde e também definir o recurso 
                assistencial mais adequado a cada caso. Tem como principal objetivo a identificação dos 
                casos mais graves, permitindo um atendimento mais rápido e seguro de acordo com o 
                potencial de risco, agravos à saúde ou grau de sofrimento."
                github="https://github.com/rafaelocdev/classificacao-risco-saude-mental"
                deploy="https://api-risco-saude-mental.herokuapp.com"
                carousel={[riskDiagram]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSlide
                imgPortfolio={reOffDiagram}
                title="ReOff API"
                techs="Python, Flask, PostgreSQL"
                services="Code, API REST"
                date="Maio/2022"
                description="O objetivo da aplicacao é de facilitar e auxiliar no aluguel
                 de insumos e salas. Utilizando a metodologia de troca, 
                 a aplicacao é capaz de conectar pessoas que possuem produtos ou salas disponiveis 
                 para aluguel aquelas que estao a procura."
                github="https://github.com/ainemota/capstone"
                deploy="https://reoff.herokuapp.com/"
                carousel={[reOffDiagram]}
              />
            </SwiperSlide>
          </Swiper>
        </ContainerStack>
      )}
    </Container>
  );
};

export default Portfolio;
