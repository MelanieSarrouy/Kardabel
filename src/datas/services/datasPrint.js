import colors from '../../styles/bases/colors'
import titleCard from '../../assets/illustrations/h3CardPrint.svg'
import illustrationCard from '../../assets/illustrations/Designer _Flatline-2.svg'
import backgroundCard from '../../assets/shapes/EllipseRose-light.svg'
import servicesBackground from '../../assets/illustrations/pink-background.jpg'
import whyBackground from '../../assets/shapes/why-background-pink.svg'

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
    dark: colors.color2Dark
  },
  subtitles: {
    why: {
      title: 'Le Print, kesako',
      background: whyBackground,
      side: 'left',
      content: 'Le Print désigne l\'ensemble des supports de communication imprimés tels que flyers, affiches, brochures ou cartes de visites, utilisés pour promouvoir une marque ou diffuser un message.\n En complément du digital, il est essentiel pour communiquer efficacement avec vos clients, prospects, adhérents ou bien d\'éventuels partenaires.\n Il marque l\'esprit du lecteur avec une image forte et véhicule votre identité, vos savoir-faire et votre professionnalisme.',
    },
    benefits: {
      title: 'Les avantages du print',
      cards: [
        {
          title: 'Mémorisation',
          content:
            'La communication print offre des solutions innovantes, attractives et surprenantes. \n Avec le bon message et le bon design, elle favorise la mémorisation et la valorisation de votre marque.',
        },
        {
          title: 'Diffusion',
          content:
            'Les supports papiers permettent de multiplier les points de contacts et de diffusion. \n Avec le bon format, le bon design et une finition originale, l’impact de votre message augmente considérablement.',
        },
        {
          title: 'Pérennité',
          content:
            'Les supports de communication print peuvent être conservés, ils sont donc pérennes.',
        },
        {
          title: '',
          content:
            'Vous voulez attirer l’attention ? \n Ne pas laisser indifférent ? \n Confiez-nous la conception de vos supports de communication !',
        },
      ],
    },
    services: {
      title: 'Kardabel vous propose',
      intro: 'Le choix en matière de type de support, format et finition est quasi illimité.\n Nous sommes là pour vous conseiller et vous accompagner pour trouver la solution la plus adaptée à votre projet et à votre identité.',
      background: servicesBackground,
      ellipse: backgroundCard,
      services: [
        {
          name: 'Cartes',
          details:
            'Cartes de visite, \n cartes de fidélité, \n cartes cadeau, \n faires-parts, \n invitations...',
        },
        {
          name: 'Flyers',
          details: 'Flyers \ntous formats',
        },
        {
          name: 'Affiches',
          details: 'Affiches \n tous formats',
        },
        {
          name: 'Dépliants',
          details: 'Dépliants, \n plaquettes commerciales, \n plaquettes de présentation...',
        },
        {
          name: 'Brochures',
          details: 'Brochures, \n livrets, \n journaux, \n magazines, \n livres...',
        },
        {
          name: 'PLV',
          details: 'Panneaux, \n Banderoles, \n kakémonos, \n ou autres PLV',
        },
        {
          name: 'Packaging',
          details: 'Étiquettes \n et packaging',
        },
        {
          name: 'Stickers',
          details: 'Autocollants, \n marquage sur véhicule',
        },
        {
          name: 'Menus',
          details: 'Menus \n et cartes de vins',
        },
        {
          name: 'Macarons',
          details: 'Macarons \n pour CD ou vinyles',
        },
        {
          name: 'Dossiers',
          details: 'CV, \n dossiers de presse, \n etc.',
        },
        {
          name: 'Goodies',
          details: 'Textiles, \n papeterie, \n etc.',
        },
      ],
    },
  },
}
