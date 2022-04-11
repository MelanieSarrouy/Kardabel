import React from 'react'
import ServiceH3Card from './ServiceH3Card'
import h3 from '../../assets/illustrations/h3CardIdentity.svg'
import illustrationCard from '../../assets/illustrations/Profile analysis _Flatline-2.svg'
import colors from '../../styles/bases/colors'



const Identity = () => {
  return (
    <>
      <ServiceH3Card id='service' color={`${colors.color1}`} h3Illustration={h3} h3Title='Identité' illustrationCard={illustrationCard} />
    </>
  )
}

export default Identity
