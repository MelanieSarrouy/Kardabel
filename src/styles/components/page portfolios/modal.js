import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    background-color: rgba(0, 0, 0, 0);
  }
  100% {
    background-color: rgba(0, 0, 0, 0.8);
}
`
const roadRunnerIn = keyframes`
  0% {
    transform: translateX(-1500px) skewX(30deg) scaleX(1.3);
  }
  70% {
    transform: translateX(30px) skewX(0deg) scaleX(0.9);
  }
  100% {
    transform: translateX(0px) skewX(0deg) scaleX(1);
  }
`
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
  z-index: 25;
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
  height: 80vh;
  position: absolute;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: white;
  top: 10vh;
  transform: translateX(-1500px);
  animation: ${roadRunnerIn} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  line-height: 1.5rem;
`
export const CloseModal = styled.img`
  position: absolute;
  top: .5rem;
  right: .5rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`
export const DivDates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
    padding: 0 .5rem;
  }
`
export const DivTags = styled(DivDates)`
`