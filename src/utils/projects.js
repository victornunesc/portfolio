//Space Callix
import spaceCallix from "../assets/portfolio/spaceCallix/space-callix.png";
import spaceCallixMobile from "../assets/portfolio/spaceCallix/space-callix-mobile.png"
import spaceCallixSearch from "../assets/portfolio/spaceCallix/space-callix-search.png"

//OilCycle-front
import oilCycleHome from "../assets/portfolio/oilCycle/oil-cycle-home.png";
import oilCycleDashboard from "../assets/portfolio/oilCycle/oil-cycle-dashboard.png";
import oilCycleMarket from "../assets/portfolio/oilCycle/oil-cycle-market.png";
import oilCycleMobile from "../assets/portfolio/oilCycle/oil-cycle-mobile.png";
import oilCycleRegister from "../assets/portfolio/oilCycle/oil-cycle-register.png";

//habits-front
import habitsLogin from "../assets/portfolio/habits/habit-login.png";
import habitsRegister from "../assets/portfolio/habits/habit-register.png";
import habitsHome from "../assets/portfolio/habits/habit-home.png";
import habitsPerfil from "../assets/portfolio/habits/habit-perfil.png";
import habitsGroup from "../assets/portfolio/habits/habit-group.png";

//beer-front
import beerHome from "../assets/portfolio/beer/beer-home.png";
import beerList from "../assets/portfolio/beer/beer-list.png";
import beerToast from "../assets/portfolio/beer/beer-toast.png";

//risk-back
import riskDiagram from "../assets/portfolio/risk/risk-diagram.png";

//reOff-back
import reOffDiagram from "../assets/portfolio/reOff/reOff-diagram.png";

//pet-back
import petDiagram from "../assets/portfolio/petcheck/pet-diagram.png";


export const frontEnd = [
  {
    key: 3,
    image: spaceCallix,
    title: "Space CalliX",
    techs: "React, Styled-components, Typescript",
    services: "Code, UI/UX, Consumo de API externa/interna",
    date: "Outubro/2022",
    description:
      "Projeto desenvolvido como parte do processo seletivo para a posição de Engenheiro de Software na empresa Callix. A tarefa consistiu em utilizar a SpaceX-API para efetuar consultas a quatro endpoints específicos, com o propósito de obter dados relevantes. O projeto foi concebido e implementado ao longo de uma semana, destacando habilidades técnicas e a capacidade de cumprir prazos estipulados. Além de abordar todos os pontos essenciais solicitados, foram realizadas todas as tarefas extras, incluindo a implementação do Google Optimize e Hotjar.",
    git: "https://github.com/victornunesc/frontend-callix",
    deploy: "https://space-callix.vercel.app/",
    carousel: [
      spaceCallix,
      spaceCallixMobile,
      spaceCallixSearch,
    ],
  },
  {
    key: 2,
    image: oilCycleHome,
    title: "Oil Cycle",
    techs: "React, Chakra.ui, Typescript, JSON Server",
    services: "Code, UI/UX, Fake REST API",
    date: "Fevereiro/2022",
    description:
      "O site tem o objetivo de servir como intermediário entre coletores e doadores de óleo de cozinha de forma adiminuir a poluição causada pelo descarte irregular com incentivos a doações através de um modelo ganha-ganha onde o usuário pode trocar seu óleo reciclado por produtos parceiros dentro da plataforma",
    git: "https://github.com/victornunesc/Oil-Cycle",
    deploy: "https://oil-cycle.vercel.app/",
    carousel: [
      oilCycleHome,
      oilCycleRegister,
      oilCycleMobile,
      oilCycleDashboard,
      oilCycleMarket,
    ],
  },
  {
    key: 1,
    image: habitsRegister,
    title: "Gestão de hábitos",
    techs: "React, Styled-components, Javascript",
    services: "Code, UI/UX, Integração com APIs externa",
    date: "Dezembro/2021",
    description:
      "O objetivo da plataforma é que o usuário faça cadastro e consiga gerir seus hábitos, e participar de grupos com outras pessoas com a mesma categoria de hábitos e metas.",
    git: "https://github.com/victornunesc/WeDo",
    deploy: "https://we-do.vercel.app/",
    carousel: [
      habitsLogin,
      habitsRegister,
      habitsHome,
      habitsPerfil,
      habitsGroup,
    ],
  },
  {
    key: 0,
    image: beerHome,
    title: "Administração de bebidas",
    techs: "React, Styled-components, Javascript",
    services: "Code, UI/UX, Integração com APIs externa",
    date: "Novembro/2021",
    description:
      "Projeto feito para fins didáticos. O objetivo era utilizar Context API para criar 3 eventos distintos onde pudesse escolher de forma independente a lista de bebidas para cada evento através da API - PUNK API",
    git: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-administracao-de-eventos-victornunesc",
    deploy:
      "https://react-entrega-s3-administracao-de-eventos-victornunesc.vercel.app/",
    carousel: [beerHome, beerList, beerToast],
  },
];

export const backEnd = [
  {
    key: 2,
    image: petDiagram,
    title: "Clínica Veterinária API",
    techs: "Python, Django, PostgreSQL",
    services: "Code, API REST",
    date: "Julho/2022",
    description:
      "Criada com o intuito de servir clinicas veterinarias sendo possivel cadastrar empregados, clientes, pets, consultas, anamnese, diagnósticos, histórico, controle de vacinas etc.",
    git: "https://github.com/YasminMartinsDeBrito/clinic_pet",
    carousel: [petDiagram],
  },
  {
    key: 1,
    image: riskDiagram,
    title: "Classificação de Risco e Saúde Mental API",
    techs: "Typescript, Node.js, Express, PostgreSQL, Jest",
    services: "Code, API REST",
    date: "Junho/2022",
    description:
      "API criada para suprir as necessidades de um sistema para teleatendimento de gestão de risco clínico, tendo por objetivo estabelecer prioridades para o atendimento dos pacientes de saúde mental que acessam o sistema de saúde e também definir o recurso assistencial mais adequado a cada caso. Tem como principal objetivo a identificação dos casos mais graves, permitindo um atendimento mais rápido e seguro de acordo com o potencial de risco, agravos à saúde ou grau de sofrimento.",
    git: "https://github.com/rafaelocdev/classificacao-risco-saude-mental",
    carousel: [riskDiagram],
  },
  {
    key: 0,
    image: reOffDiagram,
    title: "ReOff API",
    techs: "Python, Flask, PostgreSQL",
    services: "Code, API REST",
    date: "Maio/2022",
    description:
      "O objetivo da aplicacao é de facilitar e auxiliar no aluguel de insumos e salas. Utilizando a metodologia de troca, a aplicacao é capaz de conectar pessoas que possuem produtos ou salas disponiveis para aluguel aquelas que estao a procura.",
    git: "https://github.com/ainemota/capstone",
    carousel: [reOffDiagram],
  },
];
