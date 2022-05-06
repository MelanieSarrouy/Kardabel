import React, { useEffect } from 'react'
import H2Intro from '../../layout/H2Intro'
import {
  NavServicesStyle,
  LinkSecondaryStyle,
  LinkSecondaryStyleActive,
} from '../../../styles/components/1pageServices/sectionH2IntroServices'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { standardizeAndLowerCase } from '../../../helpers/standardizeAndLowerCase'

const title = 'Services'
const content =
  'Pour répondre au mieux à vos besoins en communiction et visibilité, nous vous propsons un ensemble de services dans le domaine du Design Graphique et du Développement.'

const links = ['Identité', 'Print', 'Web', 'Android']
const createLink = (str) => {
  let a = standardizeAndLowerCase(str)
  return '/services/' + a
}

const SectionH2IntroServices = () => {
  const sampleLocation = useLocation()
  const location = sampleLocation.pathname
  const hash = sampleLocation.hash.substring(1)
  const history = window.history
  console.log(location)

  useEffect(() => {
    if (hash !== '') {
      history.pushState(null, '', `${location}`);
    }
  }, [hash, history, location])

  return (
    <div>
      <H2Intro id="services" title={title} content={content}>
        <NavServicesStyle>
          <ul>
            {links.map((element, index) => (
              <li key={index}>
                {location === createLink(element) ? (
                  <LinkSecondaryStyleActive to="/services">{element}</LinkSecondaryStyleActive>
                ) : (
                  <LinkSecondaryStyle to={standardizeAndLowerCase(element)}>
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
