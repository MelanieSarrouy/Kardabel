import styled from 'styled-components'
import colors from '../../bases/colors'
import fonts from '../../bases/fonts'
import { fadeIn, roadRunnerIn } from '../../bases/keyframes'

export const ModalDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  z-index: 20;
  overflow: auto;
  background: linear-gradient(
    133deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(7, 45, 62, 0.7) 64%,
    rgba(13, 79, 108, 0.9) 100%
  );
  animation: ${fadeIn} 0.8s ease forwards;
`
export const ModalContent = styled.div`
  width: auto;
  max-width: 90vw;
  position: absolute;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 65%,
    rgba(0, 0, 0, 0.75) 90%,
    rgba(0, 0, 0, 0.9) 100%
  );
  top: 5vh;
  transform: translateX(-1500px);
  animation: ${roadRunnerIn} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  display: flex;
  padding: 1rem 0 0.5rem 0;
`
export const CloseModal = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`
export const DivButtonsSide = styled.div`
  width: 5rem;
  height: 73vh;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & > img {
    width: 2.5rem;
    margin: .5rem;
  }
`
export const PictureCareoussel = styled.picture`
  display: flex;
  justify-content: center;
  align-items: center
`
export const ImgCaroussel = styled.img`
  object-fit: contain;
  box-sizing: content-box;
  height: 73vh;
  filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.9));
  max-width: 43.75rem;
`
export const DivInfosContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
`
export const DivDates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 1.2rem 0;
  & > p {
    padding: 0 0.5rem 0 0;
    font-size: 1.1rem;
    color: ${colors.background};
    font-weight: 300;
  }
`
export const DivTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: solid 1px ${colors.background};
  & > p {
    color: ${colors.background};
  }
`
export const PTitleModal = styled.p`
  font-family: ${fonts.titles};
  font-size: 1.4rem;
  padding-right: 1.5rem;
`
export const PClient = styled.p`
  font-style: italic;
  padding-bottom: 0.5rem;
  color: ${colors.background};
  font-weight: 300;
`
export const DivPWork = styled.div`
  & > p {
    font-size: 1.1rem;
    font-weight: 300;
    color: ${colors.background};
    line-height: 1.4rem;
  }
`
