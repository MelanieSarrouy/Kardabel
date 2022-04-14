import React from 'react'
import ServiceH3Card from './ServiceH3Card'
import colors from '../../../styles/bases/colors'
import h3 from '../../../assets/illustrations/h3CardWeb.svg'
import illustrationCard from '../../../assets/illustrations/Web development _Flatline-2.svg'
import SectionH4Title from './sectionH4Title'
import circle from '../../../assets/shapes/EllipseBleue.svg'

const title = 'Pourquoi adopter la communication web ?'
const content =
  "Aujourd'hui une stratégie de communication efficace ne se conçoit pas sans un volet digital. Entre smartphones, tablettes, ordinateurs portables, de bureau ou autres, les nouvelles technologies nous accompagnent partout. C'est un univers en perpétuelle évolution, incontournable pour votre visibilité, votre notoriété et votre image professionnelle."

const Web = () => {
  return (
    <>
      <ServiceH3Card
        id="service"
        color={`${colors.color3}`}
        h3Illustration={h3}
        h3Title="Web"
        illustrationCard={illustrationCard}
      />
      <SectionH4Title
        title={title}
        id="pourquoi"
        circle={circle}
        color={`${colors.color3clair}`}
        content={content}
      />
    </>
  )
}

export default Web
