import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo/kardabel_logo-simple.svg'
import waveAgence from '../../assets/shapes/waveAgence.svg'
import waveServices from '../../assets/shapes/waveServices.svg'
import wavePortfolio from '../../assets/shapes/wavePortfolio.svg'
import waveContact from '../../assets/shapes/waveContact.svg'
import colors from '../../styles/bases/colors'
import fonts from '../../styles/bases/fonts'
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

export const PTitlePage = styled.p`
  color: ${colors.primaryDark}4D;
  font-size: 18rem;
  padding: 1rem 0;
  text-transform: uppercase;
  font-weight: 700;
  font-family: ${fonts.titles};
  position: absolute;
  top: 110px;
  text-align: justify;
  width: 100%;
  left: 6%;
`

const Hero = () => {
  const location = useLocation()
  const page = location.pathname
  const services = page.indexOf('services') > -1
  const portfolio = page.indexOf('portfolio') > -1
  const contact = page.indexOf('contact') > -1
  const agence = !services && !portfolio && !contact

  return (
    <header>
      <HeroContent>
        <LogoContainer>
          <ImgLogo src={logo} alt="logo" />
        </LogoContainer>
        <TextHeroContainer>
          <PTitleStyle>KARDABEL</PTitleStyle>
          <Baseline>Un regard, une écoute, des solutions</Baseline>
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
      {agence && <ImgCurvyStyle src={waveAgence} alt="background hero" />}
      {services && <ImgCurvyStyle src={waveServices} alt="background hero" />}
      {portfolio && <ImgCurvyStyle src={wavePortfolio} alt="background hero" />}
      {contact && <ImgCurvyStyle src={waveContact} alt="background hero" />}
    </header>
  )
}

export default Hero
