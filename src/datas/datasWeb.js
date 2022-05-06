import colors from '../styles/bases/colors'
import titleCard from '../assets/illustrations/h3CardWeb.svg'
import illustrationCard from '../assets/illustrations/Web development _Flatline-2.svg'
import backgroundCard from '../assets/shapes/EllipseBleue.svg'
import servicesBackground from '../assets/illustrations/blue-sky.png'

export const datasWeb = {
  id: 'web',
  title: 'Web',
  illustrations: {
    title: titleCard,
    illustration: illustrationCard,
  },
  colors: {
    normal: colors.color3,
    light: colors.tertiary,
  },
  subtitles: {
    why:
    {
      title: 'Pourquoi adopter la communication web ?',
      background: backgroundCard,
      side: 'left',
      content: 'Aujourd’hui une stratégie de communication efficace ne se conçoit pas sans un volet digital. \n Entre smartphones, tablettes, ordinateurs portables, de bureau, ou autres, les nouvelles technologies nous accompagnent partout. \n c’est un univers en perpétuelle évolution, incontournable pour votre visibilité, votre notoriété et votre image professionnelle.'
    },
    benefits: {
      title: 'Les avantages du web',
      cards: [
        {
          title: 'Visibilité',
          content:
            'Le web permet une diffusion massive, facile, immédiate et exponentielle. \n Il est le moyen le plus puissant pour atteindre un maximum de personnes en un minimum de temps sans avoir à se déplacer, la notion de distance n’existe plus.',
        },
        {
          title: 'Valorisation',
          content:
            'Adopter la communication digitale, c’est s’inscrire dans son temps, témoigner de sa modernité, faire preuve de dynamisme, de capacité d’innovation et d’adaptation, donc valoriser son image.',
        },
        {
          title: 'Différenciation',
          content:
            'Des contenus, un style et un ton différents pour se démarquer de la concurrence. \n L’accessibilité, la simplicité, la réactivité et la personnalisation des interfaces et interactions sont des atouts incontournables du web sur lesquels il faut s’appuyer pour faire la différence.',
        },
        {
          title: 'Développement',
          content:
            'Une présence forte et assumée sur le web permet aux entreprises de gagner en notoriété, et par conséquent de se développer. \n Une structure qui dispose d’un support numérique facilite l’accès à ses produits et services.',
        },
      ],
    },
    services: {
      title: 'Kardabel vous propose',
      background: servicesBackground,
      intro: 'Création ou refonte de votre site internet ou landing page. \n Kardabel développe les sites avec le CMS WordPress ou bien des sites sur-mesure (from scratch).',
      services: [
        {
          name: 'Webdesign \n (UX UI Design)',
          illustration: '../assets/icons/webdesign.svg',
          details:
            'L’expérience utilisateur, la convivialité et l’accessibilité doivent être pris en compte dans la conception du graphisme. Notre but est de concevoir des interfaces simples et originales, qui reflètent votre identité et transmettent un message clair tout en offrant une expérience utilisateur fluide, intuitive et efficace.',
        },
        {
          name: 'Intégration',
          illustration: '../assets/icons/integration.svg',
          details:
            'Sur la base des maquettes que nous aurons créées ou que vous nous aurez fourni, nous intégrerons vos contenus dans le respect des normes W3C et des bonnes pratiques de code. Dans un soucis de maintenabilité et de performance, nous choisirons les technologies les mieux adaptées à votre projet.',
        },
        {
          name: 'Responsive',
          illustration: '../assets/icons/responsive.svg',
          details:
            'Votre site internet doit reprendre votre identité visuelle et être adapté à tous les écrans pour pouvoir consulter vos informations sur tous les supports.',
        },
        {
          name: 'Accessibilité',
          illustration: '../assets/icons/accessibility.svg',
          details:
            'Votre site doit être accessible à toutes et tous et se charger rapidement pour garantir une bonne navigation ainsi qu’une bonne indexation de la part des moteurs de recherche.',
        },
        {
          name: 'SEO',
          illustration: '../assets/icons/SEO.svg',
          details:
            'Pour un référencement naturel optimisé, nous veillons à fournir une bonne sélection de mots-clés, des balises sémantiques utilisées judicieusement et un temps de chargement minimum. Il ne vous reste plus qu’à fournir des contenus de qualité.',
        },
        {
          name: 'Nom de domaine \n hébergement',
          illustration: '../assets/icons/domaine.svg',
          details: 'Nous vous accompagnerons dans le choix du nom de domaine et de l’hébergement.',
        },
        {
          name: 'Maintenance',
          illustration: '../assets/icons/settings.svg',
          details:
            'Nous proposons un service complémentaire de maintenance annuel de mise à jour et de sauvegarde régulières afin de vous garantir la pérennité et la stabilité de votre site web.',
        },
      ],
    },
  }
}
