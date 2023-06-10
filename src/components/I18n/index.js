import React from "react";
import { useTranslation } from "react-i18next";
import pt from "../../assets/i18n/pt.png";
import en from "../../assets/i18n/en.png";
import { NavBtnI18n, Flag } from "./style";

const I18n = () => {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  function handleChangeLanguage() {
    if (selectedLanguage === "pt-BR") {
      i18n.changeLanguage("en-US");
      return;
    }
    i18n.changeLanguage("pt-BR");
  }

  return (
    <NavBtnI18n onClick={() => handleChangeLanguage()}>
      {selectedLanguage === "pt-BR" ? <Flag image={pt} /> : <Flag image={en} />}
    </NavBtnI18n>
  );
};

export default I18n;
