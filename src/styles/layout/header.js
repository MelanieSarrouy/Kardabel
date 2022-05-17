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
  background-color: ${colors.primaryDark}E6;
`
export const DivHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1620px;
  margin: auto;
  padding: 0rem 7%;
  @media (max-width: 850px) {
    padding: 0rem 7%;
  }
  @media (max-width: 420px) {
    padding: 0rem 2rem;
  }

`
export const ImgStyle = styled.img`
  max-width: 160px;
  min-width: 100px;
  padding: 1rem 0;
`
export const NavStyle = styled.nav`
  display: flex;
  & > ul {
    display: flex;
    justify-content: end;
    align-items: start;
    & > li {
      margin-left: 3rem;
      position: relative;
      @media (max-width: 1023px) {
        margin-left: 1rem;
      }
      &:hover {
        background-color: ${colors.primaryDark};
      }
    }
    & > li > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 950px) {
    display: none;
  }
`
export const NavLinkStyle = styled(NavLink)`
  border-top: solid 3px rgba(0, 0, 0, 0);
  text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
  font-family: ${fonts.titles};
  color: ${colors.background};
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1rem;
  padding: 2.2rem 1rem;
  transition: font-weight 0.1s, color 0.2s, text-shadow 0.3s;
  &:hover {
    font-weight: 400;
    color: ${colors.secondary};
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  }
`
export const ImgMenuArrow = styled.img`
  width: 2rem;
  padding: 0rem 1rem 0rem 0rem;
  border-top: solid 3px rgba(0, 0, 0, 0);
  @media (max-width: 950px) {
    padding: 0rem 0rem 0rem 1rem;
  }
`
