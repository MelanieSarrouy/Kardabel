import colors from '../styles/bases/colors'
import titleCard from '../assets/illustrations/h3CardWeb.svg'
import illustrationCard from '../assets/illustrations/Web development _Flatline-2.svg'
import backgroundCard from '../assets/shapes/EllipseBleue.svg'
import servicesBackground from '../assets/illustrations/blue-sky.png'
import whyBackground from '../assets/shapes/why-background-blue.svg'

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
    dark: colors.color3Dark

  },
  subtitles: {
    why:
    {
      title: 'Le Web, kesako',
      background: whyBackground,
      side: 'left',
      content: 'Ici, le Web désigne la communication digitale aussi connue sous le nom de communication numérique, c\'est-à-dire la communication via des canaux d\'informations tels que sites web, blogs ou newsletters.\nAujourd’hui une stratégie de communication efficace ne se conçoit pas sans un volet digital. Entre smartphones, tablettes, ordinateurs portables ou de bureau,les nouvelles technologies nous accompagnent partout. \n C’est un univers en perpétuelle évolution, incontournable pour votre visibilité, votre notoriété et votre image dynamique et professionnelle.'
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
            'Des contenus, un style et un ton différents pour se démarquer de la concurrence. \n L’accessibilité, la simplicité et la personnalisation des interfaces et interactions sont des atouts incontournables du web sur lesquels il faut s’appuyer pour faire la différence.',
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
      ellipse: backgroundCard,
      intro: 'La création ou la refonte de votre site internet, landing page, blog ou newsletter. \n Kardabel développe pour vous des sites internet sur-mesure from scratch ou avec le CMS WordPress. \n Nous choisirons ensemble les technologies les mieux adaptées à votre projet.',
      services: [
        {
          name: 'Webdesign \n (UX / UI)',
          details:
            'Notre but est de concevoir ou personnaliser des interfaces simples et originales, tout en offrant une expérience utilisateur (UX) conviviale, accessible, intuitive et efficace.',
        },
        {
          name: 'Intégration',
          details:
            'À partir des maquettes que nous concevons ou que vous nous fournissez, nous intégrons vos contenus dans le respect des normes W3C et des bonnes pratiques de développement.',
        },
        {
          name: 'Responsive',
          details:
            'Votre site internet doit reprendre votre identité visuelle et être adapté à tous les écrans pour pouvoir consulter vos informations sur tous les supports.',
        },
        {
          name: 'Accessibilité',
          details:
            'Votre site doit être accessible à toutes et tous et se charger rapidement pour garantir une bonne navigation ainsi qu’une bonne indexation de la part des moteurs de recherche.',
        },
        // {
        //   name: 'SEO',
        //   details:
        //     'Pour un meilleur référencement naturel, nous prenons en compte certains élément dès la conception de nos sites. Il ne vous reste plus qu’à fournir des contenus de qualité.',
        // },
        {
          name: 'Domaine \n hébergement',
          details: 'Nous vous accompagnerons dans le choix du nom de domaine et de l’hébergement.',
        },
        {
          name: 'Maintenance',
          details:
            'Nous proposons un service complémentaire de maintenance (mises à jour et sauvegardes régulières) afin de vous garantir la pérennité et la stabilité de votre site web.',
        },
      ],
    },
  }
}
