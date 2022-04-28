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
import { standardizeAndLowerCase } from '../../../helpers/standardizeAndLowerCase'

const createIllustrationAlt = (str) => {
  return 'illustration ' + str
}
const createURL = (str) => {
  let a = standardizeAndLowerCase(str)
  return 'services/' + a
}

const SectionH3Services = () => {
  return (
    <SectionServices>
      <DivServices>
        <H3TrioTitle title={'Nos services'} />
        <UlServicesContent>
          {services.map((element, index) => (
            <li key={index}>
              <LinkCardService to={createURL(element.name)}>
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
