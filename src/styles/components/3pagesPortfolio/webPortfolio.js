import styled from 'styled-components'

export const SectionPortfolio = styled.section`
  margin: 0 7% 5rem 7%;
  background-color: white;
  perspective: 200rem;
`
export const DivPortfolioCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1360px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`
