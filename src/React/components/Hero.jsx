import React from 'react'
import logo from '../../assets/kardabel_logo-simple.svg'
import wave from '../../assets/wave.svg'
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
  TextHeroContainer
} from '../../styles/components/hero'

const Hero = () => {
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
            <SpanTitle>Design Graphique & Développement Web</SpanTitle>
          </H1Style>
          <ButtonsContainer>
            <LinkServices to="/services">Services</LinkServices>
            <LinkContacts to="/contacts">Contacts</LinkContacts>
          </ButtonsContainer>
        </TextHeroContainer>
      </HeroContent>

      <ImgCurvyStyle src={wave} alt="background hero" />
    </header>
  )
}

export default Hero
