import {
  IconDiv,
  PortfolioImage,
  DescriptionImage,
  Description,
  Section,
  SectionDescription,
  Button,
  ContainerStack,
  ContainerDescription,
} from "./styles";

import { useState } from "react";

import Modal from "react-modal";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useTranslation } from "react-i18next";

const PortfolioSlide = ({
  imgPortfolio,
  title,
  techs,
  services,
  date,
  description,
  github,
  deploy,
  carousel,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { t } = useTranslation();

  function openModal() {
    setIsOpenModal(true);
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  const customStyles = {
    overlay: {
      zIndex: "999",
      height: "100vh",
      overflow: "hidden",
    },
  };

  return (
    <IconDiv>
      <PortfolioImage src={imgPortfolio} alt={title} />
      <DescriptionImage>{title}</DescriptionImage>
      <Section>
        <ul>
          <li>
            <h4>{t("portfolio.slide.techs")}</h4>
            <p>{techs}</p>
          </li>
          <li>
            <h4>{t("portfolio.slide.services")}</h4>
            <p>{services}</p>
          </li>
          <li>
            <h4>{t("portfolio.slide.date")}</h4>
            <p>{date}</p>
          </li>
          <li>
            <h4>{t("portfolio.slide.info")}</h4>
            <Button onClick={openModal}>Click</Button>
          </li>
        </ul>
      </Section>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        bodyOpenClassName={"ReactModal__Body--open"}
        className={"ReactModal__Content"}
        appElement={document.getElementById('root') || undefined}
      >
        <SectionDescription>
          <ContainerStack>
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              {carousel?.map((image, key) => (
                <SwiperSlide key={key}>
                  <img src={image} alt={title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </ContainerStack>
          <ContainerDescription>
            <h3>{title}</h3>
            <Description>{description}</Description>
            {deploy && <Description>
              Deploy:{" "}
              <a href={deploy} target="_blank" rel="noreferrer">
                Clique aqui
              </a>
            </Description>}
            <Description>
              Github:{" "}
              <a href={github} target="_blank" rel="noreferrer">
                Clique aqui
              </a>
            </Description>
          </ContainerDescription>
        </SectionDescription>
      </Modal>
    </IconDiv>
  );
};

export default PortfolioSlide;
