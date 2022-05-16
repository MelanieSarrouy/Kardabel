import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import colors from '../../bases/colors'

export const TextCTA = styled.p`
  font-weight: 600;
  font-size: 1.8rem;
  text-align: center;
  line-height: 3rem;
  font-style: italic;
  padding: 2rem 7% 3rem 7%;
  @media (max-width: 640px) {
    padding: 1rem 0 2rem 0;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`
export const DivButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 0rem 7% 5rem 7%;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    padding: 0rem;
  }
`
export const LinkButtonServices = styled(HashLink)`
  background-color: ${colors.primary};
  padding: 0.6rem 2rem;
  border-radius: 2rem;
  font-weight: 500;
  font-size: 1.2rem;
  color: ${colors.background};
  border: solid 2px ${colors.primary};
  text-decoration: none;
  text-align: center;
  box-shadow: 0px 0.2rem 2px rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
  transition: color 0.2s, border 0.2s, background-color 0.5s;
  margin: 0 0.5rem;
  @media (max-width: 950px) {
    font-size: 1rem;
  }
  @media (max-width: 750px) {
    width: 100%;
    font-size: 1.2rem;
    padding: 0.6rem 2rem;
    margin: 0.5rem 0rem;
  }
  &:hover {
    border: solid 2px ${colors.primaryDark};
    background-color: ${colors.primaryDark};
  }
`
