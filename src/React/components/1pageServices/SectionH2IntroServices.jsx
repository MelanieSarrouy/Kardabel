import React from 'react'
import H2Intro from '../../layout/H2Intro'
import {
  NavServicesStyle,
  LinkSecondaryStyle,
  LinkSecondaryStyleActive,
} from '../../../styles/components/1pageServices/sectionH2IntroServices'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { createLink } from '../../../helpers/createLink'

const title = 'Services'
const content =
  'Pour répondre au mieux à vos besoins en communiction et visibilité, nous vous propsons un ensemble de services dans le domaine du Design Graphique et du Développement. '
const links = ['Identité', 'Print', 'Web', 'Android']
const name = 'services'
const prefixeName = ''
const suffixeName = '#card'
const empty = ''
const submenu = true

const SectionH2IntroServices = () => {
  const sampleLocation = useLocation()
  const location = sampleLocation.pathname

  return (
    <div>
      <H2Intro id="services" title={title} content={content}>
        <NavServicesStyle>
          <ul>
            {links.map((element, index) => (
              <li key={index}>
                {location === createLink(element, name, submenu, prefixeName, empty) ? (
                  <LinkSecondaryStyleActive to="/services">{element}</LinkSecondaryStyleActive>
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

export default SectionH2IntroServices
