import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import H2Intro from '../layout/H2Intro'
import SecondNav from '../layout/SecondNav'


const Services = () => {
  const title = 'Services'
  const content =
    'Pour répondre au mieux à vos besoins en communication et visibilité, nous vous propsons un ensemble de services dans le domaine du Design Graphique et du Développement. '
  const links = ['Identité', 'Print', 'Web', 'Android']
  const name = 'services'
  const prefixeName = ''
  const suffixeName = '#card'

  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <H2Intro id="services" title={title} content={content}>
        <SecondNav
          links={links}
          name={name}
          prefixeName={prefixeName}
          suffixeName={suffixeName}
        ></SecondNav>
      </H2Intro>
      <Outlet />
    </div>
  )
}

export default Services
