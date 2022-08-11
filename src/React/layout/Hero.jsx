/* IMPORTS */

import React from 'react'
import { useLocation } from 'react-router-dom'
// assets imports
import logo from '../../assets/logo/kardabel_logo-simple.svg'
import waveAgence from '../../assets/shapes/waveAgence.svg'
import waveServices from '../../assets/shapes/waveServices.svg'
import wavePortfolio from '../../assets/shapes/wavePortfolio.svg'
import waveContact from '../../assets/shapes/waveContact.svg'
import waveMentions from '../../assets/shapes/waveMentions.svg'
// styles imports
import {
  Baseline,
  ButtonsContainer,
  H1Style,
  HeroContent,
  ImgCurvyStyle,
  ImgLogo,
  LinkContacts,
  LinkServices,
  LogoContainer,
  PTitleStyle,
  SpanTitle,
  TextHeroContainer,
} from '../../styles/layout/hero'

// JSX // _________________________________________________________________

/**
 * Hero component to display website's Hero
 * @name Hero
 * @returns {?JSX}
 */

 const Hero = () => {
  const sampleLocation = useLocation()
  const page = sampleLocation.pathname
  const arrayPath = page.split('/')
  const location = arrayPath[1]

  return (
    <header>
      <HeroContent>
        <LogoContainer>
          <ImgLogo src={logo} alt="logo" width={250}/>
        </LogoContainer>
        <TextHeroContainer>
          <PTitleStyle>KARDABEL</PTitleStyle>
          <Baseline>un regard, une écoute, des solutions</Baseline>
          <H1Style>
            Agence Print & Web <br />
            <SpanTitle>Design Graphique & Développement <br/>(Web / Front / Applications)</SpanTitle>
          </H1Style>
          <ButtonsContainer>
            <LinkServices to="/services#services">Services</LinkServices>
            <LinkContacts to="/contact#contact">Contact</LinkContacts>
          </ButtonsContainer>
        </TextHeroContainer>
      </HeroContent>
      {location === '' && <ImgCurvyStyle src={waveAgence} alt="background hero" width={1620} />}
      {location === 'services' && <ImgCurvyStyle src={waveServices} alt="background hero" width={1620}/>}
      {location === 'portfolios' && <ImgCurvyStyle src={wavePortfolio} alt="background hero" width={1620}/>}
      {location === 'contact' && <ImgCurvyStyle src={waveContact} alt="background hero" width={1620}/>}
      {location === 'mentions-legales' && <ImgCurvyStyle src={waveMentions} alt="background hero" width={1620}/>}

    </header>
  )
}

// EXPORT // ______________________________________________________________

export default Hero
