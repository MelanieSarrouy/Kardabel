/* IMPORTS */

import React from 'react'
// helpers imports
import { createLink } from '../../../helpers/createLink'
// data imports
import { services } from '../../../datas/agence/services'
// styles imports
import {
  UlServicesContent,
  H4ServiceStyle,
  ImgSVGService,
  PtextService,
  LinkCardService,
  SectionServices,
  DivServices,
} from '../../../styles/components/page agence/sectionH3Services'
// components imports
import H3TrioTitle from '../../layout/H3TrioTitle'

// JSX // _________________________________________________________________

/**
 * SectionH3Services component to display agence page's services section
 * @name SectionH3Services
 * @returns {?JSX}
 */

const SectionH3Services = () => {

  const createIllustrationAlt = (str) => {
    return 'illustration ' + str
  }
  const name = 'services'
  const prefixeName = ''
  const suffixeName = '#card'

  return (
    <SectionServices id="nosservices">
      <DivServices>
        <H3TrioTitle title={'Nos  services'} />
        <UlServicesContent>
          {services.map((element, index) => (
            <li key={index}>
              <LinkCardService to={createLink(element.name, name, true, prefixeName, suffixeName)}>
                <ImgSVGService
                  src={element.illustration}
                  alt={createIllustrationAlt(element.name)}
                />
                <H4ServiceStyle>{element.name}</H4ServiceStyle>
                <PtextService>{element.text}</PtextService>
              </LinkCardService>
            </li>
          ))}
        </UlServicesContent>
      </DivServices>
    </SectionServices>
  )
}

// EXPORT // ______________________________________________________________

export default SectionH3Services
