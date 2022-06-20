import styled from 'styled-components'

export const DivFrontPortfolioCard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  & > picture {
    height: 100%;
    width: 100%;
  }
`
export const ImgFrontCard = styled.img`
  height: 100%;
  transform: scale(1);
  transition: transform 600ms ease-in-out, filter 600ms ease-out;
  filter: brightness(60%);
  &:hover {
    transform: scale(1.05);
    filter: brightness(105%);
  }
`
export const PTitleFront = styled.p`
  position: absolute;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
  line-height: 3.5rem;
  font-size: 2.8rem;
  font-weight: 600;
  color: white;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
  word-break: break-word;
  z-index: 2;
`
