/* IMPORTS */

import React, { useEffect } from 'react'
import SectionH3Objectifs from '../components/pageAgence/SectionH3Objectifs'
import SectionH3Valeurs from '../components/pageAgence/SectionH3Valeurs'
import SectionH2IntroAgence from '../components/pageAgence/SectionH2IntroAgence'
import SectionH3Services from '../components/pageAgence/SectionH3Services'

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
      <SectionH3Services />
      <SectionH3Objectifs />
      <SectionH3Valeurs />
    </>
  )
}

// EXPORT // ______________________________________________________________

export default Homepage
