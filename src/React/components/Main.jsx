import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/kardabel_logo-simple.svg'
import wave from '../../assets/wave.svg'
import colors from '../../styles/bases/colors'

const MainStyle = styled.main`
  ${'' /* padding: 0rem; */}
`
const WaveStyle = styled.div`
  height: 55vh;
  width: 100%;
  background-color: ${colors.primary};
  @media (max-width: 650px) {
    height: 65vh;
  }
  @media (max-width: 450px) {
    height: 70vh;
  }
`
const ImgCurvyStyle = styled.img`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 20%;
  display: block;
`
const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 40%;
  padding: 0 7%;
  width: 100%;
  z-index: 800;
  @media (max-width: 650px) {
    top: 35%;
    flex-direction: column;
  }
`
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40%;
`
const ImgLogo = styled.img`
  width: 250px;
  margin: auto;
`
const TextHeroContainer = styled.div`
  position: relative;
  padding: 2.5rem 0 0 10vw;

`
const PTitleStyle = styled.p`
  font-family: 'Reem Kufi', sans-serif;
  font-size: 5.6rem;
  color: ${colors.secondary};
  font-weight: 700;
`
const Baseline = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  color: ${colors.background};
  font-weight: 300;
  padding: 1rem 0 1rem 0.2rem;
`
const H1Style = styled.h1`
  font-family: 'Outfit', sans-serif;
  font-size: 1.5rem;
  color: ${colors.secondary};
  text-transform: uppercase;
  line-height: 1.8rem;
  padding: 1rem 0 1rem 0.2rem;
`

const Main = (props) => {
  return (
    <MainStyle>
      <header>
        <WaveStyle>
          <HeroContent>
            <LogoContainer>
              <ImgLogo src={logo} alt="logo" />
            </LogoContainer>
            <TextHeroContainer>
              <PTitleStyle>KARDABEL</PTitleStyle>
              <Baseline>Un regard, une écoute, des solutions</Baseline>
              <H1Style>
                Agence Print & Web <br />
                Design Graphique & Développement Web
              </H1Style>
            </TextHeroContainer>
          </HeroContent>

          <ImgCurvyStyle src={wave} alt="background hero" />
        </WaveStyle>
        <h1>KARDABEL</h1>
      </header>
      <div>{props.children}</div>
    </MainStyle>
  )
}

export default Main
