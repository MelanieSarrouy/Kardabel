import styled from "styled-components"

export const SectionIntro = styled.section`
  padding: 25rem 7% 2rem 7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1440px;
  margin: auto;
  @media (max-width: 1800px) {
    padding-top: 25rem;
  }
  @media (max-width: 1023px) {
    padding-top: 20rem;
  }
  @media (max-width: 640px) {
    padding-top: 15rem;
  }
  @media (max-width: 480px) {
    padding-top: 12rem;
  }
  @media (max-width: 400px) {
    padding-top: 10rem;
  }
  @media (max-width: 330px) {
    padding-top: 12rem;
  }
`
export const TextIntro = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  text-align: center;
  line-height: 3rem;
  padding: 2rem 5%;
  @media (max-width: 1023px) {
    padding: 2rem 0;
  }
`
