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
  },
  subtitles: {
    why: {
      title: 'Pourquoi créer et utiliser une identité visuelle ?',
      background: backgroundCard,
      side: 'left',
      content: 'Au travers de la création d’une image de marque forte, efficace et positive,nous développons votre visibilité et valorisons vos produits et services.',
    },
    benefits: {
      title: 'Les avantages d’une identité visuelle',
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
            'Un identité graphique permet de gagner en visibilité, en crédibilité, en notoriété et donc de gagner de nouveaux clients, prospects, adhérents ou autres.',
        },
        {
          title: 'Économiser',
          content:
            "Une charte graphique représente un gain de temps (et donc d'argent) non négligeable pour la création de vos futurs supports de communication print et web.",
        },
      ],
    },
    services: {
      title: 'Kardabel vous propose',
      intro: 'Une image vaut mille mots... \n Votre identité visuelle vous représente, elle doit être simple, puissante et efficace. \n Kardabel est là pour vous guider et vous conseiller au mieux en fonction de vos besoins.',
      background: servicesBackground,
      services: [
        {
          name: 'La création de votre logo avec ou sans baseline',
          details: 'Logo : élément graphique central de l’identité visuelle. \n Baseline : phrase courte ou slogan, elle est souvent liée au logo.'
        },
        {
          name: 'La création ou la refonte de votre Charte graphique',
          details: 'Charte graphique : document de référence qui rassemble toutes les règles d’utilisation des éléments graphiques d’une marque. C’est le mode d’emploi de l’identité visuelle'
        },
        {
          name: 'La création de votre Brand Board ou planche de style',
          details: 'Brand board : document qui regroupe sur une seule page tous les éléments graphiques de votre identité visuelle (Logos / Typos / Couleurs / Icônes / Images).'
        },
      ],
    },
  },
}
