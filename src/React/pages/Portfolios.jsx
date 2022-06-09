import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import H2Intro from '../layout/H2Intro'
import SecondNav from '../layout/SecondNav'


const Portfolios = (props) => {
  const title = 'Portfolios'
  const content =
    "Découvrez une sélection de nos différentes productions, qu'il s'agisse de créations graphiques, de sites web ou d'applications."
    const links = ['Graphisme', 'Web', 'Android']
  const name = 'portfolios'
  const prefixeName = 'portfolio-'
  const suffixeName = '#gallery'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <H2Intro id="portfolios" title={title} content={content}>
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

export default Portfolios
