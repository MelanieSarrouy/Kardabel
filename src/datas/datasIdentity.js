import colors from '../styles/bases/colors'
import titleCard from '../assets/illustrations/h3CardIdentity.svg'
import illustrationCard from '../assets/illustrations/Profile analysis _Flatline-2.svg'
import backgroundCard from '../assets/shapes/EllipseJaune.svg'
import servicesBackground from '../assets/illustrations/the-great-wave-off-kanagawa.png'


export const datasIdentity = {
  id: 'identite',
  title: 'Identité',
  illustrations: {
    title: titleCard,
    illustration: illustrationCard,
  },
  colors: {
    normal: colors.color1,
    light: colors.tertiary,
    dark: colors.color1Dark

  },
  subtitles: {
    why: {
      title: 'Kesako ?',
      background: backgroundCard,
      side: 'left',
      content: 'L\'identité visuelle ou identité graphique est un ensemble d\'éléments visuels cohérents qui permettent de reconnaître une marque ou une structure au premier coup d\'œil. \n Ces différents éléments sont le logo, la typographie, les couleurs, les icônes, les pictogrammes, etc. \n Au travers de la création d’une image de marque forte, efficace et positive,nous développons votre visibilité et valorisons vos produits et services.',
    },
    benefits: {
      title: 'Avantages',
      cards: [
        {
          title: 'Se démarquer',
          content: 'Être reconnaissable et identifiable facilement et rapidement.',
        },
        {
          title: 'Rassurer',
          content:
            'Une identité visuelle claire et cohérente est une preuve de professionnalisme, de rigueur et de fiabilité.',
        },
        {
          title: 'Attirer',
          content:
            'Un identité graphique permet de gagner en visibilité, en crédibilité, en notoriété et donc de gagner de nouveaux clients, prospects, adhérents, etc.',
        },
        {
          title: 'Économiser',
          content:
            "Une charte graphique représente un gain de temps (et donc d'argent) non négligeable pour la création de vos futurs supports de communication.",
        },
      ],
    },
    services: {
      title: 'Prestations',
      intro: 'Puisqu\'une image vaut mille mots, trouvons ensemble la bonne image, la vôtre... \n Votre identité visuelle vous représente, elle doit être simple, puissante et efficace. \n Kardabel est là pour vous guider et vous conseiller au mieux en fonction de vos besoins.',
      background: servicesBackground,
      circleService : backgroundCard,
      services: [
        {
          name: 'Logo',
          details: 'Création de votre logo avec ou sans baseline \n Logo : élément graphique central de l’identité visuelle. \n Baseline : phrase courte ou slogan, souvent liée au logo.'
        },
        {
          name: 'Charte graphique',
          details: 'Création ou refonte de votre charte graphique \n Document de référence qui rassemble toutes les règles d’utilisation des éléments graphiques d’une marque'
        },
        {
          name: 'Brand Board',
          details: 'Création de votre Brand Board (ou planche de style) \n Document qui regroupe sur une seule page tous les éléments graphiques de votre identité visuelle'
        },
      ],
    },
  },
}
