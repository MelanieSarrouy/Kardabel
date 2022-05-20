import imgReservia from '../assets/illustrations/reservia.jpg'
import imgOhmyfood from '../assets/illustrations/ohmyfood.jpg'
import imgGameOn from '../assets/illustrations/gameon.jpg'
import imgFishEye from '../assets/illustrations/fisheye.jpg'
import imgPetitsPlats from '../assets/illustrations/lesPetitsPlats.jpg'
import imgLearnAtHome from '../assets/illustrations/learnAtHome.jpg'
import imgKasa from '../assets/illustrations/kasa.jpg'
import imgSportSee from '../assets/illustrations/sportsee.jpg'
import imgArgentBank from '../assets/illustrations/argentBank.jpeg'
import imgHRNet from '../assets/illustrations/hrnet.jpg'
import imgKardabel from '../assets/illustrations/kardabel.jpg'
import imgLabatMobile from '../assets/illustrations/labatmobile.jpg'
import html from '../assets/icons/html.svg'
import css from '../assets/icons/css.svg'
import js from '../assets/icons/js.svg'
import react from '../assets/icons/react.svg'
import redux from '../assets/icons/redux.svg'
import sass from '../assets/icons/sass.svg'
import styledComponents from '../assets/icons/styled-components.svg'
import swagger from '../assets/icons/swagger.svg'
import figma from '../assets/icons/figma.svg'
import animCSS from '../assets/icons/animCSS.svg'
import wp from '../assets/icons/wp.svg'
import oceanWP from '../assets/icons/oceanWP.svg'
import elementor from '../assets/icons/elementor.svg'
import firestore from '../assets/icons/firestore.svg'
import recharts from '../assets/icons/recharts.svg'
import trello from '../assets/icons/trello.svg'

