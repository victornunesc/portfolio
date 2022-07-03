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

const Contact = () => {
  return (
    <Container id="Contact">
      <Title>Contato</Title>
      <Section>
        <AboutMe>
          <AboutText>
            Me chamo Victor Nunes, trabalho com desenvolvimento de software,
            entusiasta em UX. Especialista em Aplicativos e Games com mais de 12
            anos de experiência em mídias interativas. Possuo experiência com
            equipes multinacionais, além de certificação compatível e 4 prêmios
            de reconhecimento nacional junto à Funbites Games Studio.
          </AboutText>
          <AboutText>
            Trabalho com desenvolvimento iOS há 8 anos e tenho mais de 20
            aplicativos publicados na App Store. Atualmente atuo na X-team e
            compartilho conteúdo no canal Attekita Dev.
          </AboutText>
        </AboutMe>
      </Section>
    </Container>
  );
};

export default Contact;
