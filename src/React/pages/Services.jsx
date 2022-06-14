/* IMPORTS */

import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
// components imports
import H2Intro from '../layout/H2Intro'
import SecondNav from '../layout/SecondNav'

// JSX // _________________________________________________________________

/**
 * Services component to display website's Services page
 * @name Services
 * @returns {?JSX}
 */

const Services = () => {
  const title = 'Services'
  const content =
    'Pour répondre au mieux à vos besoins en communication et visibilité, nous vous propsons un ensemble de services dans le domaine du Design Graphique et du Développement. '
  const links = ['Identité', 'Print', 'Web', 'Android']
  const name = 'services'
  const prefixeName = ''
  const suffixeName = '#card'

  /* Scrolling the window to the top of the page after every render. */
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

// EXPORT // ______________________________________________________________

export default Services
