import styled from 'styled-components'
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