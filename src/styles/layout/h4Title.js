import styled from "styled-components"
import colors from "../bases/colors"
import fonts from "../bases/fonts"

export const DivH4Container = styled.div`
  padding: 6rem 7% 4rem 7%;
  display: flex;
  align-items: baseline;
  position: relative;
  &::before {
    display: block;
    position: absolute;
    top: 4rem;
    content: '';
    width: 15rem;
    height: .3rem;
    background-color: ${colors.secondary};
  }

  @media (max-width: 1200px) {
    padding: 5rem 7% 3rem 7%;
  }

  @media (max-width: 1024px) {
    padding: 5rem 7% 2rem 7%;
  }
  @media (max-width: 950px) {
    padding: 4.5rem 7% 2rem 7%;
  }
  @media (max-width: 640px) {
    padding: 4.5rem 7% 1rem 7%;
  }

  @media (max-width: 420px) {
    padding: 4.5rem 2rem 1rem 2rem;
  }
`
export const SvgH4Trio = styled.img`
  width: 2.6rem;
  margin-right: 1rem;
  @media (max-width: 1440px) {
    width: 2.4rem;
    margin-right: .9rem;
  }
  @media (max-width: 1280px) {
    width: 2.2rem;
  }
  @media (max-width: 1023px) {
    width: 2rem;
    margin-right: .8rem;
  }
  @media (max-width: 950px) {
    width: 1.8rem;
    margin-right: .7rem;
  }
  @media (max-width: 750px) {
    width: 1.6rem;
  }
  @media (max-width: 640px) {
    width: 1.5rem;
    margin-right: 0.6rem;
  }
  @media (max-width: 460px) {
    width: 1.2em;
    margin-right: 0.5rem;
  }
  @media (max-width: 350px) {
    width: 1.1rem;
    margin-right: 0.5rem;
  }
`

export const H4Style = styled.h4`
  font-size: 3.6rem;
  font-family: ${fonts.kardabel};
  font-weight: 600;
  line-height: 4rem;
  color: ${colors.primaryDark};
  @media (max-width: 1440px) {
    font-size: 3.4rem;
  }
  @media (max-width: 1280px) {
    font-size: 3rem;
  }
  @media (max-width: 1023px) {
    font-size: 2.8rem;
  }
  @media (max-width: 950px) {
    font-size: 2.5rem;
  }
  @media (max-width: 750px) {
    font-size: 2.2rem;
  }
  @media (max-width: 640px) {
    font-size: 2rem;
    line-height: 3rem;
  }
  @media (max-width: 460px) {
    font-size: 1.7rem;
  }
  @media (max-width: 350px) {
    font-size: 1.6rem;
    line-height: 2rem;

  }

`
