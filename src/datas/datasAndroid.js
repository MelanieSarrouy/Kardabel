import colors from '../styles/bases/colors'
import titleCard from '../assets/illustrations/h3CardAndroid.svg'
import illustrationCard from '../assets/illustrations/Authentication_Flatline-2.svg'
import backgroundCard from '../assets/shapes/EllipseVerte.svg'
import servicesBackground from '../assets/illustrations/android.png'
import whyBackground from '../assets/shapes/why-background-green.svg'

export const datasAndroid = {
  id: 'android',
  title: 'Android',
  illustrations: {
    title: titleCard,
    illustration: illustrationCard,
  },
  colors: {
    normal: colors.color4,
    light: colors.tertiary,
    dark: colors.color4Dark
  },
  subtitles: {
    why: {
      title: 'Android, kesako',
      background: whyBackground,
      side: 'left',
      content:
        "Un site web permet de mettre en valeur une vitrine et de partager du contenu, alors qu'une application est un outil, un service. \n Proposer une application Android, c’est s’adresser à 84% du marché mondial du smartphone. En France, c’est en moyenne 3,6 heures passées chaque jour sur un mobile. \n Avec une application mobile, il est possible d’avoir une place dans le quotidien de vos utilisateurs.",
    },
    benefits: {
      title: 'Les avantages d’une application',
      cards: [
        {
          title: 'Confort',
          content:
            'Améliorer son quotidien ou celui de ses proches, de ses collaborateurs \n (carte avec information personnalisable, géolocalisation, bloc note partagé, emploi du temps...)',
        },
        {
          title: 'Social',
          content:
            'Développer les liens sociaux \n (chat en ligne, gestion de profil dynamique, application intra-entreprise...)',
        },
        {
          title: 'Organisation',
          content:
            'Organiser et gérer ses ressources en toute sécurité \n (base de donnée distante ou locale)',
        },
        {
          title: 'Multifonction',
          content:
            'L’application est un outil permettant le streaming, le paiement en ligne, les jeux, le GPS, l’information en continue, la boussole, le scanner, la détection de fantômes... \n Les applications mobiles offrent des possibilités illimitées !',
        },
      ],
    },
    services: {
      title: 'Kardabel vous propose',
      intro:
        'Toutes les applications développées par Kardabel sont réactives et user friendly. Elles répondent aux standards visuels actuels grâce notamment aux outils Material Design de Google qui amènent un confort et une accessibilité dans un environnement familier. \n Nos applications Android sont développées selon les principes SOLID avec une clean architecture MVVM : robustesse, maintenabilité, tests unitaires de l’ensemble de la logique métier, réutilisabilité et extensibilité du code pour permettre une évolution rapide selon vos besoins. \n Alors n’hésitez plus, discutons ensemble de votre projet et bâtissons l’application de vos rêves !',
      background: servicesBackground,
      ellipse: backgroundCard,
      services: '',
    },
  },
}
