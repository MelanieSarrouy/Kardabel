import React, { useState } from 'react'
import H2Intro from '../../layout/H2Intro'
import {
  NavServicesStyle,
  ButtonServicesStyleActive,
  ButtonServicesStyle,
} from '../../../styles/components/1pageServices/sectionH2IntroServices'
import SectionH3Services from './SectionH3Services'
import Identity from '../4pagesService/Identity'
import Print from '../4pagesService/Print'
import Web from '../4pagesService/Web'
import Android from '../4pagesService/Android'

const title = 'Services'
const content =
  'Pour répondre au mieux à vos besoins en communiction et visibilité, nous vous propsons un ensemble de services dans le domaine du Design Graphique et du Développement.'

const SectionH2IntroServices = () => {

  const [ServicesPage, setServicesPage] = useState(true)
  const [identityPage, setIdentityPage] = useState(false)
  const [printPage, setPrintPage] = useState(false)
  const [webPage, setWebPage] = useState(false)
  const [androidPage, setAndroidPage] = useState(false)


  const closeIdentityPage = () => {
    setIdentityPage(false)
    setServicesPage(true)
  }
  const openIdentityPage = () => {
    setServicesPage(false)
    setIdentityPage(true)
    setPrintPage(false)
    setWebPage(false)
    setAndroidPage(false)

  }
  const closePrintPage = () => {
    setPrintPage(false)
    setServicesPage(true)
  }
  const openPrintPage = () => {
    setServicesPage(false)
    setIdentityPage(false)
    setPrintPage(true)
    setWebPage(false)
    setAndroidPage(false)

  }
  const closeWebPage = () => {
    setWebPage(false)
    setServicesPage(true)
  }
  const openWebPage = () => {
    setServicesPage(false)
    setIdentityPage(false)
    setPrintPage(false)
    setWebPage(true)
    setAndroidPage(false)

  }
  const closeAndroidPage = () => {
    setAndroidPage(false)
    setServicesPage(true)
  }
  const openAndroidPage = () => {
    setServicesPage(false)
    setIdentityPage(false)
    setPrintPage(false)
    setWebPage(false)
    setAndroidPage(true)

  }


  return (
    <div>
      <H2Intro id="services" title={title} content={content}>
        <NavServicesStyle>
          <ul>
            <li>
              {identityPage ? (
                <ButtonServicesStyleActive onClick={() => closeIdentityPage()}>
                  Identité
                </ButtonServicesStyleActive>
              ) : (
                <ButtonServicesStyle onClick={() => openIdentityPage()}>
                  Identité
                </ButtonServicesStyle>
              )}
            </li>
            <li>
              {printPage ? (
                <ButtonServicesStyleActive onClick={() => closePrintPage()}>
                  Print
                </ButtonServicesStyleActive>
              ) : (
                <ButtonServicesStyle onClick={() => openPrintPage()}>Print</ButtonServicesStyle>
              )}
            </li>
            <li>
              {webPage ? (
                <ButtonServicesStyleActive onClick={() => closeWebPage()}>
                  Web
                </ButtonServicesStyleActive>
              ) : (
                <ButtonServicesStyle onClick={() => openWebPage()}>Web</ButtonServicesStyle>
              )}
            </li>
            <li>
              {androidPage ? (
                <ButtonServicesStyleActive onClick={() => closeAndroidPage()}>
                  Android
                </ButtonServicesStyleActive>
              ) : (
                <ButtonServicesStyle onClick={() => openAndroidPage()}>Android</ButtonServicesStyle>
              )}
            </li>
          </ul>
        </NavServicesStyle>
      </H2Intro>
      {ServicesPage && <SectionH3Services />}
      {identityPage && <Identity />}
      {printPage && <Print />}
      {webPage && <Web />}
      {androidPage && <Android />}

    </div>
  )
}

export default SectionH2IntroServices
