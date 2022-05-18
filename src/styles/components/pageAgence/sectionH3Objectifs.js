import styled from 'styled-components'
import backgroundVectorObectifs from '../../../assets/shapes/vector-background-objectifs.svg'

export const SectionObjectifs = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 0 5rem 0;
  padding-top: 5.5rem;
  @media (max-width: 1200px) {
    margin: 0 0 3rem 0;
  }
  @media (max-width: 950px) {
   flex-direction: column;
   align-items: start;
   margin: 0rem;
  }
  @media (max-width: 750px) {
   margin: 0 0 2rem 0;
  }
  @media (max-width: 640px) {
   margin: 0rem;
  }
`
export const DivObectifsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background: left center/ contain no-repeat url(${backgroundVectorObectifs});
  width: 60%;
  padding: 4rem 7%;
  @media (max-width: 1320px) {
    width: 70%;
  }
  @media (max-width: 1200px) {
    padding: 2rem 7%;
  }
  @media (max-width: 950px) {
    width: 100%;
  }
  @media (max-width: 640px) {
    padding: 2rem 7% 3rem 7%;
    background-size: cover;
  }
  @media (max-width: 420px) {
    padding: 3rem 2rem;
  }
`
export const PTextObjectifs = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  padding-bottom: 3rem;
  @media (max-width: 450px) {
    padding: 2rem 0;
  }
`
export const DivImgObjContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  @media (max-width: 1320px) {
    width: 30%;
  }
  @media (max-width: 950px) {
    width: 100%;
    justify-content: flex-end;
    align-items: end;
    margin-top: -3rem;
  }
  @media (max-width: 750px) {
    display: none;
  }
`
export const ImgObjContainer = styled.img`
  @media (max-width: 950px) {
    width: 50%;
  }
`