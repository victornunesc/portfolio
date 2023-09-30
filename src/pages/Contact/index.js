import { Container } from "./styles";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactSocialMedia from "../../components/ContactSocialMedia";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [subject, setSubject] = useState("DEFAULT");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i2fitm5",
        "template_yzw4cb9",
        form.current,
        "Rz80JxZ6bnVmWFYCg"
      )
      .then(
        (result) => {
          toast.success("Mensagem enviada!", { position: "top-center" });
        },
        (error) => {
          toast.error("Algo deu errado!", { position: "top-center" });
        }
      );
  };

  return (
    <Container id="Contact">
      <hr />
      <h1>{t("contact.title")}</h1>
      <p>{t("contact.description")}</p>
      <ContactSocialMedia />
      <form ref={form} onSubmit={sendEmail} id="contact_form">
        <div className="name">
          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder={t("contact.form.placeholders.myName")}
            name="user_name"
            id="name_input"
            required
          />
        </div>
        <div className="email">
          <label htmlFor="email"></label>
          <input
            type="email"
            placeholder={t("contact.form.placeholders.myEmail")}
            name="user_email"
            id="email_input"
            required
          />
        </div>
        <div className="telephone">
          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder={t("contact.form.placeholders.myNumber")}
            name="user_number"
            id="telephone_input"
            required
          />
        </div>
        <div className="subject">
          <label htmlFor="subject"></label>
          <select
            placeholder="Objetivo"
            name="subject"
            id="subject_input"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            required
          >
            <option hidden value="Gostaria de...">
              {t("contact.form.placeholders.select.default")}
            </option>
            <option value="Gostaria de fazer uma pergunta">
             {t("contact.form.placeholders.select.firstOption")}
            </option>
            <option value="Gostaria de fazer uma proposta">
              {t("contact.form.placeholders.select.secondOption")}
            </option>
            <option value="Gostaria de iniciar um projeto">
              {t("contact.form.placeholders.select.thirdOption")}
            </option>
          </select>
        </div>
        <div className="message">
          <label htmlFor="message"></label>
          <textarea
            name="message"
            placeholder={t("contact.form.placeholders.description")}
            id="message_input"
            cols="30"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="submit">
          <input type="submit" value={t("contact.form.submit")} id="form_button" />
        </div>
      </form>
    </Container>
  );
};

export default Contact;
