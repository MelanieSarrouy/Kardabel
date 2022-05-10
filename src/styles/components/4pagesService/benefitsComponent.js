import styled from 'styled-components'
import logoBenefitCard from '../../../assets/logo/logo-benefits-cards.svg'
import logoBenefitCard2 from '../../../assets/logo/logo-simple-dore.svg'
import backgroundCard from '../../../assets/shapes/EllipseRose-light.svg'

export const DivBenefitsCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  row-gap: 3rem;
`
export const DivCard = styled.div`
  background: ${(props) =>
    props.bck === 'yes'
      ? `no-repeat center center url(${logoBenefitCard})`
      : `no-repeat center center url(${logoBenefitCard2})`};
  background-color: ${(props) => props.color};
  background-size: 25%;
  border-radius: 1.5rem;
  padding: 3rem 4rem 3rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  scale: ${(props) => props.scale};
  transition: background-size 800ms, transform 400ms, box-shadow 100ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-size: 50%;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.35);
    transform: scale(${(props) => props.scaleHover});
  }
`
export const PTitleBenefitCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > p {
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: 700;
    padding: 1rem;
  }
`
export const PTextBenefitCard = styled.div`
  & > p {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.5rem;
    text-align: center;
    padding: 0.4rem;
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
