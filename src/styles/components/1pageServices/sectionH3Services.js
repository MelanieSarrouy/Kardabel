import backgroundVectorServices from '../../../assets/shapes/vector-2.svg'
import styled from 'styled-components'
import fonts from '../../bases/fonts'


export const Section4Services = styled.section`
  background: url(${backgroundVectorServices});
  background-size: cover;
`
export const DivServicesContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem 7% 10rem 7%;
`
export const ButtonCardService = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
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
