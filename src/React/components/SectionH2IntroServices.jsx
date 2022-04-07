import React from 'react'
import { useLocation } from 'react-router-dom'
import H2Intro from './H2Intro'
import {
  NavServicesStyle,
  LinkSecondaryStyle,
  LinkSecondaryStyleActive,
} from '../../styles/pages/services'
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
      <H2Intro title={title} content={content}>
        <NavServicesStyle>
          {identity ? (
            <LinkSecondaryStyleActive to="/services/identite">Identité</LinkSecondaryStyleActive>
          ) : (
            <LinkSecondaryStyle to="/services/identite">Identité</LinkSecondaryStyle>
          )}
          {print ? (
            <LinkSecondaryStyleActive to="/services/print">Print</LinkSecondaryStyleActive>
          ) : (
            <LinkSecondaryStyle to="/services/print">Print</LinkSecondaryStyle>
          )}
          {web ? (
            <LinkSecondaryStyleActive to="/services/web">Web</LinkSecondaryStyleActive>
          ) : (
            <LinkSecondaryStyle to="/services/web">Web</LinkSecondaryStyle>
          )}
          {android ? (
            <LinkSecondaryStyleActive to="/services/android">Android</LinkSecondaryStyleActive>
          ) : (
            <LinkSecondaryStyle to="/services/android">Android</LinkSecondaryStyle>
          )}
        </NavServicesStyle>
      </H2Intro>
      {service && <SectionH3Services />}
      
    </div>
  )
}

export default SectionH2IntroServices
