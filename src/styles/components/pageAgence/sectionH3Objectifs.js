import styled from 'styled-components'
import backgroundVectorObectifs from '../../../assets/shapes/vector-background-objectifs.svg'

export const SectionObjectifs = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 0 5rem 0;
  padding-top: 5rem;
  background: left center/ contain no-repeat url(${backgroundVectorObectifs});
  position: relative;
  @media (max-width: 1200px) {
    margin: 0 0 3rem 0;
  }
  @media (max-width: 950px) {
    background: left top/ contain no-repeat url(${backgroundVectorObectifs});
    background-size: 70%;
  }
  @media (max-width: 820px) {
    background: left center/ contain no-repeat url(${backgroundVectorObectifs});
  }

  @media (max-width: 750px) {
    margin: 0 0 2rem 0;
  }
  @media (max-width: 600px) {
    background: left center/ cover no-repeat url(${backgroundVectorObectifs});
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
  width: 60%;
  padding: 1rem 7%;
  @media (max-width: 1320px) {
    width: 70%;
  }
  @media (max-width: 1200px) {
    padding: 1rem 7%;
  }
  @media (max-width: 1080px) {
    width: 80%;
  }
  @media (max-width: 820px) {
    width: 100%;
  }

  @media (max-width: 640px) {
    padding: 1rem 7% 3rem 7%;
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
  @media (max-width: 950px) {
    position: absolute;
    right: 0;
    bottom: 6.5rem;
    width: 36%;
  }
  @media (max-width: 820px) {
    display: none;
  }
`
