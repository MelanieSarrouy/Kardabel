import styled from 'styled-components'

export const DivFrontPortfolioCard = styled.div`
  display: flex;
  border-radius: 12px;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform: rotateY(${(props) => (props.flipped ? '180deg' : '0deg')});
  transition: background 400ms ease-in-out; 
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
  margin: 0 2rem;
  line-height: 3.5rem;
  font-size: 2.8rem;
  font-weight: 600;
  color: white;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
  word-break: break-word;
  z-index: 2;
`
