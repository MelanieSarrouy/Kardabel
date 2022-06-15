import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../bases/colors'
import fonts from '../bases/fonts'

export const NavLinkStyle = styled(NavLink)`
  padding: 1.9rem 0;
  border-top: solid 3px rgba(0, 0, 0, 0);
  text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
  font-family: ${fonts.titles};
  color: ${colors.background};
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1rem;
  transition: font-weight 0.1s, color 0.2s, text-shadow 0.3s;
  &:hover {
    font-weight: 400;
    color: ${colors.secondary};
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  }
`
export const DivDropdownSubmenu = styled.div`
  position: relative;
`
export const ImgMenuArrow = styled.img`
  width: 1rem;
  margin: 0 0rem 0 1rem;
  border-top: solid 3px rgba(0, 0, 0, 0);
`
export const PNav = styled.p`
  cursor: pointer;
  padding: 1.9rem 0;
  border-top: solid 3px rgba(0, 0, 0, 0);
  text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
  font-family: ${fonts.titles};
  color: ${colors.background};
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1rem;
  transition: font-weight 0.1s, color 0.2s, text-shadow 0.3s;
  &:hover {
    font-weight: 400;
    color: ${colors.secondary};
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  }
`
