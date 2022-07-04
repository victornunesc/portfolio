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
} from "./styles";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactSocialMedia from "../../components/ContactSocialMedia";

const Contact = () => {
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
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container id="Contact">
      <hr />
      <h1>Contato</h1>
      <p>
        Ficou interessado em meu trabalho? Sinta-se a vontade para entrar em
        contato! Adoraria poder conversar melhor com você.
      </p>
      <ContactSocialMedia />
      <form ref={form} onSubmit={sendEmail} id="contact_form">
        <div className="name">
          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder="Meu nome"
            name="user_name"
            id="name_input"
            required
          />
        </div>
        <div className="email">
          <label htmlFor="email"></label>
          <input
            type="email"
            placeholder="Meu e-mail"
            name="user_email"
            id="email_input"
            required
          />
        </div>
        <div className="telephone">
          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder="Meu número"
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
              Gostaria de...
            </option>
            <option value="Gostaria de fazer uma pergunta">
              Gostaria de fazer uma pergunta
            </option>
            <option value="Gostaria de fazer uma proposta">
              Gostaria de fazer uma proposta
            </option>
            <option value="Gostaria de iniciar um projeto">
              Gostaria de iniciar um projeto
            </option>
          </select>
        </div>
        <div className="message">
          <label htmlFor="message"></label>
          <textarea
            name="message"
            placeholder="Escreva aqui"
            id="message_input"
            cols="30"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="submit">
          <input type="submit" value="Enviar" id="form_button" />
        </div>
      </form>
    </Container>
  );
};

export default Contact;
