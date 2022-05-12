import React, { useEffect } from 'react'
import CoordonnéesKardabel from '../components/page contact/CoordonnéesKardabel'
import SectionH2IntroContact from '../components/page contact/SectionH2IntroContact'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section>
      <SectionH2IntroContact />
      <CoordonnéesKardabel />
    </section>
  )
}

export default Contact
