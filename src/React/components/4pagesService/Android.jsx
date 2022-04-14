import React from 'react'
import ServiceH3Card from './ServiceH3Card'
import colors from '../../../styles/bases/colors'
import h3 from '../../../assets/illustrations/h3CardAndroid.svg'
import illustrationCard from '../../../assets/illustrations/Authentication_Flatline-2.svg'
import SectionH4Title from './sectionH4Title'
import circle from '../../../assets/shapes/EllipseVerte.svg'

const title = 'Pourquoi avoir sa propre application Android ?'
const content =
  'Au travers de la création d’une image de marque forte, efficace et positive,nous développons votre visibilité et valorisons vos produits et services.'

const Android = () => {
  return (
    <>
      <ServiceH3Card
        id="service"
        color={`${colors.color4}`}
        h3Illustration={h3}
        h3Title="Android"
        illustrationCard={illustrationCard}
      />
      <SectionH4Title
        title={title}
        id="pourquoi"
        circle={circle}
        color={`${colors.color4clair}`}
        content={content}
      />
    </>
  )
}

export default Android
