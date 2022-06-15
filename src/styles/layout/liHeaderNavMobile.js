import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../bases/colors'

export const NavLinkBurgerStyle = styled(Link)`
  color: ${colors.background};
  font-weight: 400;
  text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
  transition: color 0.2s, text-shadow 0.3s;
  &:hover {
    color: ${colors.secondary};
    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.8);
  }
`
export const NavLinkBurgerStyleActive = styled(Link)`
  background-color: ${colors.secondary};
  font-weight: 600;
`
export const PNavMobile = styled.p`
  cursor: pointer;
  color: ${colors.background};
  font-weight: 400;
  text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
  transition: color 0.2s, text-shadow 0.3s;
  &:hover {
    color: ${colors.secondary};
    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.8);
  }
`
export const PNavMobileActive = styled.p`
  cursor: pointer;
  background-color: ${colors.secondary};
  font-weight: 600;
`


