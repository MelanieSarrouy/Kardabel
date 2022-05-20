import styled from "styled-components"
import colors from "../bases/colors"
import fonts from "../bases/fonts"

export const DivH2Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`
export const SvgH2Trio = styled.img`
  width: 5.5rem;
  margin: 0 2rem 1rem 0;
  @media (max-width: 1280px) {
    width: 4rem;
    margin-right: 1.6rem;
  }
  @media (max-width: 950px) {
    width: 2.8rem;
    margin-right: 1.1rem;
  }
  @media (max-width: 640px) {
    width: 2.5rem;
  }
  @media (max-width: 480px) {
    width: 2.2rem;
    margin-right: 1rem;
  }
  @media (max-width: 400px) {
    width: 1.6rem;
    margin-right: .5rem;
  }
`
export const H2TitleStyle = styled.h2`
  font-family: ${fonts.titles};
  color: ${colors.secondary};
  font-size: 7.5rem;
  text-transform: uppercase;
  font-weight: 600;
  padding-bottom: 5rem;
  @media (max-width: 1280px) {
    font-size: 5.5rem;
    padding-bottom: 4rem;
  }
  @media (max-width: 950px) {
    font-size: 4rem;
    padding-bottom: 3rem;
  }
  @media (max-width: 640px) {
    font-size: 3.5rem;
    padding-bottom: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 3rem;
  }
  @media (max-width: 400px) {
    font-size: 2.2rem;
  }
`
