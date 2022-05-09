import backgroundVectorServices from '../../../assets/shapes/vector-2.svg'
import styled from 'styled-components'
import fonts from '../../bases/fonts'
import { Link } from 'react-router-dom'


export const SectionServices = styled.section`
  background: no-repeat center center url(${backgroundVectorServices});
  background-size: cover;
  ${'' /* margin-bottom: 5rem; */}
`
export const DivServices = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 7% 2rem 7%;
`

export const UlServicesContent = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  column-row: 2rem;
  padding: 2rem 0;
`
export const LinkCardService = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${'' /* width: 50%; */}
  padding: 1rem 6rem 4rem 6rem;
  background-color: rgba(255, 255, 255, 0);
`

export const ImgSVGService = styled.img`
  max-width: 25rem;
`
export const H3ServiceStyle = styled.h3`
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 2rem;
  font-family: ${fonts.titles};
`
export const PtextService = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  line-height: 2rem;
  padding: 1rem 2rem;
`
