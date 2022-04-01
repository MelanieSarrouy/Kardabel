import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../bases/colors'
import fonts from '../bases/fonts'

export const SectionIntro = styled.section`
  padding: 30rem 7% 5rem 7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1440px;
  margin: auto;
  @media (max-width: 1800px) {
    padding-top: 25rem;
  }
  @media (max-width: 1023px) {
    padding-top: 20rem;
  }
  @media (max-width: 640px) {
    padding-top: 15rem;
  }
  @media (max-width: 480px) {
    padding-top: 12rem;
  }
  @media (max-width: 400px) {
    padding-top: 10rem;
  }
  @media (max-width: 330px) {
    padding-top: 12rem;
  }
`
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`
export const SVGTrio = styled.img`
  width: 5.5rem;
  margin: 0 2rem 1rem 1rem;
  filter: drop-shadow(0.25rem 0.25rem 0.3rem rgba(0, 0, 0, 0.5));
  @media (max-width: 1023px) {
    width: 4rem;
    margin-right: 1.6rem;
  }
  @media (max-width: 640px) {
    width: 3.1rem;
    margin-right: 1.2rem;
  }
  @media (max-width: 480px) {
    width: 2.5rem;
    margin-right: 1rem;
  }
  @media (max-width: 400px) {
    width: 2.2rem;
  }
`
export const H2Style = styled.h2`
  font-family: ${fonts.titles};
  color: ${colors.secondary};
  font-size: 7.5rem;
  text-transform: uppercase;
  font-weight: 600;
  padding-bottom: 5rem;
  text-shadow: 0.25rem 0.25rem 0.3rem rgba(0, 0, 0, 0.5);
  @media (max-width: 1023px) {
    font-size: 5.5rem;
  }
  @media (max-width: 640px) {
    font-size: 4.5rem;
  }
  @media (max-width: 480px) {
    font-size: 3.5rem;
  }
  @media (max-width: 400px) {
    font-size: 3rem;
  }
  @media (max-width: 330px) {
    font-size: 2.5rem;
  }
`
export const TextIntro = styled.p`
  font-weight: 500;
  font-size: 2rem;
  text-align: center;
  line-height: 3rem;
  padding: 2rem 5%;
  @media (max-width: 1023px) {
    padding: 2rem 0;
  }
`
export const DivButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 5rem 0;
`
export const LinkButtonContactUs = styled(Link)`
  background-color: ${colors.primary};
  padding: 1rem 3.5rem;
  border-radius: 3rem;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${colors.background};
  border: 4px solid ${colors.primary};
  margin-right: 1rem;
  text-decoration: none;
  transition: color 0.2s, background-color 0.5s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  &:hover {
    background-color: ${colors.background};
    border: 4px solid ${colors.primary};
    color: ${colors.primary};
    font-weight: 700;
  }
`
