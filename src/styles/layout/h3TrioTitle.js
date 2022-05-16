import styled from "styled-components"
import fonts from "../bases/fonts"

export const DivH3Title = styled.div`
  display: flex;
  align-items: baseline;
  padding: 3rem 0;
  @media (max-width: 1023px) {
    padding: 2rem 0;
  }

`
export const SvgH3Trio = styled.img`
  width: 3.25rem;
  margin-right: 1rem;
  @media (max-width: 1023px) {
    width: 3rem;
  }
  @media (max-width: 950px) {
    width: 2.8rem;
  }
  @media (max-width: 640px) {
    width: 2.5rem;
    margin-right: 1.2rem;
  }
  @media (max-width: 480px) {
    width: 2.2rem;
    margin-right: 1rem;
  }
  @media (max-width: 400px) {
    width: 2rem;
  }

`
export const H3TitleStyle = styled.h3`
  font-family: ${fonts.titles};
  font-size: 4.5rem;
  font-weight: 600;
  text-transform: uppercase;
  @media (max-width: 1023px) {
    font-size: 4rem;
  }
  @media (max-width: 950px) {
    font-size: 3.5rem;
  }

  @media (max-width: 640px) {
    font-size: 3.5rem;
  }
  @media (max-width: 480px) {
    font-size: 3.2rem;
  }
  @media (max-width: 400px) {
    font-size: 3rem;
  }
  @media (max-width: 330px) {
    font-size: 2.5rem;
  }

`
