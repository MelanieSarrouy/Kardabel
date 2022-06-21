/* IMPORTS */

import colors from '../../../styles/bases/colors'
import titleCard from './images/h3CardPrint.svg'
import illustrationCard from './images/Designer _Flatline-2.svg'
import servicesBackground from './images/pink-background.jpg'
import whyBackground from './images/why-background-pink.svg'

// EXPORT // ______________________________________________________________

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
    dark: colors.color2Dark,
  },
  subtitles: {
    why: {
      title: 'Le Print, kesako ?',
      background: whyBackground,
      side: 'left',
      content:
        "Le Print désigne l'ensemble des supports de communication imprimés tels que flyers, affiches, brochures ou cartes de visites, utilisés pour promouvoir une marque ou diffuser un message.\n En complément du digital, il est essentiel pour communiquer efficacement avec vos clients, prospects, adhérents ou bien d'éventuels partenaires.\n Il marque l'esprit du lecteur avec une image forte et véhicule votre identité, vos savoir-faire et votre professionnalisme.",
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
      intro:
        'Le choix en matière de type de support, format et finition est quasi illimité.\n Nous sommes là pour vous conseiller et vous accompagner pour trouver la solution la plus adaptée à votre projet et à votre identité.',
      background: servicesBackground,
      services: [
        {
          name: 'Cartes',
          details:
            "Cartes de visite, \n cartes d'adhésion, \n cartes de fidélité, \n cartes cadeau, \n cartes produit...",
        },
        {
          name: 'Flyers \n Dépliants',
          details:
            'Flyers et tracts tous formats \n Dépliants (2plis, 3 plis, etc) \n plaquettes commerciales, \n plaquettes de présentation., \n programme..',
        },
        {
          name: 'Invitations \n Faire-Part',
          details: "Tous formats, \n cartons d'invitation, \n cartes de voeux, \n faire-part...",
        },
        {
          name: 'Affiches',
          details: 'Affiches tous formats \n sur-mesure, \n poster...',
        },
        {
          name: 'Brochures \n & livrets',
          details:
            'Tous formats, \n brochures, livrets, revues, \n catalogues, journaux, \n livres, magazines...',
        },
        {
          name: 'PLV \n Signalétique',
          details:
            "Roll'up, kakemonos, \n totems, présentoirs,\n drapeaux, oriflammes... \n Bâches, panneaux, \n banderoles, plaques...",
        },
        {
          name: 'Packaging',
          details:
            "Flexible ou solide, \n sachets, sacs, boites, cartons d'emballage, bouteilles...",
        },
        {
          name: 'Étiquettes \n Stickers',
          details:
            'Autocollants, \n étiquettes alimentaires, \n étiquettes produit, \n autocollants pour véhicule, \n stickers personnalisés...',
        },
        {
          name: 'Hôtellerie \n Restauration',
          details:
            'Menus, cartes de vins \n sets de table, sous-verres, \n ecocups (gobelets réutilisables), chevalets de rue...',
        },
        {
          name: 'CD / DVD \n vinyles',
          details: 'Macarons, \n pochettes carton, \n jaquettes, livrets...',
        },
        {
          name: 'Dossiers',
          details: 'CV, \n books, portfolios \n dossiers de presse, \n etc.',
        },
        {
          name: 'Papeterie \n Goodies',
          details:
            'Tampons, calendriers, \n vêtements, sacs, \n clés USB, stylos, \n mugs, portes-clés...',
        },
      ],
    },
  },
}
