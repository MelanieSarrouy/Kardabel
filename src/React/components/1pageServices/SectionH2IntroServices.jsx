import React from 'react'
import { useLocation } from 'react-router-dom'
import H2Intro from '../../layout/H2Intro'
import {
  NavServicesStyle,
  LinkSecondaryStyle,
  LinkSecondaryStyleActive,
} from '../../../styles/components/1pageServices/sectionH2IntroServices'
import SectionH3Services from './SectionH3Services'

const title = 'Services'
const content =
  'Pour répondre au mieux à vos besoins en communiction et visibilité, nous vous propsons un ensemble de services dans le domaine du Design Graphique et du Développement.'

const SectionH2IntroServices = () => {
  const location = useLocation()
  const page = location.pathname
  const identity = page.indexOf('identite') > -1
  const print = page.indexOf('print') > -1
  const web = page.indexOf('web') > -1
  const android = page.indexOf('android') > -1
  const service = !identity && !print && !web && !android

  return (
    <div>
      <H2Intro id="services" title={title} content={content}>
        <NavServicesStyle>
          <ul>
            <li>
              {identity ? (
                <LinkSecondaryStyleActive to="/services">Identité</LinkSecondaryStyleActive>
              ) : (
                <LinkSecondaryStyle to="/services/identite#service">Identité</LinkSecondaryStyle>
              )}
            </li>
            <li>
              {print ? (
                <LinkSecondaryStyleActive to="/services">Print</LinkSecondaryStyleActive>
              ) : (
                <LinkSecondaryStyle to="/services/print#service">Print</LinkSecondaryStyle>
              )}
            </li>
            <li>
              {web ? (
                <LinkSecondaryStyleActive to="/services">Web</LinkSecondaryStyleActive>
              ) : (
                <LinkSecondaryStyle to="/services/web#service">Web</LinkSecondaryStyle>
              )}
            </li>
            <li>
              {android ? (
                <LinkSecondaryStyleActive to="/services">Android</LinkSecondaryStyleActive>
              ) : (
                <LinkSecondaryStyle to="/services/android#service">Android</LinkSecondaryStyle>
              )}
            </li>
          </ul>
        </NavServicesStyle>
      </H2Intro>
      {service && <SectionH3Services />}
    </div>
  )
}

export default SectionH2IntroServices
