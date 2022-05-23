import styled from 'styled-components'

export const DivWhyContent = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${(props) => props.circle}) no-repeat center ${(props) => props.side};
  background-size: contain;
  padding: 6rem;
  @media (max-width: 1280px) {
    padding: 4rem 0 4rem 4rem;
  }
  @media (max-width: 1180px) {
    background: url(${(props) => props.circle}) no-repeat center center;
    padding: 4rem 0;
  }
  @media (max-width: 750px) {
    padding: 2.5rem 0;
  }
  @media (max-width: 420px) {
    padding: 2rem 0;
  }
`
export const DivWhyTextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${
    '' /* background-color: white;
  padding: 3rem;
  border-radius: 1.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  }
  @media (max-width: 1180px) {
    padding: 0rem;
  }
  @media (max-width: 420px) {
    padding: 1rem;
  }
  & > p {
    font-size: 1.8rem;
    line-height: 3rem;
    text-align: left;
    font-style: italic;
    font-weight: 600;
    padding: 0.8rem 0.5rem 0.8rem 5rem;
    ${
      '' /* &::before {
    content: '';
    display: flex;
    justify-content: center;
    width: 100%;
    height: 1px;
    background-color: ${colors.primary};
    margin-bottom: .4rem;
  } */
    }
    @media (max-width: 1440px) {
      padding: 0.8rem 0.5rem 0.8rem 3rem;
    }
    @media (max-width: 1280px) {
      font-size: 1.7rem;
    }
    @media (max-width: 1180px) {
      text-align: center;
      padding: 0.8rem 0.5rem;
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
