import styled from 'styled-components'
import fonts from '../../bases/fonts'

export const DivServicesIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0rem 7% 0rem 7%;
  margin-bottom: 4rem;
  @media (max-width: 950px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 420px) {
    padding: 0rem 2rem 0rem 2rem;
  }
  & > p {
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.8rem;
    text-align: left;
    padding: 0.5rem 0rem;
    @media (max-width: 1320px) {
      font-size: 1.7rem;
      line-height: 2.5rem;
    }
    @media (max-width: 1180px) {
      font-size: 1.6rem;
    }
    @media (max-width: 1024px) {
    }
    @media (max-width: 950px) {
      font-size: 1.5rem;
    }
    @media (max-width: 750px) {
    }
    @media (max-width: 640px) {
      font-size: 1.4rem;
      line-height: 2.1rem;
    }
    @media (max-width: 450px) {
      font-size: 1.3rem;
      line-height: 1.9rem;
    }
  }
`
export const DivServicesBackground = styled.div`
  background: no-repeat center center url(${(props) => props.bck});
  background-size: ${(props) => props.bckSize};
  display: grid;
  grid-template-columns: 30% 30% 30%;
  gap: 4rem;
  justify-content: space-between;
  align-items: center;
  padding: 10rem 7% 10rem 7%;
  min-height: 20rem;
  @media (max-width: 1440px) {
    gap: 3rem;
  }
  @media (max-width: 1180px) {
    gap: 2rem;
  }
  @media (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
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
  min-height: 20rem;
  padding: 1.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: background-size 800ms cubic-bezier(0.78, 0.08, 0.73, 0.87),
    box-shadow 100ms ease-in-out;
  cursor: pointer;
  @media (max-width: 850px) {
    background-size: 30%;
    min-height: 18rem;
  }
  @media (max-width: 640px) {
    background-size: 40%;
  }
  @media (max-width: 420px) {
    padding: 1rem;
    background-size: 50%;
  }
  &:hover {
    background-size: 150%;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.35);
  }
`
export const PTitleServicesCard = styled.div`
  padding: 1rem 0;
  & > p {
    font-size: 210%;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 3.2rem;
    font-family: ${fonts.titles};
    text-align: center;
    @media (max-width: 1300px) {
      font-size: 190%;
      line-height: 3rem;
    }
    @media (max-width: 1100px) {
      font-size: 170%;
      line-height: 2.8rem;
    }
    @media (max-width: 1023px) {
      font-size: 210%;
      line-height: 3.2rem;
    }
    @media (max-width: 420px) {
      font-size: 190%;
      line-height: 3rem;
    }
    @media (max-width: 360px) {
      font-size: 170%;
      line-height: 2.8rem;
    }
  }
`
export const PTextServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > p {
    padding: 0 .5rem;
    font-size: 140%;
    font-weight: 600;
    line-height: 2.1rem;
    text-align: center;
    @media (max-width: 1300px) {
      font-size: 130%;
      line-height: 1.8rem;
    }
    @media (max-width: 1100px) {
      font-size: 120%;
    }
    @media (max-width: 1023px) {
      font-size: 140%;
      line-height: 2.1rem;
    }
    @media (max-width: 420px) {
      font-size: 130%;
      line-height: 1.8rem;
    }
    @media (max-width: 360px) {
      font-size: 120%;
      line-height: 1.6rem;
    }
  }
`