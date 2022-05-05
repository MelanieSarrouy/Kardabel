import colors from '../styles/bases/colors'
import titleCard from '../assets/illustrations/h3CardIdentity.svg'
import illustrationCard from '../assets/illustrations/Profile analysis _Flatline-2.svg'
import backgroundCard from '../assets/shapes/EllipseJaune.svg'
import logoIllustration from '../assets/illustrations/logo-illustration.png'
import charteIllustration from '../assets/illustrations/charte-illustration.png'
import moodBoardIllustration from '../assets/illustrations/mood-board-illustration.png'

export const datasIdentity = {
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
      intro: [
        'Le choix en matière de type de support, format et finition est quasi illimité.',
        'Nous sommes là pour vous conseiller et vous accompagner pour trouver la solution la plus adaptée à votre projet et à votre identité.',
      ],

      services: [
        {
          illustration: logoIllustration,
          circleSide: 'left',

          text: 'La création de votre logo, simple, puissant et efficace avec ou sans baseline (slogan)',
          lexicon: [
            {
              word: 'Logo (ou logotype) :',
              definition:
                'Représentation graphique d’une entité. C’est l’élément central de l’identité visuelle.',
            },
            {
              word: 'Baseline :',
              definition:
                'Phrase courte qui permet de préciser l’activité ou attirer la cible. Elle est souvent liée au logo mais peut aussi vivre seule comme phrase d’accroche.',
            },
          ],
        },
        {
          illustration: charteIllustration,
          circleSide: 'right',
          text: 'La création ou la refonte de votre Charte graphique (branding)',
          lexicon: [
            {
              word: 'Charte graphique :',
              definition:
                'Document de référence qui rassemble toutes les règles d’utilisation de tous éléments graphiques d’une marque, c’est-à-dire les détails de l’identité visuelle, ainsi que la manière de l’appliquer sur les supports de communication. C’est le mode d’emploi de l’identité visuelle',
            },
          ],
        },
        {
          illustration: moodBoardIllustration,
          circleSide: 'left',
          text: 'La création  de votre Brand Board (tableau de marque)',
          lexicon: [
            {
              word: 'Brand board :',
              definition:
                'Sorte de charte graphique condensée, sans les règles d’usage. Document qui regroupe sur une seule page tous les éléments graphiques de votre identité visuelle : Logo et ses déclinaisons / Typographies / Palette de couleurs / Icônes / Images d’inspiration.',
            },
          ],
        },
      ],
    },
  },
}
