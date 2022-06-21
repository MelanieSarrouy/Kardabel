import styled from "styled-components"
import colors from "../bases/colors"
import fonts from "../bases/fonts"

export const DivH2Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`
export const SvgH2Trio = styled.img`
  width: 5.1rem;
  margin: 0 1.4rem 1rem 0;
  @media (max-width: 1280px) {
    width: 3.8rem;
    margin-right: 1.2rem;
  }
  @media (max-width: 950px) {
    width: 2.7rem;
    margin-right: .9rem;
  }
  @media (max-width: 640px) {
    width: 2.2rem;
    margin-right: .8rem;
  }
  @media (max-width: 480px) {
    width: 2.1rem;
    margin-right: .7rem;
  }
  @media (max-width: 420px) {
    width: 1.5rem;
    margin-right: .5rem;
  }
`
export const H2TitleStyle = styled.h2`
  font-family: ${fonts.titles2};
  color: ${colors.secondary};
  font-size: 7.5rem;
  text-transform: uppercase;
  letter-spacing: -2px;
  word-spacing: 1rem;
  line-height: 8rem;
  padding-bottom: 5rem;
  @media (max-width: 1280px) {
    font-size: 5.5rem;
    padding-bottom: 4rem;
    line-height: 6.5rem;
  }
  @media (max-width: 950px) {
    font-size: 4rem;
    padding-bottom: 3rem;
    line-height: 4.8rem;
  }
  @media (max-width: 640px) {
    font-size: 3.2rem;
    padding-bottom: 2rem;
    line-height: 3.8rem;
  }
  @media (max-width: 480px) {
    font-size: 3rem;
    line-height: 3.6rem;
  }
  @media (max-width: 420px) {
    font-size: 2.2rem;
    line-height: 2.8rem;
  }
`