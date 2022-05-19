import styled from 'styled-components'

export const DivWhyContent = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${(props) => props.circle}) no-repeat center ${(props) => props.side};
  background-size: contain;
  padding: 6rem;
  margin-top: -2rem;
  @media (max-width: 1180px) {
    background: url(${(props) => props.circle}) no-repeat center center;
    padding: 4rem 0;
  }
  @media (max-width: 1024px) {
    padding: 4rem 0 0 0;
  }

  @media (max-width: 750px) {
    background: url(${(props) => props.circle}) no-repeat top center;
    background-size: 80%;
  }
`
export const DivWhyTextContent = styled.div`
  background-color: ${(props) => props.color};
  padding: 3rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  @media (max-width: 1180px) {
    padding: 2rem;
  }
  @media (max-width: 640px) {
    border-radius: 1rem;
  }
  @media (max-width: 420px) {
    padding: 1rem;
  }
  & > p {
    font-size: 1.8rem;
    line-height: 2.8rem;
    text-align: center;
    font-style: italic;
    font-weight: 500;
    padding: 0.5rem;
    @media (max-width: 1280px) {
      font-size: 1.7rem;
    }
    @media (max-width: 1180px) {
      font-size: 1.6rem;
      line-height: 2.6rem;
    }
    @media (max-width: 950px) {
      font-size: 1.5rem;
      line-height: 2.4rem;
    }
    @media (max-width: 420px) {
      font-size: 1.4rem;
      line-height: 2.1rem;
    }
    @media (max-width: 320px) {
      font-size: 1.3rem;
      line-height: 2rem;
    }
  }
`
