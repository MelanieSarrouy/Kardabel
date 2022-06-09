import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import colors from '../bases/colors'

export const NavIntro = styled.nav`
  width: 100%;

  & > ul {
    display: flex;
    justify-content: center;
    align-items: baseline;
    padding: 3rem 0 2rem 0;
    @media (max-width: 750px) {
      gap: 0.8rem;
    }
    @media (max-width: 640px) {
      flex-direction: column;
      padding: 2rem 0 0.2rem 0;
      gap: 1rem;
    }
    @media (max-width: 420px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    & > li {
      @media (max-width: 640px) {
        width: 100%;
      }
    }
    & > li > a {
      display: block;
      text-align: center;
      padding: 0.6rem 2rem;
      border-radius: 2rem;
      font-size: 1.2rem;
      text-decoration: none;
      text-transform: uppercase;
      margin: 0 0.5rem;
      min-width: 11rem;
      @media (max-width: 950px) {
        min-width: 9rem;
        padding: 0.6rem 1rem;
      }
      @media (max-width: 750px) {
        min-width: 8rem;
        margin: 0rem;
        font-size: 1.1rem;
        padding: 0.6rem;
      }
    }
  }
`
export const LinkSecondaryStyle = styled(HashLink)`
  background-color: ${colors.primaryDark};
  font-weight: 600;
  color: ${colors.background};
  border: solid 3px ${colors.primaryDark};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  transition: background-color 400ms, border 400ms, box-shadow 400ms ease-out;
  &:hover {
    border: solid 3px ${colors.secondary};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    background-color: ${colors.secondary};
  }
`
export const LinkSecondaryStyleActive = styled(HashLink)`
  background-color: ${colors.secondary};
  color: ${colors.background};
  border: 3px solid ${colors.secondary};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  font-weight: 700;
  transition: box-shadow 400ms ease-out;
`
