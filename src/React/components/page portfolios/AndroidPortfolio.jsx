/* IMPORTS */

import React from 'react'
// assets imports
import wait from '../../../assets/illustrations/Waiting_Monochromatic.svg'
// styles imports
import { SectionPortfolio } from '../../../styles/components/page portfolios/webPortfolio'
import {
  DivImgWait,
  PTextProvisoire,
} from '../../../styles/components/page portfolios/graphismePortfolio'

// JSX // _________________________________________________________________

/**
 * AndroidPortfolio component to display the android portfolio page
 * @name AndroidPortfolio
 * @returns {?JSX}
 */

 const AndroidPortfolio = () => {
  const title = 'Portfolio Android en cours de construction...'

  return (
    <SectionPortfolio id="gallery">
      <PTextProvisoire>{title}</PTextProvisoire>
      <DivImgWait>
        <img src={wait} alt="illustration attente" width={350} />
      </DivImgWait>
    </SectionPortfolio>
  )
}

// EXPORT // ______________________________________________________________

export default AndroidPortfolio
