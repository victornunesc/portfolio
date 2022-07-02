import {
  IconDiv,
  PortfolioImage,
  DescriptionImage,
  Description,
  Section,
  SectionDescription,
} from "./styles";

import { useState } from "react";

import Modal from "react-modal";

const PortfolioSlide = ({
  imgPortfolio,
  title,
  techs,
  services,
  date,
  description,
  github,
  deploy,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function openModal() {
    setIsOpenModal(true);
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },

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
            <h4>Técnologias utilizadas</h4>
            <p>{techs}</p>
          </li>
          <li>
            <h4>Serviços</h4>
            <p>{services}</p>
          </li>
          <li>
            <h4>Data</h4>
            <p>{date}</p>
          </li>
          <li>
            <h4>+</h4>
            <button onClick={openModal}>Mais inf.</button>
          </li>
        </ul>
      </Section>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        bodyOpenClassName={"ReactModal__Body--open"}
      >
        <SectionDescription>
          <Description>{description}</Description>
          <Description>
            Deploy:{" "}
            <a href={deploy} target="_blank" rel="noreferrer">
              Clique aqui
            </a>
          </Description>
          <Description>
            Github:{" "}
            <a href={github} target="_blank" rel="noreferrer">
              Clique aqui
            </a>
          </Description>
        </SectionDescription>
      </Modal>
    </IconDiv>
  );
};

export default PortfolioSlide;
