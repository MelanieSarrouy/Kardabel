import styled from "styled-components"
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
export const DivPortfolioGraphicCard = styled.div`
  overflow: hidden;
  border-radius: 1.5rem;
  max-height: 22rem;
  position: relative;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.25);

`
export const ImgPortfolioGraphicCard = styled.img`
width: 50rem;
transform: translate(-25%, -10%);

`
export const DivTitlePortfolioGraphicCard = styled.div`
  position: absolute;
  bottom: -1px;
  width: 100%;
  border-radius: 0 0 1.5rem 1.5rem;
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.25);
  height: 33%;
`
export const PTitlePortfolioGraphicCard = styled.p`
  font-family: ${fonts.titles};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: center;
  padding: 0 0 1rem 0;
`
export const UlTagsPortfolioGraphicCard = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;
  gap: .5rem;
  & > li {
    padding: .3rem .5rem;
    font-size: 1.1rem;
    background-color: ${colors.background};
    color: ${colors.primary};
    border-radius: 1.5rem;
    width: 6.5rem;
    text-align: center;
    border: solid 2px ${colors.primary};
  }
`

