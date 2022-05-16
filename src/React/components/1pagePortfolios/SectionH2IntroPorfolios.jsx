import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { createLink } from '../../../helpers/createLink'
import {
  LinkSecondaryStyle,
  LinkSecondaryStyleActive,
  NavServicesStyle,
} from '../../../styles/components/1pageServices/sectionH2IntroServices'
import H2Intro from '../../layout/H2Intro'

const title = 'Portfolios'
const content =
  'Découvrez une sélection de nos différentes productions, qu\'il s\'agisse de créations graphiques, de sites web ou d\'applications.'
const links = ['Graphisme', 'Web', 'Android']
const name = 'portfolios'
const prefixeName = 'portfolio-'
const suffixeName = '#gallery'
const empty = ''
const submenu = true


const SectionH2IntroPorfolios = () => {
  const sampleLocation = useLocation()
  const location = sampleLocation.pathname

  return (
    <div>
      <H2Intro id="portfolios" title={title} content={content}>
        <NavServicesStyle>
          <ul>
            {links.map((element, index) => (
              <li key={index}>
                {location === createLink(element, name, submenu, prefixeName, empty) ? (
                  <LinkSecondaryStyleActive to="/portfolios">{element}</LinkSecondaryStyleActive>
                ) : (
                  <LinkSecondaryStyle to={createLink(element, name, submenu, prefixeName, suffixeName)}>
                    {element}
                  </LinkSecondaryStyle>
                )}
              </li>
            ))}
          </ul>
        </NavServicesStyle>
      </H2Intro>
      <Outlet />
    </div>
  )
}

export default SectionH2IntroPorfolios