export const datasPortfolioWeb = [
  {
    title: 'Reservia',
    image: imgReservia,
    description: 'Site de planification de vacances (logement et activités)',
    work: "Integration d'une maquette responsive en HTML et CSS",
    technos: [
      { logo: html, legende: 'html' },
      { logo: css, legende: 'css' },
    ],
    links: {
      site: '//melaniesarrouy.github.io/Reservia_12-2020/',
      code: '//github.com/MelanieSarrouy/Reservia_12-2020',
      other: '',
    },
  },
  {
    title: 'Ohmyfood',
    image: imgOhmyfood,
    description: 'Site de reservation de restaurants avec composition du menu en ligne',
    work: "Integration d'une maquette responsive en HTML et SCSS + animations CSS",
    technos: [
      { logo: html, legende: 'html' },
      { logo: sass, legende: 'scss' },
      { logo: animCSS, legende: 'animations CSS' },
    ],
    links: {
      site: '//melaniesarrouy.github.io/Ohmyfood_01-2021/',
      code: '//github.com/MelanieSarrouy/Ohmyfood_01-2021',
      other: '',
    },
  },
  {
    title: 'GameOn',
    image: imgGameOn,
    description: "Landing page avec formulaire d'inscription",
    work: 'Amélioration du HTML et CSS + JavaScript pour le formulaire',
    technos: [
      { logo: html, legende: 'html' },
      { logo: sass, legende: 'scss' },
      { logo: js, legende: 'JavaScript' },
    ],
    links: {
      site: '//melaniesarrouy.github.io/GameOn_02-2021/',
      code: '//github.com/MelanieSarrouy/GameOn_02-2021/tree/dev',
      other: '',
    },
  },
  {
    title: 'FishEye',
    image: imgFishEye,
    description: 'Site pour une plateforme de photographes freelances ',
    work: 'Accessibilité, lightbox gallery, formulaire de validation, data-json, factory method pattern',
    technos: [
      { logo: html, legende: 'html' },
      { logo: sass, legende: 'scss' },
      { logo: js, legende: 'JavaScript' },
    ],
    links: {
      site: '//melaniesarrouy.github.io/FishEye_03-2021/',
      code: '//github.com/MelanieSarrouy/FishEye_03-2021',
      other: '',
    },
  },
  {
    title: 'Les Petits Plats',
    image: imgPetitsPlats,
    description: 'Site de recettes de cuisine',
    work: 'Développement de deux algorithmes de recherche en JavaScript',
    technos: [
      { logo: html, legende: 'html' },
      { logo: sass, legende: 'scss' },
      { logo: js, legende: 'JavaScript' },
    ],
    links: {
      site: '//melaniesarrouy.github.io/PetitsPlats_05-2021/',
      code: '//github.com/MelanieSarrouy/PetitsPlats_05-2021/tree/option1',
      other: '',
    },
  },
  {
    title: 'Learn@Home',
    image: imgLearnAtHome,
    description: 'Maquette Figma pour une application de soutien scolaire',
    work: "Travail en méthode AGILE avec réalisation de diagrammes de cas d'usage, personas, user stories, maquette Figma et tableau Kanban",
    technos: [
      { logo: figma, legende: 'Figma' },
      { logo: trello, legende: 'Trello' },
    ],
    links: {
      site: '//www.figma.com/file/I5CJA4jvKeavEec4XoaMIo/P10_Learn%40Home_MelanieSarrouy(Demo-Mobile)?node-id=0%3A1',
      code: '',
      other: '//trello.com/b/dc1SG8RH/learnhome',
    },
  },
  {
    title: 'Kasa',
    image: imgKasa,
    description: "Application Web pour la location d'appartements entre particuliers",
    work: 'Utilisation de React et React Router, déploiement sur Netlify',
    technos: [
      { logo: sass, legende: 'scss' },
      { logo: react, legende: 'React' },
    ],
    links: {
      site: '//ms-kasa.netlify.app',
      code: '//github.com/MelanieSarrouy/Kasa_09-2021',
      other: '',
    },
  },
  {
    title: 'SportSee',
    image: imgSportSee,
    description:
      "Tableau de bord d'analytics pour la page utilisateur d'une application de coaching sportif",
    work: 'Création et affichage de graphiques avec Recharts. Récupération des données utilisateurs grâce à une API',
    technos: [
      { logo: react, legende: 'React' },
      { logo: recharts, legende: 'Recharts' },
      { logo: styledComponents, legende: 'Styled-Components' },
    ],
    links: {
      site: '//sportseep12.netlify.app',
      code: '//github.com/MelanieSarrouy/SportSee_09-2021',
      other: '',
    },
  },
  {
    title: 'Argent Bank',
    image: imgArgentBank,
    description: 'Gestionnaire de compte bancaire',
    work: "Création d'une application bancaire responsive avec React et Redux. Récupération des données utilisateurs grâce à une API",
    technos: [
      { logo: react, legende: 'React' },
      { logo: redux, legende: 'Redux' },
      { logo: styledComponents, legende: 'Styled-Components' },
      { logo: swagger, legende: 'Swagger' },
    ],
    links: {
      site: '',
      code: '//github.com/MelanieSarrouy/ArgentBank_10-2021',
      other: '//app.swaggerhub.com/apis/MelanieSarrouy13/Argent_Bank/1.0.0#/tags',
    },
  },
  {
    title: 'HRNet',
    image: imgHRNet,
    description: 'Application de RH pour la gestion des dossiers des employés',
    work: "Mutation d'un projet jQuery en React, création et publication d'un composant React en package npm, utilisation de firestore pour la vase de données.",
    technos: [
      { logo: react, legende: 'React' },
      { logo: redux, legende: 'Redux' },
      { logo: styledComponents, legende: 'Styled-Components' },
      { logo: firestore, legende: 'Firestore' },
    ],
    links: {
      site: '//oc-hrnet.netlify.app',
      code: '//github.com/MelanieSarrouy/HRNet_11-2021',
      other: '//www.npmjs.com/package/simple-react-modal-ui',
    },
  },
  {
    title: 'Kardabel',
    image: imgKardabel,
    description:
      "Site vitrine : services print et web, identité visuelle, design graphique, développement d'applications et de sites internets",
    work: "Refonte de la charte graphique et du logo, conception maquette et intégration",
    technos: [
      { logo: react, legende: 'React' },
      { logo: styledComponents, legende: 'Styled-Components' },
      { logo: animCSS, legende: 'Animations CSS' },
    ],
    links: {
      site: '//www.kardabel.com',
      code: '//github.com/MelanieSarrouy/Kardabel',
      other: '',
    },
  },
  {
    title: "L'Abat'Mobile 34",
    image: imgLabatMobile,
    description:
      "Site vitrine pour une association d'éleveuses et d'éleveurs proposant l'abattage à la ferme",
    work: "Création d'un site WordPress, adaptation de la charte graphique au site",
    technos: [
      { logo: wp, legende: 'WordPress' },
      { logo: oceanWP, legende: 'OceanWP' },
      { logo: elementor, legende: 'Elementor' },
    ],
    links: {
      site: '//www.labatmobile34.fr',
      code: '',
      other: '',
    },
  },
]
