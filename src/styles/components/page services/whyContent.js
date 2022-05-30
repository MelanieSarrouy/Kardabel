import styled from 'styled-components'

export const DivWhyContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const DivWhyTextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 1180px) {
    padding: 0rem;
  }
  @media (max-width: 640px) {
    padding: 1rem 0 0 0;
  }
  @media (max-width: 540px) {
    padding: 0;
  }
  & > p {
    font-size: 1.8rem;
    line-height: 3rem;
    text-align: left;
    font-weight: 600;
    padding: 0rem 0rem 1rem 0rem;
    @media (max-width: 1440px) {
      font-size: 1.7rem;
      padding: 0rem 0rem 0.8rem 0rem;
    }
    @media (max-width: 1280px) {
      font-size: 1.6rem;
      line-height: 2.7rem;
    }
    @media (max-width: 1180px) {
      font-size: 1.5rem;
      line-height: 2.4rem;
    }
    @media (max-width: 950px) {
      font-size: 1.4rem;
      line-height: 2rem;
    }
    @media (max-width: 640px) {
      font-size: 1.4rem;
      line-height: 2rem;
    }
    @media (max-width: 540px) {
      font-size: 1.2rem;
      line-height: 1.8rem;
      font-weight: 500;
    }
    @media (max-width: 420px) {
      padding: 0.8rem 0rem 0rem 0rem;
    }
    @media (max-width: 320px) {
      font-size: 1.1rem;
      line-height: 1.7rem;
    }
  }
`
