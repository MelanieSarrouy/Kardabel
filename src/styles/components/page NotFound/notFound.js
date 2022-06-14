import styled from 'styled-components'
import colors from '../../bases/colors'

export const PNotFound = styled.div`
  padding: 4rem 0 0 0;
  & > p {
    text-align: center;
    color: ${colors.primaryDark};
    line-height: 2.1rem;
    font-size: 1.3rem;
    font-weight: 400;
    @media (max-width: 950px) {
      font-size: 1.1rem;
      line-height: 1.9rem;
    }
    @media (max-width: 640px) {
      font-size: 1rem;
      line-height: 1.7rem;
    }
  }
`
export const DivLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  & > p {
    text-align: center;
    color: ${colors.primaryDark};
    line-height: 2.1rem;
    font-size: 1.5rem;
    font-weight: 600;
    padding-bottom: 2rem;
    @media (max-width: 950px) {
      font-size: 1.3rem;
      line-height: 1.9rem;
    }
    @media (max-width: 640px) {
      font-size: 1.1rem;
      line-height: 1.7rem;
    }
  }
  & > a {
    display: block;
    min-width: 13rem;
    padding: 0.8rem 2rem;
    font-size: 1.2rem;
    margin: 1rem;
    @media (max-width: 750px) {
      margin: 0.6rem 0;
    }
  }
`