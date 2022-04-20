import styled from "styled-components"
import backgroundVectorValeurs from '../../../assets/shapes/vector-background-valeurs.svg'

export const SectionValeurs = styled.section`
  background: url(${backgroundVectorValeurs});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const DivValeursContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 10rem 7% 20rem 7%;
`
export const DivArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
`
