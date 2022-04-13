import React from 'react'
import ServiceH3Card from './ServiceH3Card'
import colors from '../../../styles/bases/colors'
import h3 from '../../../assets/illustrations/h3CardWeb.svg'
import illustrationCard from '../../../assets/illustrations/Web development _Flatline-2.svg'
import SectionH4Title from './sectionH4Title'


const title = 'Pourquoi adopter la communication web ?'


const Web = () => {
  return (
    <>
      <ServiceH3Card id='service' color={`${colors.color3}`} h3Illustration={h3} h3Title='Web' illustrationCard={illustrationCard} />
      <SectionH4Title title={title} id='pourquoi'/>
    </>
  )
}

export default Web
