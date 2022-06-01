import styled from 'styled-components'

export const SectionPortfolio = styled.section`
  padding: 3rem 7% 2rem 7%;
  @media (max-width: 950px) {
    padding: 2.5rem 7% 2rem 7%;
  }
  @media (max-width: 640px) {
    padding: 2.5rem 2rem 0rem 2rem;
  }
  @media (max-width: 420px) {
    padding: 3rem 2rem 0rem 2rem;
  }
`
export const DivPortfolioCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  grid-gap: 3rem;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1023px) {
    grid-gap: 2rem;
  }
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`
