import styled from "styled-components"
import backgroundVectorValeurs from '../../../assets/shapes/vector-background-valeurs.svg'

export const SectionValeurs = styled.section`
  background: no-repeat center top url(${backgroundVectorValeurs});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`
export const DivValeursContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 4rem 7% 20rem 7%;
`
export const DivArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
`
