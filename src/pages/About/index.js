import { Container, Section, ProfileImage, AboutMe } from "./styles";
import Perfil from "../../assets/example-perfil.png";

const About = () => {
  return (
    <Container>
      <div>
        <h2>Olá! Prazer em ver voĉe por aqui!</h2>
        <Section>
          <figure>
            <ProfileImage src={Perfil} alt="Foto de perfil" />
            <figcaption>
              "Combata funcionalidades… a única forma de fazer software seguro,
              confiável e rápido é faze-lo pequeno.“
            </figcaption>
          </figure>
          <AboutMe>
            <text>
              sou Karol Attekita, engenheira de software senior entusiasta em
              UX. Especialista em Aplicativos e Games com mais de 12 anos de
              experiência em mídias interativas. Possuo experiência com equipes
              multinacionais, além de certificação compatível e 4 prêmios de
              reconhecimento nacional junto à Funbites Games Studio.
            </text>
            <text>
              Trabalho com desenvolvimento iOS há 8 anos e tenho mais de 20
              aplicativos publicados na App Store. Atualmente atuo na X-team e
              compartilho conteúdo no canal Attekita Dev.
            </text>
          </AboutMe>
        </Section>
      </div>
      <div>
        <h2>Skills</h2>
      </div>
    </Container>
  );
};

export default About;
