import styled from 'styled-components'
import colors from '../../bases/colors'
import fonts from '../../bases/fonts'

export const DivImgWait = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem 2rem 2rem;
  @media (max-width: 420px) {
    padding: 4rem 0rem 2rem 0rem;
  }
  & > img {
    width: 50%;
    @media (max-width: 640px) {
      width: 75%;
    }
    @media (max-width: 420px) {
      width: 100%;
    }
  }
`
export const PTextProvisoire = styled.p`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  font-style: italic;
  @media (max-width: 1200px) {
    font-size: 2rem;
  }
  @media (max-width: 1200px) {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }
  @media (max-width: 340px) {
    font-size: 1.2rem;
    line-height: 1.9rem;
  }
`
export const ArcticlePortfolioGraphicCard = styled.article`
  overflow: hidden;
  border-radius: 12px;
  height: 22rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.25);
`
export const ImgPortfolioGraphicCard = styled.img`
  height: 72%;
  scale: 1;
  filter: brightness(80%);
  transition: filter 400ms ease-in-out;
  &:hover {
    filter: brightness(100%);
  }
`
export const DivTitlePortfolioGraphicCard = styled.div`
  width: 100%;
  border-radius: 0 0 12px 12px;
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  height: 28%;
`
export const PTitlePortfolioGraphicCard = styled.p`
  font-family: ${fonts.titles};
  word-spacing: 2px;
  font-weight: 500;
  font-size: 1.4rem;
  color: ${colors.primaryDark};
  padding: 0 0 1.2rem 0;
`
export const UlTagsPortfolioGraphicCard = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: baseline;
  & > li {
    font-size: 1rem;
    color: ${colors.primaryDark};
    text-align: center;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.2rem 0.5rem;
    background-color: ${colors.background};
    border-radius: 1rem;
    border: solid 1px ${colors.primary};
  }
`
