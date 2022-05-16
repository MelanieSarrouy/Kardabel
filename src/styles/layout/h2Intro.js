import styled from 'styled-components'

export const SectionIntro = styled.section`
  padding: 10rem 7% 2rem 7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1440px;
  margin: 14rem auto 0 auto;
  @media (max-width: 1280px) {
    margin-top: 12rem;
  }
  @media (max-width: 950px) {
    margin-top: 10rem;
  }
  @media (max-width: 750px) {
    margin-top: 8rem;
  }
  @media (max-width: 640px) {
    margin-top: 4rem;
  }
  @media (max-width: 580px) {
    margin-top: 2rem;
  }
  @media (max-width: 450px) {
    margin-top: 0rem;
  }
  @media (max-width: 400px) {
    padding-top: 8rem;
  }

`
export const TextIntro = styled.div`
  white-space: pre-wrap;
  & > p {
    font-weight: 500;
    font-size: 1.8rem;
    text-align: center;
    line-height: 3rem;
    padding: 1rem 5%;
    @media (max-width: 1023px) {
      padding: 2rem 0;
    }
  }
`
