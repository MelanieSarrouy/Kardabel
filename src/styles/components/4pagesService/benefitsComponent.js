import styled from 'styled-components'
import logoBenefitCard2 from '../../../assets/logo/logo-simple-dore.svg'
import backgroundCard from '../../../assets/shapes/EllipseRose-light.svg'

export const DivBenefitsCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  @media (max-width: 950px) {
    gap: 2rem;
  }
  @media (max-width: 690px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 420px) {
    grid-template-columns: 100%;
  }

`
export const DivCard = styled.div`
  background: ${(props) =>
    props.bck === 'yes'
      ? ``
      : `no-repeat bottom 2% left 5% url(${logoBenefitCard2})`};
  background-color: ${(props) => props.color};
  background-size: 15%;
  border-radius: 1.5rem;
  padding: 3rem 4rem 3rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: background-size 800ms cubic-bezier(0.49, 0.4, 0.28, 1),
    background 200ms cubic-bezier(.55,.1,.6,1), box-shadow 100ms ease-in-out;

  cursor: pointer;
  @media (max-width: 1140px) {
    padding: 2rem;
  }
  @media (max-width: 950px) {
    padding: 1.5rem;
    border-radius: 1rem;
  }
  @media (max-width: 690px) {
    height: 15rem;
    padding: 2rem;
  }
  @media (max-width: 470px) {
    padding: 1.5rem;
  }
  @media (max-width: 370px) {
    padding: 1rem;
  }
  &:hover {
    background: ${(props) =>
      props.bck === 'yes'
        ? ``
        : `no-repeat bottom 5% center url(${logoBenefitCard2})`};
    background-color: ${(props) => props.color};
    background-size: 20%;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.35);
    transition: background-size 800ms cubic-bezier(0.49, 0.4, 0.28, 1),
    background 800ms cubic-bezier(.55,.1,.6,1), box-shadow 100ms ease-in-out;

  }
`
export const PTitleBenefitCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > p {
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: 700;
    padding: 1rem;
    line-height: 3.2rem;
    letter-spacing: 1px;

    @media (max-width: 1140px) {
      font-size: 2rem;
      line-height: 3rem;
    }
  }
`
export const PTextBenefitCard = styled.div`
  & > p {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2.5rem;
    text-align: center;
    padding: 0.4rem;
    @media (max-width: 950px) {
      font-size: 1.4rem;
      line-height: 2.1rem;
    }
    @media (max-width: 750px) {
      font-size: 1.2rem;
      line-height: 2rem;
    }
    @media (max-width: 690px) {
      font-size: 1.4rem;
      line-height: 2.1rem;
    }
    @media (max-width: 470px) {
      font-size: 1.2rem;
      line-height: 1.8rem;
    }
  }
`
export const DivNoCard = styled.div`
  background: no-repeat center center url(${backgroundCard});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  & > p {
    font-weight: 600;
    padding: 0.5rem;
  }
`
