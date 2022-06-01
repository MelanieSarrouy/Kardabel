import mascMedCover from "./images/cover-Mascarades.png"
import mascMedMore1 from "./images/affiche-Mascarades2019.png"
import mascMedMore2 from "./images/affiche-Mascarades2018.png"
import mascMedMore3 from "./images/mockup_fly_mascarades2019.png"
import mascMedMore4 from "./images/mockup_fly_mascarades2018.png"
import follesBergCover from "./images/cover-FollesBergeres.png"
import follesBergMore1 from "./images/affiche-FollesBergeres2020.png"
import follesBergMore2 from "./images/affiche-FollesBergeres2019.png"
import follesBergMore3 from "./images/mockup_fly_follesBergeres2020.png"
import follesBergMore4 from "./images/mockup_fly_follesBergeres2019.png"
import AilesLarzCover from "./images/cover-LesAilesDuLarzac.png"
import BrelockStockCover from "./images/cover-BrelockEnStock.png"
import AffichesTournoisCover from "./images/cover-AffichesTournois.png"
import BrochuresCover from "./images/cover-Brochures.png"
import ProgrammeCover from "./images/cover-Programme.png"
import OfferusCover from "./images/cover-Livret.png"
import EpouvantailsCover from "./images/cover-FestivalEpouvantails.png"
import InsonnanceCover from "./images/cover-Insonnance01.png"
import FairePartCover from "./images/cover-FairePart.png"
import PierreSophieCover from "./images/cover-PierreSophie.png"
import CouvertoiradeCover from "./images/cover-Couvertoirade.png"
import AbatMobileCover from "./images/cover-AbatMobile.png"
import CartesCover from "./images/cover-Cartes.png"
import LogosCover from "./images/cover-Logos.png"
import CVCover from "./images/cover-CV.png"



