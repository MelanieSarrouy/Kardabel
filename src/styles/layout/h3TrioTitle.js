import styled from 'styled-components'
import colors from '../bases/colors'
import fonts from '../bases/fonts'

export const DivH3Title = styled.div`
  display: flex;
  align-items: baseline;
  padding: 0 0 3rem 0;
  @media (max-width: 1023px) {
    padding: 0 0 2rem 0;
  }
  @media (max-width: 450px) {
    padding: 0 0 1rem 0;
  }
`
export const SvgH3Trio = styled.img`
  width: 3.15rem;
  margin-right: 1rem;
  @media (max-width: 1280px) {
    width: 2.6rem;
    margin-right: .9rem;
  }
  @media (max-width: 1023px) {
    width: 2.4rem;
  }
  @media (max-width: 950px) {
    width: 2.3rem;
  }
  @media (max-width: 750px) {
    width: 2.1rem;
    margin-right: .8rem;
  }
  @media (max-width: 640px) {
    width: 1.9rem;
    margin-right: 0.7rem;
  }
  @media (max-width: 450px) {
    width: 1.5rem;
    margin-right: 0.6rem;
  }
  @media (max-width: 400px) {
    width: 1.4rem;
    margin-right: 0.5rem;
  }
  @media (max-width: 330px) {
    width: 1.3rem;
  }
`
export const H3TitleStyle = styled.h3`
  font-family: ${fonts.titles2};
  ${'' /* word-spacing: .6rem; */}
  font-size: 4.5rem;
  ${'' /* font-weight: 500; */}
  ${'' /* text-transform: uppercase; */}
  color: ${colors.primaryDark};
  @media (max-width: 1280px) {
    font-size: 3.8rem;
  }
  @media (max-width: 1023px) {
    font-size: 3.4rem;
  }
  @media (max-width: 950px) {
    font-size: 3.2rem;
  }
  @media (max-width: 750px) {
    font-size: 3rem;
  }
  @media (max-width: 640px) {
    font-size: 2.6rem;
  }
  @media (max-width: 450px) {
    font-size: 2.2rem;
  }
  @media (max-width: 400px) {
    font-size: 2rem;
  }
  @media (max-width: 330px) {
    font-size: 1.8rem;
  }
`
