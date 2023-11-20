//space-callix
import spaceCallix from "../assets/portfolio/spaceCallix/space-callix.png";
import spaceCallixMobile from "../assets/portfolio/spaceCallix/space-callix-mobile.png"
import spaceCallixSearch from "../assets/portfolio/spaceCallix/space-callix-search.png"

//oilCycle-front
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

//space-callix-back
import spaceCallixDiagram from "../assets/portfolio/spaceCallix/space-callix-diagram.png";


export const frontEnd = [
  {
    key: 3,
    image: spaceCallix,
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
    git: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-administracao-de-eventos-victornunesc",
    deploy:
      "https://react-entrega-s3-administracao-de-eventos-victornunesc.vercel.app/",
    carousel: [beerHome, beerList, beerToast],
  },
];

export const backEnd = [
  {
    key: 3,
    image: spaceCallixDiagram,
    git: "https://github.com/victornunesc/backend-callix",
    deploy: "https://space-callix.vercel.app/",
    carousel: [
      spaceCallixDiagram
    ],
  },
  {
    key: 2,
    image: petDiagram,
    git: "https://github.com/YasminMartinsDeBrito/clinic_pet",
    carousel: [petDiagram],
  },
  {
    key: 1,
    image: riskDiagram,
    git: "https://github.com/rafaelocdev/classificacao-risco-saude-mental",
    carousel: [riskDiagram],
  },
  {
    key: 0,
    image: reOffDiagram,
    git: "https://github.com/ainemota/capstone",
    carousel: [reOffDiagram],
  },
];
