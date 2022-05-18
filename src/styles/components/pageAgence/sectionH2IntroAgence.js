import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import colors from '../../bases/colors'

export const UlButtonContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 2rem 0 5rem 0;
  @media (max-width: 750px) {
    padding: 2rem 0 2rem 0;
    }

  & > li > a {
    display: block;
    min-width: 12rem;
    padding: 0.6rem 2rem;
    font-size: 1.2rem;
  }
  & > li {
    @media (max-width: 750px) {
      width: 100%;
      margin: 0.6rem 0rem;
      padding: 0 2rem;
    }
    @media (max-width: 420px) {
      width: 100%;
      margin: 0.6rem 0rem;
      padding: 0rem;
    }

  }
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    ${'' /* padding: 2rem 7% 2rem 7%; */}
  }
`
export const LinkButtonServices = styled(HashLink)`
  background-color: ${colors.primary};
  border-radius: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  color: ${colors.background};
  border: solid 2px ${colors.primary};
  box-shadow: 0px 0.2rem 2px rgba(0, 0, 0, 0.4);
  transition: color 0.2s, border 0.2s, background-color 0.5s;
  margin: 0 0.5rem;
  &:hover {
    border: solid 2px ${colors.primaryDark};
    background-color: ${colors.primaryDark};
  }
`
