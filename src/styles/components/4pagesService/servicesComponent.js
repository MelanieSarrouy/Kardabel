import styled from 'styled-components'

export const DivServicesIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrapo: wrap;
  background: url(${(props) => props.circleIntro}) no-repeat center ${(props) => props.side};
  background-size: contain;
  width: 100%;
  padding: 2rem 7% 2rem 7%;
  margin-bottom: 4rem;
  @media (max-width: 640px) {
    padding: 1rem 7% 1rem 7%;
    margin-bottom: 3rem;
  }
  @media (max-width: 420px) {
    padding: 1rem 2rem 1rem 2rem;
    margin-bottom: 2rem;
  }
  & > p {
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.8rem;
    text-align: center;
    padding: 0.5rem;
    @media (max-width: 1320px) {
      font-size: 1.7rem;
      line-height: 2.5rem;
    }
    @media (max-width: 1180px) {
      font-size: 1.6rem;
      line-height: 2.2rem;
      padding: 0.5rem 12rem;
    }
    @media (max-width: 1024px) {
      padding: 0.5rem 2rem;
    }
    @media (max-width: 950px) {
      font-size: 1.5rem;
      padding: 0.5rem 6rem;
    }
    @media (max-width: 750px) {
      padding: 0.5rem 2rem;
    }
    @media (max-width: 640px) {
      font-size: 1.4rem;
      line-height: 2.1rem;
      padding: 0.5rem 0rem;
    }
    @media (max-width: 450px) {
      font-size: 1.3rem;
      line-height: 1.9rem;
      padding: 0.5rem 0rem;
    }
  }
`
export const DivServicesBackground = styled.div`
  background: no-repeat center center url(${(props) => props.bck});
  background-size: ${(props) => props.bckSize};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
  justify-content: space-between;
  align-items: center;
  padding: 10rem 7% 10rem 7%;
  min-height: 20rem;
  @media (max-width: 1440px) {
    gap: 2rem;
  }
  @media (max-width: 1360px) {
    gap: 1rem;
  }
  @media (max-width: 1320px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
  @media (max-width: 1180px) {
    gap: 2rem;
  }
  @media (max-width: 950px) {
    gap: 1rem;
  }
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  @media (max-width: 640px) {
    padding: 5rem 7%;
    }
  @media (max-width: 420px) {
    padding: 5rem 2rem;
    }
`
export const DivServicesCardsBackground = styled.div`
  background: no-repeat center center url(${(props) => props.circle});
  background-color: ${(props) => props.bckColor};
  background-size: 40%;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 22rem;
  padding: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: background-size 800ms cubic-bezier(0.78, 0.08, 0.73, 0.87),
    box-shadow 100ms ease-in-out;
  cursor: pointer;
  position: relative;
  border-left-style: solid;
  @media (max-width: 950px) {
    min-height: 20rem;
  }
  @media (max-width: 850px) {
    min-height: 18rem;
    background-size: 30%;
  }
  @media (max-width: 420px) {
    padding: 1rem;
    background-size: 50%;
    min-height: 19rem;
  }
  &:hover {
    background-size: 140%;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.35);
  }
`
