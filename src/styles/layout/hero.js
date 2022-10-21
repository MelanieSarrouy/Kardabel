import styled from 'styled-components'
import colors from '../bases/colors'
import fonts from '../bases/fonts'
import { HashLink } from 'react-router-hash-link'
import { buttonContact, buttonServices, heroTitle, kardabel, logo } from '../bases/keyframes'

export const ImgCurvyStyle = styled.img`
  width: 100%;
  position: absolute;
  top: 6rem;
  display: block;
  line-height: 2.6rem;
  max-width: 1620px;
  margin: auto;
  @media (max-width: 1520px) {
    top: 9rem;
  }
  @media (max-width: 1420px) {
    top: 11rem;
  }
  @media (max-width: 1320px) {
    top: 12em;
  }
  @media (max-width: 1280px) {
    top: 9rem;
  }
  @media (max-width: 1200px) {
    top: 12rem;
  }
  @media (max-width: 1120px) {
    top: 14rem;
  }
  @media (max-width: 1023px) {
    top: 16rem;
  }
  @media (max-width: 950px) {
    top: 8rem;
  }
  @media (max-width: 900px) {
    top: 10rem;
  }
  @media (max-width: 820px) {
    top: 12rem;
  }
  @media (max-width: 720px) {
    top: 13.5rem;
  }
  @media (max-width: 640px) {
    top: 30rem;
  }
  @media (max-width: 520px) {
    top: 32rem;
  }
  @media (max-width: 420px) {
    top: 30rem;
  }
  @media (max-width: 340px) {
    top: 32rem;
  }
`
export const HeroContent = styled.div`
  padding: 9rem 7%;
  display: flex;
  justify-content: space-between;
  height: 450px;
  background-color: ${colors.primary};
  z-index: 15;
  max-width: 1620px;
  @media (max-width: 950px) {
    padding: 7rem 7%;
    height: 280px;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    padding: 5rem 7%;
    height: 550px;
  }
  @media (max-width: 420px) {
    padding: 4rem 2rem;
  }
`
export const LogoContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 2rem 8rem 0 0;
  z-index: 15;

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
    padding: 3rem 4rem 0 0;
  }
  @media (max-width: 640px) {
    padding: 2rem 0rem 2rem 0;
  }
  @media (max-width: 480px) {
    padding: 2.5rem 0rem 2rem 0rem;
  }
`
export const ImgLogo = styled.img`
  width: 250px;
  filter: drop-shadow(0.25rem 0.25rem 0.3rem rgba(0, 0, 0, 0.5));
  animation: 2400ms cubic-bezier(.4,.33,.14,.97) 1800ms backwards ${logo};
  @media (max-width: 1280px) {
    width: 200px;
  }
  @media (max-width: 950px) {
    width: 180px;
  }
  @media (max-width: 710px) {
    width: 150px;
  }
  @media (max-width: 640px) {
    width: 140px;
  }

  @media (max-width: 420px) {
    width: 120px;
  }
`
export const TextHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;
  z-index: 15;
  @media (max-width: 640px) {
    width: 100%;
    align-items: center;
  }
`

export const PTitleStyle = styled.p`
  font-family: ${fonts.kardabel};
  font-size: 5.6rem;
  color: ${colors.secondary};
  font-weight: 600;
  text-shadow: 0px 0.2rem 2px rgba(0, 0, 0, 0.4);
  animation: 1200ms cubic-bezier(0.27, 0.29, 0.14, 0.98) none ${kardabel};
  @media (max-width: 1280px) {
    font-size: 4.5rem;
  }
  @media (max-width: 950px) {
    font-size: 3.2rem;
  }
  @media (max-width: 710px) {
    font-size: 3rem;
  }
  @media (max-width: 640px) {
    font-size: 4em;
    text-align: center;
  }
  @media (max-width: 480px) {
    font-size: 3rem;
  }
`
export const Baseline = styled.p`
  font-size: 1.5rem;
  ${'' /* font-style: italic; */}
  color: ${colors.background};
  font-weight: 300;
  padding: .8rem 0 .8rem 0.6rem;
  animation: 1200ms cubic-bezier(0.27, 0.29, 0.14, 0.98) 100ms both ${kardabel};
  font-family: ${fonts.signature};
  @media (max-width: 1280px) {
    font-size: 1.2rem;
  }
  @media (max-width: 950px) {
    font-size: 1rem;
  }
  @media (max-width: 640px) {
    font-size: 1.2rem;
    text-align: center;
    padding: .8rem 0;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`
