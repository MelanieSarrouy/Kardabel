import styled from 'styled-components'
import colors from '../../bases/colors'
import imgReservia from '../../../assets/illustrations/reservia.jpg'

export const SectionPortfolio = styled.section`
  margin: 0 7% 5rem 7%;
  background-color: white;
`
export const ArticlePortfolioFlipCard = styled.article`
  cursor: pointer;
  width: calc(33% - 2rem);
  min-width: calc(33% - 2rem);
  height: 400px;
  min-height: 400px;
  perspective: 200rem;
  margin: 1rem;
  position: relative;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.15);
  transform-style: preserve-3d;
  border-radius: 12px;

  box-sizing: border-box;
  & > div {
    transform: rotateY(0deg);
    position: absolute;
    height: 100%;
    width: 100%;
    transition: transform 0.3s ease;
    transform-style: preserve-3d;
    border-radius: 12px;
    &:hover {
      transform: rotateY(180deg);
    }
  }
`
export const DivFrontPortfolioCard = styled.div`
  display: flex;
  border-radius: 12px;
  background: no-repeat center center url(${imgReservia});
  background-size: cover;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 2rem;
  overflow: hidden;
  backface-visibility: hidden;
  transform: rotateY(0deg);
  & > p {
    text-align: center;
    font-size: 2.8rem;
    font-weight: 600;
    color: white;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }
  &:before {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    opacity: 0.25;
    z-index: -1;
  }
`
export const DivBackPortfolioCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  background-color: white;
  padding: 2rem;
  backface-visibility: hidden;
  transform: rotateY(-180deg);
  & p {
    color: ${colors.primary};
    text-align: center;
  }
`
export const PTitlePortfolioVersoCard = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1rem;
`
export const PDescriptionPortfolioVersoCard = styled.p`
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 1rem 2rem 1rem;
  line-height: 1.5rem;
  border-bottom: solid 2px;
`
export const UlTechnosPortfolioVersoCard = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  line-height: 1.5rem;
  border-bottom: solid 2px;
  margin-bottom: 3rem;
  & > li {
    font-size: 1.2rem;
    font-weight: 600;
  }
`
