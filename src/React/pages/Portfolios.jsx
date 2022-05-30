import React, { useEffect } from 'react'
import SectionH2IntroPorfolios from '../components/page portfolios/SectionH2IntroPorfolios'

const Portfolios = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SectionH2IntroPorfolios />
    </>
  )
}

export default Portfolios