export const H1Style = styled.h1`
  font-size: 2.2rem;
  color: ${colors.secondary};
  font-weight: 400;
  text-transform: uppercase;
  line-height: 2.2rem;
  padding: 2.5rem 0 2rem 0.4rem;
  animation: 1s cubic-bezier(0.27, 0.29, 0.14, 0.98) 800ms both ${heroTitle};
  font-family: ${fonts.titles2};
  text-shadow: 0px 0.2rem 2px rgba(0, 0, 0, 0.4);
  @media (max-width: 1280px) {
    font-size: 1.5rem;
    padding: 2rem 0 1rem 0.4rem;
    line-height: 2.2rem;
  }
  @media (max-width: 950px) {
    font-size: 1.3rem;
    padding: 1rem 0 0.5rem 0.4rem;
    line-height: 1.8rem;
  }
  @media (max-width: 710px) {
    font-size: 1.1rem;
  }
  @media (max-width: 640px) {
    font-size: 1.5rem;
    text-align: center;
    padding: 2rem 0 1rem 0;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 1rem 0 0.5rem 0;
  }
`
export const SpanTitle = styled.span`
  display: block;
  text-transform: capitalize;
  color: ${colors.background};
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2.2rem;
  padding: 1.2rem 0 0 0;
  text-shadow: 0px 0.2rem 2px rgba(0, 0, 0, 0);
  font-family: ${fonts.titles};
  @media (max-width: 1280px) {
    font-size: 1.2rem;
    padding: 1rem 0 0 0;
    line-height: 2rem;
  }
  @media (max-width: 950px) {
    font-size: 1rem;
    line-height: 1.7rem;
  }
  @media (max-width: 640px) {
    font-size: 1.2rem;
    line-height: 2rem;
    padding: 1rem 0 0 0;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.6rem;
    padding: 0.5rem 0 0 0;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  padding: 2.6rem 0 0 0.4rem;
  & > a {
    display: block;
    width: 10rem;
    text-align: center;
    @media (max-width: 950px) {
      width: 8rem;
    }
    @media (max-width: 750px) {
      max-width: 7.5rem;
    }
    @media (max-width: 640px) {
      min-width: 10rem;
    }
  }
  @media (max-width: 950px) {
    padding: 1.5rem 0 0 0;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    gap: 0.8rem;
    padding: 0.8rem 0 0 0;
  }
`
export const LinkServices = styled(HashLink)`
  background-color: ${colors.secondary};
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  font-weight: 800;
  font-size: 1.2rem;
  color: ${colors.primaryDark};
  border: 2px solid ${colors.secondary};
  margin-right: 1rem;
  text-decoration: none;
  transition: color 200ms, background-color 600ms cubic-bezier(0.2, 0.63, 0.55, 0.97),
    border 600ms cubic-bezier(0.2, 0.63, 0.55, 0.97);
  box-shadow: 0rem 0.2rem 2px rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
  animation: 800ms cubic-bezier(.2,.32,.04,1.02) 1800ms backwards ${buttonServices};
  @media (max-width: 950px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: solid 1px ${colors.secondary};
  }
  @media (max-width: 640px) {
    padding: 0.5rem 2rem;
    margin: 0 0.5rem;
  }
  @media (max-width: 350px) {
    padding: 0.5rem 1rem;
  }
  &:hover {
    background-color: ${colors.primaryDark};
    color: ${colors.secondary};
    font-weight: 600;
    letter-spacing: 0.2px;
    border: solid 2px ${colors.primaryDark};
    @media (max-width: 950px) {
      border: solid 1px ${colors.primaryDark};
    }
  }
`
export const LinkContacts = styled(HashLink)`
  background-color: ${colors.primary};
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  letter-spacing: 0.1px;
  font-size: 1.2rem;
  color: ${colors.secondary};
  border: solid 2px ${colors.secondary};
  text-decoration: none;
  text-transform: uppercase;
  transition: border 600ms, background-color 600ms cubic-bezier(0.2, 0.63, 0.55, 0.97);
  animation: 600ms cubic-bezier(0.27, 0.29, 0.14, 0.98) 1400ms backwards ${buttonContact};
  @media (max-width: 950px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: solid 1px ${colors.secondary};
  }
  @media (max-width: 640px) {
    padding: 0.5rem 2rem;
    margin: 0 0.5rem;
  }
  @media (max-width: 350px) {
    padding: 0.5rem 1rem;
  }
  &:hover {
    background-color: ${colors.primaryDark};
    border: solid 2px ${colors.primaryDark};

    @media (max-width: 950px) {
      border: solid 1px ${colors.primaryDark};
    }
  }
`
