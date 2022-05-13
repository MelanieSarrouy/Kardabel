import React from 'react'
import {
  UlServicesContent,
  H3ServiceStyle,
  ImgSVGService,
  PtextService,
  LinkCardService,
  SectionServices,
  DivServices,
} from '../../../styles/components/pageAgence/sectionH3Services'
import { services } from '../../../datas/services'
import H3TrioTitle from '../../layout/H3TrioTitle'
import { createLink } from '../../../helpers/createLink'

const createIllustrationAlt = (str) => {
  return 'illustration ' + str
}
const name = 'services'
const prefixeName = ''
const suffixeName = '#card'

const SectionH3Services = () => {
  return (
    <SectionServices id='nosServices'>
      <DivServices>
        <H3TrioTitle title={'Nos services'} />
        <UlServicesContent>
          {services.map((element, index) => (
            <li key={index}>
              <LinkCardService to={createLink(element.name, name, prefixeName, suffixeName)}>
                <ImgSVGService
                  src={element.illustration}
                  alt={createIllustrationAlt(element.name)}
                />
                <H3ServiceStyle>{element.name}</H3ServiceStyle>
                <PtextService>{element.text}</PtextService>
              </LinkCardService>
            </li>
          ))}
        </UlServicesContent>
      </DivServices>
    </SectionServices>
  )
}

export default SectionH3Services
