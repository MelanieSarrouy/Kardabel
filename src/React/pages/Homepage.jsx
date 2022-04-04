/* IMPORTS */

import React from 'react'
import SectionH3Objectifs from '../components/SectionH3Objectifs'
import SectionH3Valeurs from '../components/SectionH3Valeurs'
import SectionIntroAgence from '../components/SectionIntroAgence'


// JSX // _________________________________________________________________

/**
 * Homepage component to display website's homepage
 * @name Homepage
 * @returns {?JSX}
 */

const Homepage = () => {
  return (
    <>
      <SectionIntroAgence />
      <SectionH3Objectifs />
      <SectionH3Valeurs />
    </>
  )
}

// EXPORT // ______________________________________________________________

export default Homepage
