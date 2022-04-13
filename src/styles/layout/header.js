import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../bases/colors'
import fonts from '../bases/fonts'

export const HeaderStyle = styled.header`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${colors.primaryDark}D8;
`
export const DivHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1920px;
  margin: auto;
  padding: 1rem 7%;
`
export const ImgStyle = styled.img`
  max-width: 160px;
  min-width: 100px;
`
export const NavStyle = styled.nav`
  display: flex;
  justify-content: end;
`
export const NavLinkStyle = styled(NavLink)`
  text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
  font-family: ${fonts.titles};
  color: ${colors.background};
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1rem;
  padding: 1rem 0rem;
  margin-left: 3rem;
  transition: font-weight 0.1s, color 0.2s, text-shadow 0.3s;
  @media (max-width: 850px) {
    font-size: 0.8rem;
  }
  &:hover {
    font-weight: 400;
    color: ${colors.tertiary};
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  }
`
