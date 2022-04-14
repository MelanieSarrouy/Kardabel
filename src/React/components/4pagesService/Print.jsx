import React from 'react'
import ServiceH3Card from './ServiceH3Card'
import colors from '../../../styles/bases/colors'
import h3 from '../../../assets/illustrations/h3CardPrint.svg'
import illustrationCard from '../../../assets/illustrations/Designer _Flatline-2.svg'
import SectionH4Title from './sectionH4Title'
import circle from '../../../assets/shapes/EllipseRose.svg'

const title = 'Pourquoi utiliser la communication print ?'
const content =
  'Le print, en complément du digital, est essentiel pour communiquer efficacement avec vos clients, prospects, adhérents ou bien d\'éventuels partenaires. Il véhicule votre identité, vos savoir-faire, votre professionnalisme et vous permet d\'être en contact physique direct avec le consommateur. Il marque l\'esprit du lecteur avec une image forte.'

const Print = () => {
  return (
    <>
      <ServiceH3Card
        id="service"
        color={`${colors.color2}`}
        h3Illustration={h3}
        h3Title="Print"
        illustrationCard={illustrationCard}
      />
      <SectionH4Title
        title={title}
        id="pourquoi"
        circle={circle}
        color={`${colors.color2clair}`}
        content={content}
      />
    </>
  )
}

export default Print
