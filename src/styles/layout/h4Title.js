import styled from 'styled-components'
import colors from '../bases/colors'
import fonts from '../bases/fonts'

export const DivH4Container = styled.div`
  padding: 6rem 7% 4rem 7%;
  display: flex;
  align-items: baseline;
  position: relative;
  &::before {
    display: block;
    position: absolute;
    top: 4.4rem;
    content: '';
    width: 20%;
    height: 0.3rem;
    background-color: ${colors.secondary};
    @media (max-width: 1200px) {
      top: 3.8rem;
      width: 22%;
    }
    @media (max-width: 950px) {
      top: 3.6rem;
      width: 25%;
    }
    @media (max-width: 750px) {
      top: 3.7rem;
    }
    @media (max-width: 640px) {
      top: 3.2rem;
      width: 30%;
    }
    @media (max-width: 450px) {
      top: 3.4rem;
    }
  }
  @media (max-width: 1200px) {
    padding: 5rem 7% 3rem 7%;
  }
  @media (max-width: 1024px) {
    padding: 5rem 7% 2rem 7%;
  }
  @media (max-width: 950px) {
    padding: 4.5rem 7% 2rem 7%;
  }
  @media (max-width: 420px) {
    padding: 4.5rem 2rem 2rem 2rem;
  }
`
export const SvgH4Trio = styled.img`
  width: 2.5rem;
  margin-right: .9rem;
  @media (max-width: 1440px) {
    width: 2.4rem;
  }
  @media (max-width: 1280px) {
    width: 2.1rem;
    margin-right: 0.8rem;
  }
  @media (max-width: 1023px) {
    width: 1.9rem;
    margin-right: 0.7rem;
  }
  @media (max-width: 950px) {
    width: 1.7rem;
    margin-right: 0.6rem;
  }
  @media (max-width: 750px) {
    width: 1.5rem;
  }
  @media (max-width: 640px) {
    width: 1.3rem;
    margin-right: 0.5rem;
  }
  @media (max-width: 460px) {
    width: 1.15rem;
  }
  @media (max-width: 350px) {
    width: 1.1rem;
  }
`
export const H4Style = styled.h4`
  font-size: 3.6rem;
  font-family: ${fonts.titles2};
  word-spacing: 0.5rem;
  letter-spacing: -1px;
  font-weight: 500;
  line-height: 4rem;
  color: ${colors.primaryDark};
  @media (max-width: 1440px) {
    font-size: 3.4rem;
  }
  @media (max-width: 1280px) {
    font-size: 3rem;
  }
  @media (max-width: 1023px) {
    font-size: 2.8rem;
  }
  @media (max-width: 950px) {
    font-size: 2.4rem;
  }
  @media (max-width: 750px) {
    font-size: 2.1rem;
  }
  @media (max-width: 640px) {
    font-size: 1.9rem;
    line-height: 2.2rem;
  }
  @media (max-width: 460px) {
    font-size: 1.7rem;
  }
  @media (max-width: 350px) {
    font-size: 1.6rem;
    line-height: 2rem;
  }
`