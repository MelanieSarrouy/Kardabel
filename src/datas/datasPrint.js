import colors from '../styles/bases/colors'
import titleCard from '../assets/illustrations/h3CardPrint.svg'
import illustrationCard from '../assets/illustrations/Designer _Flatline-2.svg'
import backgroundCard from '../assets/shapes/EllipseRose.svg'
import servicesBackground from '../assets/illustrations/pink-background.jpg'
import circlePicturePink from '../assets/illustrations/print-masque-picturePink.png'

export const datasPrint = {
  id: 'print',
  title: 'Print',
  illustrations: {
    title: titleCard,
    illustration: illustrationCard,
  },
  colors: {
    normal: colors.color2,
    light: colors.tertiary,
  },
  subtitles: {
    why: {
      title: 'Pourquoi utiliser la communication print ?',
      background: backgroundCard,
      side: 'left',
      content: [
        'Le print en complément du digital est essentiel pour communiquer efficacement avec vos clients, prospects, adhérents ou bien d\'éventuels partenaires.',
        'Il véhicule votre identité, vos savoir-faire, votre professionnalisme et vous permet d\'être en contact physique direct avec le consommateur.',
        'Il marque l\'esprit du lecteur avec une image forte.',
      ],
    },
    benefits: {
      title: 'Les avantages du print',
      cards: [
        {
          title: 'Mémorisation',
          content:
            'La communication print offre des solutions innovantes, attractives et surprenantes. Avec le bon message et le bon design, elle favorise la mémorisation et la valorisation de votre marque.',
        },
        {
          title: 'Diffusion',
          content:
            'Les supports papiers permettent de multiplier les points de contacts et de diffusion. Avec le bon format, le bon design et une finition originale, l’impact de votre message augmente considérablement.',
        },
        {
          title: 'Pérennité',
          content:
            'Les supports de communication print peuvent être conservés, ils sont donc pérennes.',
        },
        {
          title: '',
          content: [
            'Vous voulez attirer l’attention ?',
            'Ne pas laisser indifférent ?',
            'Confiez-nous la conception de vos supports de communication !',
          ],
        },
      ],
      advice: [
        'Le choix en matière de type de support, format et finition est quasi illimité.',
        'Nous sommes là pour vous conseiller et vous accompagner pour trouver la solution la plus adaptée à votre projet et à votre identité.',
      ],
      adviceIllustration: circlePicturePink,

    },
    services: {
      title: 'Kardabel vous propose',
      background: servicesBackground,
      intro: [
        'Le choix en matière de type de support, format et finition est quasi illimité.',
        'Nous sommes là pour vous onseiller et vous accompagner pour trouver la solution la plus adaptée à votre projet et à votre identité.',
      ],
      services: [
        {
          name: 'Cartes',
          details:
            'Cartes de visite, cartes de fidélité, cartes cadeau, faires-parts,invitations...',
        },
        {
          name: 'Flyers',
          details: 'Flyers tous formats',
        },
        {
          name: 'Affiches',
          details: 'Affiches tous formats',
        },
        {
          name: 'Dépliants',
          details: 'Dépliants, plaquettes commerciales, plaquettes de présentation...',
        },
        {
          name: 'Brochures',
          details: 'Brochures, livrets, journaux, magazines, livres...',
        },
        {
          name: 'PLV',
          details: 'Banderoles, kakémonos, ou autres PLV',
        },
        {
          name: 'Packaging',
          details: 'Étiquettes et packaging',
        },
        {
          name: 'Stickers',
          details: 'Autocollants, marquage sur véhicule',
        },
        {
          name: 'Menus',
          details: 'Menus et cartes de vins',
        },
        {
          name: 'Macarons',
          details: 'Macarons pour CD ou vinyles',
        },
        {
          name: 'Dossiers',
          details: 'CV, dossiers de presse...',
        },
        {
          name: 'Goodies',
          details: 'Textiles, papeterie, etc.',
        },
      ],
    },
  },
}
