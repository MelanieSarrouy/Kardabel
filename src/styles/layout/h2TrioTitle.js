import styled, { keyframes } from "styled-components"
import colors from "../bases/colors"
import fonts from "../bases/fonts"

export const DivH2Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`
const trio= keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
    transform: rotate(-720deg);
    }
  10% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    transform: rotate(0deg);
  }
`

export const SvgH2Trio = styled.img`
  width: 5.5rem;
  margin: 0 1.4rem 1rem 0;
  animation: 1200ms cubic-bezier(.2,.32,.04,1.02) 100ms backwards ${trio};

  @media (max-width: 1280px) {
    width: 4rem;
    margin-right: 1.3rem;
  }
  @media (max-width: 950px) {
    width: 2.9rem;
    margin-right: 1rem;
  }
  @media (max-width: 640px) {
    width: 2.4rem;
    margin-right: .9rem;
  }
  @media (max-width: 480px) {
    width: 2.2rem;
    margin-right: .8rem;
  }
  @media (max-width: 420px) {
    width: 1.6rem;
    margin-right: .6rem;
  }
`
const h2Title= keyframes`
  0% {
    opacity:0;
    transform: translateX(600px);
    }
  10% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateX(0px);
  }
`

export const H2TitleStyle = styled.h2`
  font-family: ${fonts.kardabel};
  color: ${colors.secondary};
  font-size: 7.5rem;
  text-transform: uppercase;
  letter-spacing: -2px;
  font-weight: 600;
  padding-bottom: 5rem;
  animation: 600ms cubic-bezier(.2,.32,.04,1.02) 400ms backwards ${h2Title};

  @media (max-width: 1280px) {
    font-size: 5.5rem;
    padding-bottom: 4rem;
  }
  @media (max-width: 950px) {
    font-size: 4rem;
    padding-bottom: 3rem;
  }
  @media (max-width: 640px) {
    font-size: 3.2rem;
    padding-bottom: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 3rem;
  }
  @media (max-width: 420px) {
    font-size: 2.2rem;
  }
`
