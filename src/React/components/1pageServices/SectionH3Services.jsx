import React, { useState } from 'react'
import {
  DivServicesContent,
  H3ServiceStyle,
  ImgSVGService,
  PtextService,
  Section4Services,
  ButtonCardService,
} from '../../../styles/components/1pageServices/sectionH3Services'
import { services } from '../../../datas/services'
import Identity from '../4pagesService/Identity'
import Print from '../4pagesService/Print'
import Web from '../4pagesService/Web'
import Android from '../4pagesService/Android'

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
    .replace(/[.,/#?!$%^&*;:{}=\-_`~()]/g, '')
    .replace(' ', '')
  return a
}


const createIllustrationAlt = (str) => {
  return 'illustration ' + str
}

const SectionH3Services = () => {
  const [ServicesPage, setServicesPage] = useState(true)

  const [identityPage, setIdentityPage] = useState(false)
  const [printPage, setPrintPage] = useState(false)
  const [webPage, setWebPage] = useState(false)
  const [androidPage, setAndroidPage] = useState(false)

  const handleClickIdentity = () => {
    setServicesPage(false)
    setIdentityPage(true)
  }
  const handleClickPrint = () => {
    setServicesPage(false)
    setPrintPage(true)
  }
  const handleClickWeb = () => {
    setServicesPage(false)
    setWebPage(true)
  }
  const handleClickAndroid = () => {
    setServicesPage(false)
    setAndroidPage(true)
  }
  return (
    <>
      {ServicesPage && (
        <Section4Services>
          <DivServicesContent>
            <ButtonCardService onClick={() => handleClickIdentity()}>
              <ImgSVGService
                src={services[0].illustration}
                alt={createIllustrationAlt(services[0].name)}
              />
              <H3ServiceStyle>{services[0].name}</H3ServiceStyle>
              <PtextService>{services[0].text}</PtextService>
            </ButtonCardService>
            <ButtonCardService onClick={() => handleClickPrint()}>
              <ImgSVGService
                src={services[1].illustration}
                alt={createIllustrationAlt(services[1].name)}
              />
              <H3ServiceStyle>{services[1].name}</H3ServiceStyle>
              <PtextService>{services[1].text}</PtextService>
            </ButtonCardService>
            <ButtonCardService onClick={() => handleClickWeb()}>
              <ImgSVGService
                src={services[2].illustration}
                alt={createIllustrationAlt(services[2].name)}
              />
              <H3ServiceStyle>{services[2].name}</H3ServiceStyle>
              <PtextService>{services[2].text}</PtextService>
            </ButtonCardService>
            <ButtonCardService onClick={() => handleClickAndroid()}>
              <ImgSVGService
                src={services[3].illustration}
                alt={createIllustrationAlt(services[3].name)}
              />
              <H3ServiceStyle>{services[3].name}</H3ServiceStyle>
              <PtextService>{services[3].text}</PtextService>
            </ButtonCardService>
          </DivServicesContent>
        </Section4Services>
      )}
      {identityPage && <Identity />}
      {printPage && <Print />}
      {webPage && <Web />}
      {androidPage && <Android />}
    </>
  )
}

export default SectionH3Services
