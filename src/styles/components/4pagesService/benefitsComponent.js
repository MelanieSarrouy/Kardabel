import styled from 'styled-components'
import logoBenefitCard2 from '../../../assets/logo/logo-simple-dore.svg'
import backgroundCard from '../../../assets/shapes/EllipseRose-light.svg'
import colors from '../../bases/colors'
import fonts from '../../bases/fonts'

export const DivBenefitsCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding-bottom: 2rem;
  @media (max-width: 950px) {
    grid-template-columns: 100%;
    gap: 2rem;
  }
`
export const DivCard = styled.div`
  background: ${(props) =>
    props.bck === 'yes'
      ? ``
      : `no-repeat center center url(${logoBenefitCard2})`}; 
  background-color: ${(props) => props.color};
  background-size: 15%;
  border-radius: 1.5rem;
  padding: 2rem;
  height: 20rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  position: relative;
  @media (max-width: 950px) {
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
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.35);
  }
  & > div {
    width: 100%;
    height: 100%;
    border: 2px solid ${colors.background};
    border-radius: 0.5rem;
  }
`
export const PTitleBenefitCard = styled.div`
  position: absolute;
  padding: .5rem 1rem;
  bottom: 1rem;
  left: 2.1rem;
  &::before {
      position: absolute;
      display: flex;
      content: '';
      width: 100%;
      height: 100%;
      bottom: 0rem;
      left: 0.1rem;
      background-color: ${(props) => props.color};
    }
  & > p {
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 3.2rem;
    letter-spacing: 1px;
    font-family: ${fonts.titles};
    color: ${colors.primary};
    position: relative;
    @media (max-width: 1440px) {
      font-size: 2.8rem;
    }
    @media (max-width: 1240px) {
      font-size: 2.6rem;
    }
    @media (max-width: 1140px) {
      font-size: 2.2rem;
    }
    @media (max-width: 1024px) {
      font-size: 2rem;
    }
    @media (max-width: 950px) {
      font-size: 2.6rem;
    }
  }
`
export const PTextBenefitCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > p {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.6rem;
    text-align: center;
    padding: 0.4rem;
    @media (max-width: 1440px) {
      font-size: 1.7rem;
      line-height: 2.7rem;
    }
    @media (max-width: 1240px) {
      font-size: 1.6rem;
      line-height: 2.5rem;
    }
    @media (max-width: 1024px) {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
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
