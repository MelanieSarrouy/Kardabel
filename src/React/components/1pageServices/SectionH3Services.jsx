import React from 'react'
import {
  DivServicesContent,
  H3ServiceStyle,
  ImgSVGService,
  LinkCardService,
  PtextService,
  Section4Services,
} from '../../../styles/components/1pageServices/sectionH3Services'
import { services } from '../../../datas/services'

export const standardizeAndLowerCase = (str) => {
  let a = str
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[œ]/g, 'oe')
    .replace(/[ÈÉÊËèéêë]/g, 'e')
    .replace(/[ÂÄÀàâä]/g, 'a')
    .replace(/[ÔÖôö]/g, 'o')
    .replace(/[ÛÜûü]/g, 'u')
    .replace(/[ÎÏîï]/g, 'i')
    .toLowerCase()
    .replace('.', '')
    .replace(' ', '')
  return a
}

const createRedirectionLink = (str) => {
  return '/services/' + standardizeAndLowerCase(str) + '#service'
}

const createIllustrationAlt = (str) => {
  return 'illustration ' + str
}

const SectionH3Services = () => {
  return (
    <Section4Services>
      <DivServicesContent>
        {services.map((element, index) => (
          <LinkCardService key={index} to={createRedirectionLink(element.name)}>
            <ImgSVGService src={element.illustration} alt={createIllustrationAlt(element.name)} />
            <H3ServiceStyle>{element.name}</H3ServiceStyle>
            <PtextService>{element.text}</PtextService>
          </LinkCardService>
        ))}
      </DivServicesContent>
    </Section4Services>
  )
}

export default SectionH3Services
