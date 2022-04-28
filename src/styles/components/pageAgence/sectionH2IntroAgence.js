import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import colors from '../../bases/colors'


export const TextCTA = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  text-align: center;
  line-height: 3rem;
  font-style: italic;
  padding: 3rem 5% 1rem 5%;
`
export const DivButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 1rem 5% 3rem 5%;
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
  box-shadow: 0px 0.2rem 2px rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
  transition: color 0.2s, border 0.2s, background-color 0.5s;
  margin: 0 0.5rem;
  @media (max-width: 950px) {
    font-size: 1rem;
  }
  @media (max-width: 710px) {
    padding: 0.4rem 1.8rem;
  }
  &:hover {
    border: solid 2px ${colors.primaryDark};
    background-color: ${colors.primaryDark};
  }
`
