import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../bases/colors'
import fonts from '../bases/fonts'

export const HeaderStyle = styled.header`
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${colors.primaryDark}E6;
`
export const DivHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1620px;
  margin: auto;
  padding: 0rem 7%;
  @media (max-width: 420px) {
    padding: 0rem 2rem;
  }
`
export const ImgStyle = styled.img`
  max-height: 4.5rem;
  min-width: 2rem;
  padding: 0.6rem 0;
  @media (max-width: 1024px) {
    max-height: 4rem;
  }

`
export const NavStyle = styled.nav`
  display: flex;
  & > ul {
    display: flex;
    justify-content: end;
    align-items: start;
    & > li {
      position: relative;
    }
    & > li > div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1.8rem;
      @media (max-width: 1024px) {
        padding: 0 1.2rem;
      }
    }
  }
  @media (max-width: 950px) {
    display: none;
  }
`
export const NavLinkStyle = styled(NavLink)`
  padding: 1.8rem 0;
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
export const ImgMenuArrow = styled.img`
  width: 1rem;
  margin: 0 0rem 0 1rem;
  border-top: solid 3px rgba(0, 0, 0, 0);
`
