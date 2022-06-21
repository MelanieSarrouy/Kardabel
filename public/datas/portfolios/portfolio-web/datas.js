/* IMPORTS */

import imgReserviajpg from './images/reservia.jpg'
import imgOhmyfoodjpg from './images/ohmyfood.jpg'
import imgGameOnjpg from './images/gameon.jpg'
import imgFishEyejpg from './images/fisheye.jpg'
import imgPetitsPlatsjpg from './images/lesPetitsPlats.jpg'
import imgLearnAtHomejpg from './images/learnAtHome.jpg'
import imgKasajpg from './images/kasa.jpg'
import imgSportSeejpg from './images/sportsee.jpg'
import imgArgentBankjpg from './images/argentBank.jpeg'
import imgHRNetjpg from './images/hrnet.jpg'
import imgKardabeljpg from './images/kardabel.jpg'
import imgLabatMobilejpg from './images/labatmobile.jpg'
import imgReserviawebp from './images/reservia.webp'
import imgOhmyfoodwebp from './images/ohmyfood.webp'
import imgGameOnwebp from './images/gameon.webp'
import imgFishEyewebp from './images/fisheye.webp'
import imgPetitsPlatswebp from './images/lesPetitsPlats.webp'
import imgLearnAtHomewebp from './images/learnAtHome.webp'
import imgKasawebp from './images/kasa.webp'
import imgSportSeewebp from './images/sportsee.webp'
import imgArgentBankwebp from './images/argentBank.webp'
import imgHRNetwebp from './images/hrnet.webp'
import imgKardabelwebp from './images/kardabel.webp'
import imgLabatMobilewebp from './images/labatmobile.webp'

import html from './images/html.svg'
import css from './images/css.svg'
import js from './images/js.svg'
import react from './images/react.svg'
import redux from './images/redux.svg'
import sass from './images/sass.svg'
import styledComponents from './images/styled-components.svg'
import swagger from './images/swagger.svg'
import figma from './images/figma.svg'
import animCSS from './images/animCSS.svg'
import wp from './images/wp.svg'
import oceanWP from './images/oceanWP.svg'
import elementor from './images/elementor.svg'
import firestore from './images/firestore.svg'
import recharts from './images/recharts.svg'
import trello from './images/trello.svg'

// EXPORT // ______________________________________________________________

