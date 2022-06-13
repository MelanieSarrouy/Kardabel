import backgroundVectorServices from '../../../assets/shapes/vector-background-services.svg'
import styled from 'styled-components'
import fonts from '../../bases/fonts'
import { HashLink } from 'react-router-hash-link'

export const SectionServices = styled.section`
  background: no-repeat center center url(${backgroundVectorServices});
  background-size: cover;
  padding-top: 5rem;
  @media (max-width: 950px) {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(250, 242, 228, 1) 8%,
      rgba(250, 242, 228, 1) 86%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`
export const DivServices = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 7% 4rem 7%;
  @media (max-width: 950px) {
    padding: 1rem 7%;
  }
  @media (max-width: 420px) {
    padding: 1rem 2rem;
  }
`
export const UlServicesContent = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  padding: 2rem 0 3rem 0;
  @media (max-width: 1440px) {
    gap: 6rem;
  }
  @media (max-width: 1240px) {
    gap: 4rem;
  }
  @media (max-width: 1240px) {
    gap: 3rem;
  }

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 640px) {
    padding: 2rem 0 0rem 0;
  }
`
export const LinkCardService = styled(HashLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 4rem 2rem 4rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  height: 38rem;
  @media (max-width: 1240px) {
    padding: 1rem 2rem 2rem 2rem;
  }
  @media (max-width: 1024px) {
    height: 34rem;
  }

  @media (max-width: 950px) {
    padding: 1rem;
    height: auto;
  }
`
export const ImgSVGService = styled.img`
  max-width: 25rem;
  @media (max-width: 1024px) {
    width: 100%;
  }
`
export const H4ServiceStyle = styled.h4`
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 2rem;
  font-family: ${fonts.titles2};
  @media (max-width: 1024px) {
    font-size: 2.5rem;
    padding: 1rem 0rem;
  }
  @media (max-width: 950px) {
    padding: 1rem;
  }
  @media (max-width: 640px) {
    font-size: 2.2rem;
  }
  @media (max-width: 450px) {
    font-size: 2rem;
  }
`
export const PtextService = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  line-height: 2rem;
  padding: 1rem 2rem;
  @media (max-width: 1240px) {
    padding: 1rem;
  }
  @media (max-width: 1024px) {
    padding: 1rem 0rem;
  }
  @media (max-width: 950px) {
    padding: 1rem 3rem;
  }
  @media (max-width: 750px) {
    padding: 1rem 1rem;
    font-weight: 500;
  }
  @media (max-width: 420px) {
    padding: 0.6rem;
  }
`
