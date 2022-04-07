import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import SectionH2IntroServices from '../components/SectionH2IntroServices'

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SectionH2IntroServices />
      <Outlet />
    </>
  )
}

export default Services
