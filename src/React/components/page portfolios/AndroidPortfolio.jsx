import React from 'react'
import { SectionPortfolio } from '../../../styles/components/page portfolios/webPortfolio'
import { DivImgWait, PTextProvisoire } from '../../../styles/components/page portfolios/graphismePortfolio'
import wait from '../../../assets/illustrations/Waiting_Monochromatic.svg'

const title='Portfolio Android en cours de construction...'

const AndroidPortfolio = () => {
  return (
    <SectionPortfolio id="gallery">
      <PTextProvisoire>{title}</PTextProvisoire>
      <DivImgWait>
      <img src={wait} alt='illustration attente' width={350} />
    </DivImgWait>

    </SectionPortfolio>
  )
}

export default AndroidPortfolio