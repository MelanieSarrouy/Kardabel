/* IMPORTS */

import React, { useEffect } from 'react'
// components imports
import SectionH3Objectifs from '../components/page agence/SectionH3Objectifs'
import SectionH3Valeurs from '../components/page agence/SectionH3Valeurs'
import SectionH2IntroAgence from '../components/page agence/SectionH2IntroAgence'
import SectionH3Services from '../components/page agence/SectionH3Services'

// JSX // _________________________________________________________________

/**
 * Homepage component to display website's homepage
 * @name Homepage
 * @returns {?JSX}
 */

const Homepage = () => {

/* Scrolling the window to the top of the page after every render. */
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <SectionH2IntroAgence />
      <SectionH3Services />
      <SectionH3Objectifs />
      <SectionH3Valeurs />
    </>
  )
}

// EXPORT // ______________________________________________________________

export default Homepage
