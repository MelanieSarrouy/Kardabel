import React from 'react'
import ServiceH3Card from './ServiceH3Card'
import colors from '../../styles/bases/colors'
import h3 from '../../assets/illustrations/h3CardWeb.svg'
import illustrationCard from '../../assets/illustrations/Web development _Flatline-2.svg'

const Web = () => {
  return (
    <>
      <ServiceH3Card color={`${colors.color3}`} h3Illustration={h3} h3Title='Web' illustrationCard={illustrationCard} />
    </>
  )
}

export default Web
