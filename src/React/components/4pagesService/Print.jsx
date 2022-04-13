import React from 'react'
import ServiceH3Card from './ServiceH3Card'
import colors from '../../../styles/bases/colors'
import h3 from '../../../assets/illustrations/h3CardPrint.svg'
import illustrationCard from '../../../assets/illustrations/Designer _Flatline-2.svg'
import SectionH4Title from './sectionH4Title'

const title = 'Pourquoi utiliser la communication print ?'

const Print = () => {
  return (
    <>
      <ServiceH3Card id='service' color={`${colors.color2}`} h3Illustration={h3} h3Title='Print' illustrationCard={illustrationCard} />
      <SectionH4Title title={title} id='pourquoi'/>
    </>
  )
}

export default Print
