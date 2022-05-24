import React from 'react'
import { SectionPortfolio } from '../../../styles/components/3pagesPortfolio/webPortfolio'
import wait from '../../../assets/illustrations/Waiting_Monochromatic.svg'
import { DivImgWait, PTextProvisoire } from '../../../styles/components/3pagesPortfolio/graphismePortfolio'

const title = 'Portfolio Graphisme en cours de construction...'


const GraphismePortfolio = () => {
  return (
    <SectionPortfolio id="gallery">
      <PTextProvisoire>{title}</PTextProvisoire>
      <DivImgWait>
        <img src={wait} alt="illustration attente" width={350} />
      </DivImgWait>
    </SectionPortfolio>
  )
}

export default GraphismePortfolio