export const datasPortfolioWeb = [
  {
    title: 'Reservia',
    image: {
      jpg: imgReserviajpg,
      webp: imgReserviawebp,
    },
    description: 'Site de planification de vacances (logement et activités)',
    work: "Integration d'une maquette responsive en HTML et CSS",
    technos: [
      { logo: html, legende: 'html' },
      { logo: css, legende: 'css' },
    ],
    date: '12-2020',
    links: [
      { name: 'site', url: '//melaniesarrouy.github.io/Reservia_12-2020/' },
      { name: 'code', url: '//github.com/MelanieSarrouy/Reservia_12-2020' },
    ],
  },
  {
    title: 'Ohmyfood',
    image: {
      jpg: imgOhmyfoodjpg,
      webp: imgOhmyfoodwebp,
    },

    description: 'Site de reservation de restaurants avec composition du menu en ligne',
    work: "Integration d'une maquette responsive en HTML et SCSS + animations CSS",
    technos: [
      { logo: html, legende: 'html' },
      { logo: sass, legende: 'scss' },
      { logo: animCSS, legende: 'animations CSS' },
    ],
    date: '01-2021',
    links: [
      { name: 'site', url: '//melaniesarrouy.github.io/Ohmyfood_01-2021/' },
      { name: 'code', url: '//github.com/MelanieSarrouy/Ohmyfood_01-2021' },
    ],
  },
  {
    title: 'GameOn',
    image: {
      jpg: imgGameOnjpg,
      webp: imgGameOnwebp,
    },
    description: "Landing page avec formulaire d'inscription",
    work: 'Amélioration du HTML et CSS + JavaScript pour le formulaire',
    technos: [
      { logo: html, legende: 'html' },
      { logo: sass, legende: 'scss' },
      { logo: js, legende: 'JavaScript' },
    ],
    date: '02-2021',
    links: [
      { name: 'site', url: '//melaniesarrouy.github.io/GameOn_02-2021/' },
      { name: 'code', url: '//github.com/MelanieSarrouy/GameOn_02-2021/tree/dev' },
    ],
  },
  {
    title: 'FishEye',
    image: {
      jpg: imgFishEyejpg,
      webp: imgFishEyewebp,
    },
    description: 'Site pour une plateforme de photographes freelances ',
    work: 'Accessibilité, lightbox gallery, formulaire de validation, data-json, factory method pattern',
    technos: [
      { logo: html, legende: 'html' },
      { logo: sass, legende: 'scss' },
      { logo: js, legende: 'JavaScript' },
    ],
    date: '04-2021',
    links: [
      { name: 'site', url: '//melaniesarrouy.github.io/FishEye_03-2021/' },
      { name: 'code', url: '//github.com/MelanieSarrouy/FishEye_03-2021' },
    ],
  },
  {
    title: 'Les Petits Plats',
    image: {
      jpg: imgPetitsPlatsjpg,
      webp: imgPetitsPlatswebp,
    },
    description: 'Site de recettes de cuisine',
    work: 'Développement de deux algorithmes de recherche en JavaScript',
    technos: [
      { logo: html, legende: 'html' },
      { logo: sass, legende: 'scss' },
      { logo: js, legende: 'JavaScript' },
    ],
    date: '05-2021',
    links: [
      { name: 'site', url: '//melaniesarrouy.github.io/PetitsPlats_05-2021/' },
      { name: 'code', url: '//github.com/MelanieSarrouy/PetitsPlats_05-2021/tree/option1' },
    ],
  },
  {
    title: 'Learn@Home',
    image: {
      jpg: imgLearnAtHomejpg,
      webp: imgLearnAtHomewebp,
    },
    description: 'Maquette Figma pour une application de soutien scolaire',
    work: "Travail en méthode AGILE avec réalisation de diagrammes de cas d'usage, personas, user stories, maquette Figma et tableau Kanban",
    technos: [
      { logo: figma, legende: 'Figma' },
      { logo: trello, legende: 'Trello' },
    ],
    date: '07-2021',
    links: [
      { name: 'figma', url: '//www.figma.com/file/I5CJA4jvKeavEec4XoaMIo/P10_Learn%40Home_MelanieSarrouy(Demo-Mobile)?node-id=0%3A1' },
      { name: 'trello', url: '//trello.com/b/dc1SG8RH/learnhome' },
    ],
  },
  {
    title: 'Kasa',
    image: {
      jpg: imgKasajpg,
      webp: imgKasawebp,
    },
    description: "Application Web pour la location d'appartements entre particuliers",
    work: 'Utilisation de React et React Router, déploiement sur Netlify',
    technos: [
      { logo: sass, legende: 'scss' },
      { logo: react, legende: 'React' },
    ],
    date: '09-2021',
    links: [
      { name: 'site', url: '//ms-kasa.netlify.app' },
      { name: 'code', url: '//github.com/MelanieSarrouy/Kasa_09-2021' },
    ],
  },
  {
    title: 'SportSee',
    image: {
      jpg: imgSportSeejpg,
      webp: imgSportSeewebp,
    },
    description:
      "Tableau de bord d'analytics pour la page utilisateur d'une application de coaching sportif",
    work: 'Création et affichage de graphiques avec Recharts. Récupération des données utilisateurs grâce à une API',
    technos: [
      { logo: react, legende: 'React' },
      { logo: recharts, legende: 'Recharts' },
      { logo: styledComponents, legende: 'Styled-Components' },
    ],
    date: '10-2021',
    links: [
      { name: 'site', url: '//sportseep12.netlify.app' },
      { name: 'code', url: '//github.com/MelanieSarrouy/SportSee_09-2021' },
    ],
  },
  {
    title: 'Argent Bank',
    image: {
      jpg: imgArgentBankjpg,
      webp: imgArgentBankwebp,
    },
    description: 'Gestionnaire de compte bancaire',
    work: "Création d'une application bancaire responsive avec React et Redux. Récupération des données utilisateurs grâce à une API",
    technos: [
      { logo: react, legende: 'React' },
      { logo: redux, legende: 'Redux' },
      { logo: styledComponents, legende: 'Styled-Components' },
      { logo: swagger, legende: 'Swagger' },
    ],
    date: '11-2021',
    links: [
      { name: 'code', url: '//github.com/MelanieSarrouy/ArgentBank_10-2021' },
      { name: 'swagger', url: '//app.swaggerhub.com/apis/MelanieSarrouy13/Argent_Bank/1.0.0#/tags' },
    ],
  },
  {
    title: 'HRNet',
    image: {
      jpg: imgHRNetjpg,
      webp: imgHRNetwebp,
    },
    description: 'Application de RH pour la gestion des dossiers des employés',
    work: "Mutation d'un projet jQuery en React, création et publication d'un composant React en package npm, utilisation de firestore pour la vase de données.",
    technos: [
      { logo: react, legende: 'React' },
      { logo: redux, legende: 'Redux' },
      { logo: styledComponents, legende: 'Styled-Components' },
      { logo: firestore, legende: 'Firestore' },
    ],
    date: '01-2022',
    links: [
      { name: 'site', url: '//oc-hrnet.netlify.app' },
      { name: 'code', url: '//github.com/MelanieSarrouy/HRNet_11-2021' },
      { name: 'npm', url: '//www.npmjs.com/package/simple-react-modal-ui' },
    ],
  },
  {
    title: "L'Abat'Mobile 34",
    image: {
      jpg: imgLabatMobilejpg,
      webp: imgLabatMobilewebp,
    },
    description:
      "Site vitrine pour une association d'éleveuses et d'éleveurs proposant l'abattage à la ferme",
    work: "Création d'un site WordPress, adaptation de la charte graphique au site",
    technos: [
      { logo: wp, legende: 'WordPress' },
      { logo: oceanWP, legende: 'OceanWP' },
      { logo: elementor, legende: 'Elementor' },
    ],
    date: '03-2022',
    links: [
      { name: 'en cours', url: '' },
    ],
  },
  {
    title: 'Kardabel',
    image: {
      jpg: imgKardabeljpg,
      webp: imgKardabelwebp,
    },
    description:
      "Site vitrine : services print et web, identité visuelle, design graphique, développement d'applications et de sites internets",
    work: 'Refonte de la charte graphique et du logo, conception maquette et intégration',
    technos: [
      { logo: react, legende: 'React' },
      { logo: styledComponents, legende: 'Styled-Components' },
      { logo: animCSS, legende: 'Animations CSS' },
    ],
    date: '05-2022',
    links: [
      { name: 'site', url: '//www.kardabel.com' },
      { name: 'code', url: '//github.com/MelanieSarrouy/Kardabel' },
    ],
  },
]
