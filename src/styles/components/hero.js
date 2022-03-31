import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../bases/colors'
import fonts from '../bases/fonts'

export const WaveStyle = styled.div`
  height: 35vh;
  width: 100%;
  background-color: ${colors.primary};
  padding: 0 7%;
  @media (max-width: 650px) {
    height: 40vh;
  }
  @media (max-width: 450px) {
    height: 50vh;
  }
`
export const ImgCurvyStyle = styled.img`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 25%;
  display: block;
  line-height: 2.6rem;
  @media (max-width: 1240px) {
    bottom: 35%;
  }
`
export const HeroContent = styled.div`
  position: relative;
  top: 30%;
  padding: 3rem 0;
  max-width: 1440px;
  margin: auto;
  z-index: 800;
  @media (max-width: 650px) {
    top: 35%;
    flex-direction: column;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  position: absolute;
`
export const ImgLogo = styled.img`
  max-width: 250px;
  padding-top: 2rem;
  filter: drop-shadow(0.25rem 0.25rem 0.3rem rgba(0, 0, 0, 0.5));
  @media (max-width: 1240px) {
    max-width: 200px;
  }
`
export const TextHeroContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`
export const PTitleStyle = styled.p`
  font-family: ${fonts.kardabel};
  font-size: 5.6rem;
  color: ${colors.secondary};
  font-weight: 700;
  @media (max-width: 1240px) {
    font-size: 4.5rem;
  }
`
export const Baseline = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  color: ${colors.background};
  font-weight: 300;
  padding: 1rem 0 1rem 0.2rem;
  @media (max-width: 1240px) {
    font-size: 1.2rem;
  }
`
export const H1Style = styled.h1`
  font-family: ${fonts.titles};
  font-size: 1.7rem;
  color: ${colors.secondary};
  text-transform: uppercase;
  line-height: 2.6rem;
  padding: 3rem 0 3rem 0.2rem;
  @media (max-width: 1240px) {
    font-size: 1.5rem;
    padding: 2rem 0 2rem 0.2rem;
    line-height: 2.2rem;
  }
`
export const SpanTitle = styled.span`
  text-transform: capitalize;
  color: ${colors.secondary};
  font-family: ${fonts.titles};
  font-size: 1.5rem;
  @media (max-width: 1240px) {
    font-size: 1.2rem;
  }
`
export const ButtonsContainer = styled.div`
  padding: 3rem 0 0 0;
`
export const LinkServices = styled(Link)`
  background-color: ${colors.secondary};
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1.2rem;
  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  margin-right: 1rem;
  text-decoration: none;
  transition: color 0.2s, background-color 0.5s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: ${colors.primary};
    border: solid 2px ${colors.secondary};
    color: ${colors.secondary};
  }
`
export const LinkContacts = styled(Link)`
  background-color: ${colors.primary};
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  font-weight: 500;
  font-size: 1.2rem;
  color: ${colors.secondary};
  border: solid 2px ${colors.primary};
  margin-right: 1rem;
  text-decoration: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    border: solid 2px ${colors.secondary};
  }
`
