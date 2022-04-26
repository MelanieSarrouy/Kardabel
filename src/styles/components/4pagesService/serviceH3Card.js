import styled from 'styled-components'
import waveCard from '../../../assets/shapes/waveCard.svg'
import colors from '../../bases/colors'

export const DivServiceBlock = styled.div`
  padding: 8rem 7% 5rem 7%;
`
export const DivProfileCard = styled.div`
  width: 100%;
  border-radius: 1.5rem;
  padding: 2rem 4rem 3rem 4rem;
  background: no-repeat url(${waveCard}) ${(props) => props.color};
  background-size: 70%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
`
export const ImgSVGTitle = styled.img`
  width: 80%;
  padding-bottom: 3rem;
`
export const UlCardStyle = styled.ul`
  position: absolute;
  bottom: 30%;
  left: 35%;
`
export const LiCardstyle = styled.li`
  padding: 1rem;
  & > a {
    font-size: 2rem;
    font-weight: 600;
    font-style: italic;
    display: flex;
    align-items: center;
    color: ${colors.primary};
    & > img {
      width: 2rem;
      margin-right: 1rem;
    }
  }
`
export const DivImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
export const ImgSVGLogoDore = styled.img`
  max-width: 17.5rem;
  filter: drop-shadow(0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 0.5));
`
export const ImgSVGIllustrationCard = styled.img`
  max-width: 30rem;
`
