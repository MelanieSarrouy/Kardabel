import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import colors from '../../bases/colors'
import { buttonsHashLink } from '../../bases/keyframes'

export const UlButtonContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 2rem 0 5rem 0;
  @media (max-width: 750px) {
    padding: 2rem 0 2rem 0;
    flex-direction: column;
    align-items: center;
  }
  & > li {
    @media (max-width: 750px) {
      width: 100%;
    }
    @media (max-width: 420px) {
      padding: 0rem;
    }
  }
  & > li > a {
    display: block;
    min-width: 13rem;
    padding: 0.8rem 2rem;
    font-size: 1.2rem;
    margin: 0.6rem;
    @media (max-width: 750px) {
      margin: 0.6rem 0;
    }
  }
`
export const LinkButtonServices = styled(HashLink)`
  background-color: ${colors.primaryDark};
  border-radius: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  color: ${colors.background};
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  animation-name: ${buttonsHashLink};
  animation-duration: 600ms;
  animation-iteration-count: 10;
  animation-fill-mode: backwards;
  transition: background-color 400ms, border 400ms, color 400ms,
    box-shadow 400ms cubic-bezier(0.2, 0.63, 0.55, 0.97);
  &:hover {
    background-color: ${(props) => props.btncolorhover || colors.secondary};
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
  }
`
