import styled from 'styled-components'
import colors from '../../bases/colors'
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
  overflow-y: auto;
  background: linear-gradient(
    133deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(7, 45, 62, 0.7) 64%,
    rgba(13, 79, 108, 0.9) 100%
  );
  animation: ${fadeIn} 0.8s ease forwards;
`
export const ModalContent = styled.div`
  max-width: 90vw;
  position: absolute;
  top: 2vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 45%,
    rgba(0, 0, 0, 0.85) 90%,
    rgba(0, 0, 0, 0.9) 100%
  );
  margin: 2% auto;
  transform: translateX(-1500px);
  animation: ${roadRunnerIn} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`
export const CloseModal = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  @media (max-width: 750px) {
    width: 2rem;
    height: 2rem;
  }
  @media (max-width: 640px) {
    width: 1.5rem;
    height: 1.5rem;
    top: 0.7rem;
    right: 0.7rem;
  }
`
export const DivButtonsSide = styled.button`
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  padding: 5rem 0;
  & > img {
    width: 2.5rem;
    margin: .5rem;
    @media (max-width: 640px) {
      width: 1.5rem;
    }
  }
  @media (max-width: 640px) {
    width: 3rem;
  }
`
export const DivPagination = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 5rem 1.6rem 5rem;
  @media (max-width: 640px) {
    padding: 1rem 3rem 1.6rem 3rem;
  }

`
export const DivGolbalPagination = styled.div`
  display: flex;
  padding-bottom: 0.6rem;
  @media (max-width: 640px) {
    align-items: start;
  }
  & > img {
    width: 1rem;
    padding: 0.1rem;
    cursor: pointer;
  }
`
export const DivProjet = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  @media (max-width: 640px) {
    flex-direction: column;
  }
  & > p {
    text-align: center;
    &:first-child {
      font-weight: 600;
      padding-right: 0.5rem;
      @media (max-width: 640px) {
        padding-bottom: 0.6rem;
        padding-right: 0;
      }
    }
    &:last-child {
      color: ${colors.background};
      font-weight: 400;
    }
  }
`
export const DivCarousselPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: 1rem;
    padding: 0.2rem;
  }
`
export const PictureCareoussel = styled.picture`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > img {
    object-fit: scale-down;
  }
`
export const PTitleImage = styled.p`
  text-align: center;
  padding: 1.6rem 5rem 1rem 5rem;
  @media (max-width: 640px) {
    padding: 1.6rem 2rem 1rem 2rem;
    line-height: 1.3rem;
  }

`
export const ImgCaroussel = styled.img`
  display: flex;
  object-fit: contain;
  box-sizing: content-box;
  filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.9));
  max-width: 43.75rem;
`
export const DivInfosContainer = styled.div`
  width: 100%;
  padding: 0rem 5rem 1rem 5rem;
  @media (max-width: 640px) {
    padding: .5rem 2rem 1rem 2rem;
  }

`
export const DivDates = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: .5rem;
  & > p {
    font-size: 1.1rem;
    font-weight: 400;
    @media (max-width: 750px) {
      font-size: 1rem;
    }
    @media (max-width: 420px) {
      line-height: .9rem;
      font-size: .9rem;
    }
  }
  @media (max-width: 420px) {
      flex-wrap: wrap;
      padding-top: .5rem;
      gap: .3rem;
    }
`
export const DivTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  border-top: solid 1px ${colors.background};
  & > p {
    color: ${colors.background};
    padding-right: .5rem;
  }
  @media (max-width: 700px) {
    line-height: 1.6rem;
  }
`
export const PTitleModal = styled.p`
  font-size: 1.4rem;
  padding-right: 1.5rem;
  font-weight: 400;
  letter-spacing: 1px;
  @media (max-width: 750px) {
    font-size: 1.3rem;
  }
  @media (max-width: 640px) {
    font-size: 1.2rem;
    padding-right: 0;

  }
`
export const PClient = styled.p`
  font-style: italic;
  padding-bottom: 0.5rem;
  font-weight: 400;
`
export const DivPWork = styled.div`
  & > p {
    font-size: 1.1rem;
    font-weight: 300;
    color: ${colors.background};
    line-height: 1.4rem;
    @media (max-width: 750px) {
      font-size: 1rem;
      line-height: 1.3rem;
    }
  }
`
