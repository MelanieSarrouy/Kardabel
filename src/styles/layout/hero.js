import styled from 'styled-components'
import colors from '../bases/colors'
import fonts from '../bases/fonts'
import { HashLink } from 'react-router-hash-link'


export const ImgCurvyStyle = styled.img`
  width: 100%;
  position: absolute;
  top: 10vh;
  display: block;
  line-height: 2.6rem;
  max-width: 1620px;
  margin: auto;
  @media (max-width: 1500px) {
    top: 20vh;
  }
  @media (max-width: 1360px) {
    top: 25vh;
  }
  @media (max-width: 1240px) {
    top: 20vh;
  }
  @media (max-width: 1100px) {
    top: 24vh;
  }

  @media (max-width: 950px) {
    top: 18vh;
  }
  @media (max-width: 820px) {
    top: 22vh;
  }

  @media (max-width: 710px) {
    top: 28vh;
  }

  @media (max-width: 640px) {
    top: 55vh;
  }
  @media (max-width: 460px) {
    top: 60vh;
  }
  @media (max-width: 380px) {
    top: 60vh;
  }
`

export const HeroContent = styled.div`
  padding: 10rem 7%;
  display: flex;
  justify-content: space-between;
  height: 450px;
  background-color: ${colors.primary};
  z-index: 800;
  max-width: 1620px;
  @media (max-width: 1240px) {
    height: 380px;
  }
  @media (max-width: 950px) {
    padding: 8rem 7%;
    height: 280px;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    padding: 5rem 7%;
    height: 600px;
  }
  @media (max-width: 380px) {
    height: 600px;
  }
`
export const LogoContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 2rem 8rem 0 0;
  z-index: 800;

  @media (max-width: 1580px) {
    padding: 3rem 8rem 0 0;
  }
  @media (max-width: 1380px) {
    padding: 4rem 8rem 0 0;
  }
  @media (max-width: 1180px) {
    padding: 4rem 6rem 0 0;
  }
  @media (max-width: 710px) {
    padding: 4rem 4rem 0 0;
  }
  @media (max-width: 640px) {
    padding: 4rem 0rem;
  }
  @media (max-width: 460px) {
    padding: 4rem 0rem 2rem 0rem;
  }
`
export const ImgLogo = styled.img`
  max-width: 250px;
  filter: drop-shadow(0.25rem 0.25rem 0.3rem rgba(0, 0, 0, 0.5));
  @media (max-width: 1240px) {
    max-width: 200px;
  }
  @media (max-width: 950px) {
    max-width: 180px;
  }
  @media (max-width: 710px) {
    max-width: 150px;
  }
`
export const TextHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;
  z-index: 800;

  @media (max-width: 640px) {
    width: 100%;
    align-items: center;
  }
`
export const PTitleStyle = styled.p`
  font-family: ${fonts.kardabel};
  font-size: 5.6rem;
  color: ${colors.secondary};
  font-weight: 700;
  translatex: -0.2rem;
  text-shadow: 0px 0.2rem 2px rgba(0, 0, 0, 0.4);
  @media (max-width: 1240px) {
    font-size: 4.5rem;
  }
  @media (max-width: 950px) {
    font-size: 3.5rem;
  }
  @media (max-width: 710px) {
    font-size: 3rem;
  }
  @media (max-width: 640px) {
    font-size: 3.5rem;
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
  @media (max-width: 950px) {
    font-size: 1.1rem;
  }
  @media (max-width: 710px) {
    font-size: 1rem;
  }
  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`
export const H1Style = styled.h1`
  font-family: ${fonts.titles};
  font-size: 2.2rem;
  color: ${colors.secondary};
  font-weight: 300;
  text-transform: uppercase;
  line-height: 2.2rem;
  padding: 3rem 0 3rem 0.2rem;
  @media (max-width: 1240px) {
    font-size: 1.5rem;
    padding: 2rem 0 2rem 0.2rem;
    line-height: 2.2rem;
  }
  @media (max-width: 950px) {
    font-size: 1.3rem;
    padding: 1rem 0 1rem 0.2rem;
    line-height: 1.8rem;
  }
  @media (max-width: 710px) {
    font-size: 1.1rem;
  }
  @media (max-width: 640px) {
    font-size: 1.3rem;
    text-align: center;
  }
`
export const SpanTitle = styled.span`
  text-transform: capitalize;
  color: ${colors.secondary};
  font-family: ${fonts.titles};
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.2rem;

  @media (max-width: 1240px) {
    font-size: 1.2rem;
  }
  @media (max-width: 950px) {
    font-size: 1rem;
  }
  @media (max-width: 710px) {
    font-size: 0.9rem;
  }
  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`
export const ButtonsContainer = styled.div`
  padding: 3rem 0 0 0;
  @media (max-width: 950px) {
    padding: 2rem 0 0 0;
  }
  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
    padding: 2rem 0 0 0;
  }
`
export const LinkServices = styled(HashLink)`
  background-color: ${colors.secondary};
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1.2rem;
  color: ${colors.primaryDark};
  border: 2px solid ${colors.secondary};
  margin-right: 1rem;
  text-decoration: none;
  transition: color 0.2s, background-color 0.5s;
  box-shadow: 0rem 0.2rem 2px rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
  @media (max-width: 950px) {
    font-size: 1rem;
  }
  @media (max-width: 710px) {
    padding: 0.4rem 1.8rem;
  }
  &:hover {
    background-color: ${colors.primaryDark};
    border: solid 2px ${colors.secondary};
    color: ${colors.secondary};
  }
`
export const LinkContacts = styled(HashLink)`
  background-color: ${colors.primary};
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  font-weight: 500;
  font-size: 1.2rem;
  color: ${colors.secondary};
  border: solid 2px ${colors.primary};
  text-decoration: none;
  box-shadow: 0px 0.2rem 2px rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
  transition: color 0.2s, border 0.2s, background-color 0.5s;

  @media (max-width: 950px) {
    font-size: 1rem;
  }
  @media (max-width: 710px) {
    padding: 0.4rem 1.8rem;
  }
  &:hover {
    border: solid 2px ${colors.secondary};
    background-color: ${colors.primaryDark};
  }
`
