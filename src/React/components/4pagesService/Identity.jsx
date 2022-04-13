import React from 'react'
import ServiceH3Card from './ServiceH3Card'
import h3 from '../../../assets/illustrations/h3CardIdentity.svg'
import illustrationCard from '../../../assets/illustrations/Profile analysis _Flatline-2.svg'
import colors from '../../../styles/bases/colors'
import SectionH4Title from './sectionH4Title'
import circle from '../../../assets/shapes/EllipseJaune.svg'

const title = 'Pourquoi créer et utiliser une identité visuelle ?'
const content =
  'Au travers de la création d’une image de marque forte, efficace et positive, nous développons votre visibilité et valorisons vos produits et services.'

const Identity = () => {
  return (
    <>
      <ServiceH3Card
        id="service"
        color={`${colors.color1}`}
        h3Illustration={h3}
        h3Title="Identité"
        illustrationCard={illustrationCard}
      />
      <SectionH4Title title={title} id="pourquoi" circle={circle} content={content} />
    </>
  )
}

export default Identity
