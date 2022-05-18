import styled from "styled-components"
import backgroundVectorValeurs from '../../../assets/shapes/vector-background-valeurs.svg'

export const SectionValeurs = styled.section`
  background: no-repeat center top url(${backgroundVectorValeurs});
  background-size: cover;
  margin-bottom: 5rem;
  padding-top: 5.5rem;
  @media (max-width: 420px) {
    margin-bottom: 2rem;
  }
`
export const DivValeursContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 2rem 7% 18rem 7%;
  @media (max-width: 1280px) {
    padding: 2rem 7% 15rem 7%;
  }
  @media (max-width: 950px) {
    padding: 2rem 7% 12rem 7%;
  }
  @media (max-width: 420px) {
    padding: 2rem 2rem 10rem 2rem;
  }
`
export const DivArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
`
