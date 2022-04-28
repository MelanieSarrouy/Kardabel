import React, { useEffect } from 'react'
import SectionH2IntroServices from '../components/1pageServices/SectionH2IntroServices'

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SectionH2IntroServices />
    </>
  )
}

export default Services
