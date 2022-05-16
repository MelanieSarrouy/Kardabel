import backgroundVectorServices from '../../../assets/shapes/vector-2.svg'
import styled from 'styled-components'
import fonts from '../../bases/fonts'
import { HashLink } from 'react-router-hash-link'


export const SectionServices = styled.section`
  background: no-repeat center center url(${backgroundVectorServices});
  background-size: cover;
`
export const DivServices = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 7% 0rem 7%;
  @media (max-width: 950px) {
    padding: 1rem 7% 0rem 7%;
  }
`

export const UlServicesContent = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7%;
  padding: 2rem 0;
  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`
export const LinkCardService = styled(HashLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 6rem 4rem 6rem;
  background-color: rgba(255, 255, 255, 0);
  @media (max-width: 1440px) {
    padding: 1rem 4rem 4rem 4rem;
  }
  @media (max-width: 1240px) {
    padding: 1rem 2rem 4rem 2rem;
  }
  @media (max-width: 1024px) {
    padding: 1rem 0rem 2rem 0rem;
  }

`

export const ImgSVGService = styled.img`
  max-width: 25rem;
`
export const H4ServiceStyle = styled.h4`
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 2rem;
  font-family: ${fonts.titles};
  @media (max-width: 1024px) {
    padding: 1rem 0rem 2rem 0rem;
  }
  @media (max-width: 950px) {
    padding: 1rem;
  }
`
export const PtextService = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  line-height: 2rem;
  padding: 1rem 2rem;
  @media (max-width: 1240px) {
    padding: 2rem;
  }
  @media (max-width: 1024px) {
    padding: 1rem 0rem 2rem 0rem;
  }
  @media (max-width: 950px) {
    padding: 1rem 3rem;
  }
`