export const data = [
  {
    id: '01',
    title: "Les Mascarades Médiévales",
    dates: [2017, 2018, 2019],
    description:
      "Organisation complète de l'évènement \n Conception et réalisation de tous les supports de communication",
    client: "Mairie de La Couvertoirade",
    images: {
      cover: mascMedCover,
      more: [mascMedMore1, mascMedMore2, mascMedMore3, mascMedMore4]
    },
    tags: ["#affiche", "#flyer", "#bannière", "#réseaux", "#web", "#évènement"]
  },
  {
    id: '02',
    title: "Les Folles Bergères",
    dates: [2019, 2020],
    description:
      "Organisation complète de l'évènement \n Conception et réalisation de tous les supports de communication",
    client: "Mairie de La Couvertoirade",
    images: {
      cover: follesBergCover,
      more: [follesBergMore1, follesBergMore2, follesBergMore3, follesBergMore4]
    },
    tags: ["#affiche", "#flyer", "#bannière", "#réseaux", "#web", "#évènement"]
  },
  {
    id: '03',
    title: "Insonnance 01",
    dates: [2019],
    description: "Conception et réalisation du macaron du 1er vinyle édité par Vinylbleu.fr",
    client: "Vinylbleu.fr",
    images: {
      cover: InsonnanceCover,
      more: ["", "", ""]
    },
    tags: ["#macaron", "vinyle", "#musique"]
  },
  {
    id: '04',
    title: "Brelock en Stock",
    dates: [2019, 2020],
    description: "Conception et réalisation d'une affiche",
    client: "APE",
    images: {
      cover: BrelockStockCover,
      more: ["", "", ""]
    },
    tags: ["#affiche", "#évènement"]
  },
  {
    id: '05',
    title: "Brochures Visites Guidées",
    dates: [2017, 2018, 2019, 2020, 2021, 2022],
    description:
      "Conception et réalisation des brochures de présentation des visites guidées pour les groupes adultes et scolaires à La Couvertoirade \n (format carré - 12 pages - broché)",
      client: "Service Tourisme de La Couvertoirade",
      images: {
        cover: BrochuresCover,
        more: ["", "", ""]
      },
      tags: ["#brochure", "#livret", "#tourisme"]
  },
  {
    id: '06',
    title: "Le Trésor d'Offerus",
    dates: [2020],
    description:
      "Conception et réalisation d'un livret pour un jeu de piste \n Co-création du contenu \n (format A5 - 36 pages - broché )",
      client: "Service Tourisme de La Couvertoirade",
      images: {
        cover: OfferusCover,
        more: ["", "", ""]
      },
      tags: ["#livret", "#brochure"]
  },
  {
    id: '07',
    title: "Programme",
    dates: [2018, 2019, 2020],
    description:
      "Conception et réalisation du programme de la saison touristique à La Couvertoirade \n Programmation et mise en place des animations en 2018 et 2019 \n (format A5 - 2 volets - 1 pli roulé)",
    client: "Mairie de La Couvertoirade",
    images: {
      cover: ProgrammeCover,
      more: ["", "", ""]
    },
    tags: ["#dépliant", "#tourisme"]
  },
  {
    id: '08',
    title: "Pierre & Sophie",
    dates: [2020, 2021],
    description:
      "Conception et réalisation de 4 déclinaisons d'étiquettes pour la vente de produits alimentaires de production artisanale \n (diamètre 6 cm) \n Conception et réalisation du 'logo' pour les signatures de mail et le papier d'emballage alimentaire",
    client: "GAEC des Infruts",
    images: {
      cover: PierreSophieCover,
      more: ["", "", ""]
    },
    tags: ["#étiquette", "#logo", "#produit", "#alimentaire"]
  },
  {
    id: '09',
    title: "Le Festival des Épouvantails",
    dates: [2020],
    description:
      "Conception et réalisation des supports de communication \n Co-organisation de l'évènement",
      client: "Association Larzac Repère",
      images: {
        cover: EpouvantailsCover,
        more: ["", "", ""]
      },
      tags: ["#affiche", "#flyer", "#bannière", "#réseaux", "#web", "#évènement"]
  },
  {
    id: '10',
    title: "Les Ailes du Larzac",
    dates: [2019, 2020, 2021],
    description: "Conception et réalisation des supports de communication",
    client: "Les Ailes du Larzac",
    images: {
      cover: AilesLarzCover,
      more: ["", "", ""]
    },
    tags: ["#affiche", "#flyer", "#signalétique", "#véhicule", "#banderole", "#autocollant"]
  },
  {
    id: '11',
    title: "Affiches Tournois",
    dates: [2022],
    description:
      "Exercices de conception et réalisation de templates pour des affiches de tournois",
    client: "-",
    images: {
      cover: AffichesTournoisCover,
      more: ["", "", ""]
    },
    tags: ["#affiche", "#évènement"]
  },
  {
    id: '12',
    title: "Faire-part",
    dates: [2019],
    description:
      "Conception et réalisation de faire-part de naissance, mariage, invitations, etc. \n (format carré - 2 volets - 1 pli roulé)",
    client: "Particuliers",
    images: {
      cover: FairePartCover,
      more: ["", "", ""]
    },
    tags: ["#carte", "#dépliant", "#faire-part", "#invitation"]
  },
  {
    id: '13',
    title: "La Couvertoirade",
    dates: [2016, 2017, 2018, 2019, 2020, 2021],
    description:
      "Conception et réalisation du dépliant de présentation de la Cité médiévale de La Couvertoirade \n (format DL - 3 volets - 2 plis roulés)",
      client: "Service Tourisme de La Couvertoirade",
      images: {
        cover: CouvertoiradeCover,
        more: ["", "", ""]
      },
      tags: ["#dépliant", "#roll-up", "#PLV", "#tourisme"]
  },
  {
    id: '14',
    title: "L'Abat'Mobile 34",
    dates: [2022],
    description:
      "Conception et réalisation du dépliant de présentation du projet d'abattage à la ferme \n (format DL - 3 volets - 2 plis roulés) \n Conception et réalisation du logo et de ses déclinaisons \n Conception et réalisation d'un site vitrine pour le projet : www.labatmobile34.fr ",
    client: "Association Abattage à la Ferme de l'Hérault",
    images: {
      cover: AbatMobileCover,
      more: ["", "", ""]
    },
    tags: ["#dépliant", "#logo", "#site", "#web"]
  },
  {
    id: '15',
    title: "Cartes",
    dates: [2020, 2021],
    description:
      "Conception et réalisation de cartes de visites, cartes d'adhésion, carte de fidélité, etc. \n (format 85 x 55 mm - coins arrondis - vernis sélectif)",
    client: "divers",
    images: {
      cover: CartesCover,
      more: ["", "", ""]
    },
    tags: ["#carte", "#carte-de-visite", "#carte d'adhésion"]
  },
  {
    id: '16',
    title: "Logos",
    dates: [2016, 2020, 2021, 2022],
    description:
      "Conception et réalisation de logos, avec ou sans déclinaisons",
    client: "divers",
    images: {
      cover: LogosCover,
      more: ["", "", ""]
    },
    tags: ["#logo", "#signature", "#identité"]
  },
  {
    id: '17',
    title: "CV",
    dates: [2022],
    description:
      "Conception et réalisation de CV, mise en page dossiers de presse, dossiers de présenation de projets...",
    client: "divers",
    images: {
      cover: CVCover,
      more: ["", "", ""]
    },
    tags: ["#CV", "#dossiers", "#mise-en-page"]
  }
]
