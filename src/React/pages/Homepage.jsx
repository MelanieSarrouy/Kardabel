/* IMPORTS */

import React, { useEffect } from 'react'
import SectionH3Objectifs from '../components/SectionH3Objectifs'
import SectionH3Valeurs from '../components/SectionH3Valeurs'
import SectionH2IntroAgence from '../components/SectionH2IntroAgence'


// JSX // _________________________________________________________________

/**
 * Homepage component to display website's homepage
 * @name Homepage
 * @returns {?JSX}
 */

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <SectionH2IntroAgence />
      <SectionH3Objectifs />
      <SectionH3Valeurs />
    </>
  )
}

// EXPORT // ______________________________________________________________

export default Homepage
