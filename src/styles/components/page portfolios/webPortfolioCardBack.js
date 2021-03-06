import styled from 'styled-components'
import colors from '../../bases/colors'

export const DivBackPortfolioCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-color: white;
  padding: 2rem;
  @media (max-width: 450px) {
    padding: 1.2rem;
  }
  & p {
    text-align: center;
  }
`
export const PTitlePortfolioVersoCard = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  padding: 1rem;
  color: ${colors.primaryDark};
  @media (max-width: 450px) {
    padding: 0 0 0.5rem 0;
  }
  @media (max-width: 362px) {
    padding: 0.5rem 0;
  }
`
export const PDescriptionPortfolioVersoCard = styled.p`
  width: 100%;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.8rem;
  line-height: 1.5rem;
  border-bottom: solid 1px;
  @media (max-width: 450px) {
    padding: 0.8rem 0;
  }
`
export const PWorkPortfolioVersoCard = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  padding: 0.8rem 0 0 0;
`
export const UlTechnosPortfolioVersoCard = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: start;
  width: 100%;
  padding: 0.8rem 0rem;
  & > li {
    font-size: 1.2rem;
    text-align: center;
    padding: 0.5rem;
    text-transform: uppercase;
    margin: 0 0.2rem;
    @media (max-width: 420px) {
      margin: 0;
    }
    @media (max-width: 340px) {
      padding: 0.2rem;
    }
    & > p {
      padding: 0;
      text-align: center;
      font-size: 1rem;
      @media (max-width: 420px) {
        padding: 0.5rem 0 0 0;
        font-size: .9rem;
      }
    }
  }
`
export const UlButtonsContainers = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  padding: 1.2rem 0 0 0;
  border-top: solid 1px;
  margin-bottom: 0.2rem;
  & > li > a {
    display: block;
    text-align: center;
    padding: 0.6rem 1rem;
    border-radius: 2rem;
    font-size: 1.2rem;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0.2rem;
    min-width: 5.6rem;
    @media (max-width: 420px) {
      font-size: 1rem;
      padding: 0.6rem;
      min-width: 5rem;
    }
    @media (max-width: 362px) {
      font-size: 0.9rem;
      padding: 0.5rem;
      min-width: 4.5rem;
    }
    @media (max-width: 340px) {
      font-size: 0.9rem;
      padding: 0.5rem;
      min-width: 4rem;
    }
  }
`
export const ImgIconTechno = styled.img`
  width: 3.2rem;
  @media (max-width: 420px) {
    width: 2.5rem;
  }
`
