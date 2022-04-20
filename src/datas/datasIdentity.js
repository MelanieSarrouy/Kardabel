import colors from '../styles/bases/colors'
import titleCard from '../assets/illustrations/h3CardIdentity.svg'
import illustrationCard from '../assets/illustrations/Profile analysis _Flatline-2.svg'
import backgroundCard from '../assets/shapes/EllipseJaune.svg'
import logoIllustration from '../assets/illustrations/logo-illustration.svg'
import charteIllustration from '../assets/illustrations/charte-illustration.svg'
import moodBoardIllustration from '../assets/illustrations/mood-board-illustration.svg'

export const datasIdentity = {
  title: 'Identité',
  illustrations: {
    title: titleCard,
    illustration: illustrationCard,
  },
  colors: {
    normal: colors.color1,
    light: colors.color1clair,
  },
  subtitles: {
    why: {
      title: 'Pourquoi créer et utiliser une identité visuelle ?',
      background: backgroundCard,
      content: [
        'Au travers de la création d’une image de marque forte, efficace et positive,nous développons votre visibilité et valorisons vos produits et services.',
      ],
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
            'Avoir des supports de communication avec une charte graphique et donc une cohérence visuelle permet de gagner en visibilité, en crédibilité, en notoriété et donc de gagner de nouveaux clients, prospects, adhérents ou autres.',
        },
        {
          title: 'Économiser',
          content:
            "Posséder une charte graphique représente un gain de temps (et donc d'argent) non négligeable pour la création de vos futurs supports de communication print et web.",
        },
      ],
    },
    services: {
      title: 'Kardabel vous propose',
      background: '',
      services: [
        {
          illustration: logoIllustration,
          text: 'La création de votre logo, simple, puissant et efficace avec ou sans baseline (slogan)',
          lexicon: [
            {
              word: 'Logo (ou logotype)',
              definition:
                'Représentation graphique d’une entité (marque, entreprise, événement...), elle qui est utilisé pour communiquer en son nom, via tous les supports de communication. C’est l’élément central de l’identité visuelle. À ne pas confondre avec un pictogramme ou une icône.',
            },
            {
              word: 'Baseline',
              definition:
                'Phrase courte qui permet de préciser l’activité ou attirer la cible. Elle est souvent liée au logo (on parle alors de bloc marque) mais peut aussi vivre seule sur un support de communication, comme une phrase d’accroche.',
            },
          ],
        },
        {
          illustration: charteIllustration,
          text: 'La création ou la refonte de votre Charte graphique (branding)',
          lexicon: [
            {
              word: 'Charte graphique',
              definition:
                'Document de référence qui rassemble toutes les règles d’utilisation de tous éléments graphiques d’une marque, c’est-à-dire les détails de l’identité visuelle, ainsi que la manière de l’appliquer sur les supports de communication. C’est le mode d’emploi de l’identité visuelle',
            },
          ],
        },
        {
          illustration: moodBoardIllustration,
          text: 'La création  de votre Brand Board (tableau de marque)',
          lexicon: [
            {
              word: 'Brand board',
              definition:
                'Sorte de charte graphique condensée, sans les règles d’usage, un document qui regroupe sur une seule page tous les éléments graphiques de votre identité visuelle : Le logo et ses déclinaisons / Les typographies / La palette de couleurs / Les icônes / Des images d’inspiration.',
            },
          ],
        },
      ],
    },
  },
}
