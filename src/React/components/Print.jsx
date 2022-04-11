import React from 'react'
import ServiceH3Card from './ServiceH3Card'
import colors from '../../styles/bases/colors'
import h3 from '../../assets/illustrations/h3CardPrint.svg'
import illustrationCard from '../../assets/illustrations/Designer _Flatline-2.svg'



const Print = () => {
  return (
    <>
      <ServiceH3Card color={`${colors.color2}`} h3Illustration={h3} h3Title='Print' illustrationCard={illustrationCard} />
    </>
  )
}

export default Print
