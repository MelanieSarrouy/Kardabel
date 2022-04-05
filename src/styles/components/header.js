import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../bases/colors'
import fonts from '../bases/fonts'

export const HeaderStyle = styled.header`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${colors.primary}D8;
`
export const DivHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 2200px;
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
  font-family: ${fonts.titles};
  color: ${colors.background};
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1rem;
  padding: 1rem 0rem;
  margin-left: 3rem; 

  @media (max-width: 850px) {
    font-size: 0.8rem;
  }
  &:hover {
    font-weight: 400;
  }
`
