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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.25);
  cursor: pointer;
`
export const DivImgContainer = styled.div`
  position: relative;
  transform: scale(1.02);
  transform-origin: bottom center;
  transition: transform 400ms ease-in-out;
  &::after {
    content: '';
    width: 100%;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 65%,
      rgba(0, 0, 0, 0.75) 90%,
      rgba(0, 0, 0, 0.9) 100%
    );
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 1;
    transform-origin: bottom center;
    transform: scaleY(1);
    transition: opacity 400ms ease-in;
  }
  &:hover {
    transform: scale(1);
    &::after {
      opacity: 0.6;
    }
  }
`
export const ImgPortfolioGraphicCard = styled.img`
  object-fit: cover;
`
export const DivTitlePortfolioGraphicCard = styled.div`
  width: 100%;
  border-radius: 0 0 12px 12px;
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 8.6rem;
  @media (max-width: 420px) {
    height: 7.6rem;
  }
  @media (max-width: 390px) {
    height: 8.7rem;
    padding: 0.8rem;
  }
`
export const PTitlePortfolioGraphicCard = styled.p`
  font-family: ${fonts.titles};
  word-spacing: 2px;
  font-weight: 500;
  font-size: 1.4rem;
  color: ${colors.primaryDark};
  padding: 0 0 1.2rem 0;
  @media (max-width: 420px) {
    padding: 0 0 0.8rem 0;
  }
  @media (max-width: 390px) {
    font-size: 1.1rem;
  }
`
export const UlTagsPortfolioGraphicCard = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
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
    @media (max-width: 420px) {
      font-size: 0.9rem;
      margin-right: 0.3rem;
      margin-bottom: 0.2rem;
    }
    @media (max-width: 390px) {
      font-size: 1rem;
    }
    &:hover {
      color: ${colors.background};
      background-color: ${colors.primary};
      border: solid 1px ${colors.primary};
    }
  }
`
