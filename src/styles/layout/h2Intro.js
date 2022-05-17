import styled from 'styled-components'

export const SectionIntro = styled.section`
  padding: 10rem 7% 0rem 7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1440px;
  margin: 14rem auto 0 auto;
  @media (max-width: 1520px) {
    margin-top: 16rem;
  }
  @media (max-width: 1420px) {
    margin-top: 14rem;
  }
  @media (max-width: 1320px) {
    margin-top: 14rem;
  }
  @media (max-width: 1280px) {
    margin-top: 7rem;
  }
  @media (max-width: 1200px) {
    margin-top: 9rem;
  }
  @media (max-width: 1120px) {
    margin-top: 8rem;
  }
  @media (max-width: 1023px) {
    margin-top: 8rem;
  }
  @media (max-width: 950px) {
    margin-top: 8rem;
    padding: 10rem 7% 0rem 7%;
  }
  @media (max-width: 750px) {
    margin-top: 6rem;
    padding-bottom: 3rem;
  }
  @media (max-width: 640px) {
    margin-top: 4rem;
  }
  @media (max-width: 580px) {
    margin-top: 3rem;
  }
  @media (max-width: 450px) {
    margin-top: 2rem;
  }
  @media (max-width: 420px) {
    margin-top: 0rem;
    padding: 9rem 2rem 0rem 2rem;
  }
`
export const TextIntro = styled.div`
  white-space: pre-wrap;
  & > p {
    font-weight: 500;
    font-size: 1.8rem;
    text-align: center;
    line-height: 3rem;
    padding: 1rem 7% 2rem 7%;
    @media (max-width: 950px) {
      padding: .8rem 0 2rem 0;
      font-size: 1.7rem;
      line-height: 2.6rem;
    }
    @media (max-width: 640px) {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
    @media (max-width: 420px) {
      padding: .5rem 0 2rem 0;
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  }
`
