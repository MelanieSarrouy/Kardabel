import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../bases/colors'

export const NavServicesStyle = styled.nav`
  & > ul {
    display: flex;
    justify-content: center;
    align-items: baseline;
    padding: 3rem 0 2rem 0;
    @media (max-width: 750px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.6rem;
    }
    @media (max-width: 640px) {
      padding: 2rem 0 0rem 0;
      gap: 1rem;
    }
    @media (max-width: 420px) {
      grid-template-columns: 1fr;
      gap: 1rem;
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
      min-width: 9rem;
      @media (max-width: 750px) {
        margin: 0rem;
      }
    }
  }
`
export const LinkSecondaryStyle = styled(Link)`
  background-color: ${colors.primary};
  font-weight: 500;
  color: ${colors.background};
  border: solid 2px ${colors.primary};
  box-shadow: 0px 0.2rem 2px rgba(0, 0, 0, 0.4);
  transition: color 0.2s, border 0.2s, background-color 0.5s;
  &:hover {
    border: solid 2px ${colors.primaryDark};
    background-color: ${colors.primaryDark};
  }
`
export const LinkSecondaryStyleActive = styled(Link)`
  background-color: ${colors.background};
  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  box-shadow: 0px 0.2rem 2px rgba(0, 0, 0, 0.4);
  font-weight: 700;
  &:hover {
    border: solid 2px ${colors.primaryDark};
    color: ${colors.primaryDark};
  }
`
