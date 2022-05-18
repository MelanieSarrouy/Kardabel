import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../bases/colors'

export const BurgerContainer = styled.div`
  display: none;
  @media (max-width: 950px) {
    height: 5.7rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`
export const NavBurgerContainer = styled.nav`
  display: flex;
  flex-direction: column;
`
export const ImgBurger = styled.img`
  height: 2rem;
  width: auto;
`
export const UlMenuBurger = styled.ul`
  position: absolute;
  top: 5.7rem;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 33%;
  background-color: ${colors.primaryDark}E6;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  border-top: solid 3px ${colors.secondary};
  @media (max-width: 800px) {
    width: 50%;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
  & > li > div {
    width: 100%;
    &:hover {
      background-color: ${colors.primaryDark};
    }
    & > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
      text-transform: uppercase;
      font-size: 1rem;
      width: 100%;
      @media (max-width: 800px) {
        padding: 1rem 2rem;
      }
      @media (max-width: 640px) {
        padding: 1rem 7%;
      }
      @media (max-width: 420px) {
        padding: 1rem 2rem;
      }

    }
    & a > p {
      text-transform: uppercase;
      text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
    }
  }
`
export const NavLinkBurgerStyle = styled(Link)`
  & > p {
    color: ${colors.background};
    font-weight: 400;
    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
    transition: color 0.2s, text-shadow 0.3s;
    &:hover {
      color: ${colors.secondary};
      text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.8);
      font-weight: 500;
    }
  }
  &:hover {
    background-color: ${colors.primaryDark};
  }
`
export const NavLinkBurgerStyleActive = styled(Link)`
  background-color: ${colors.secondary};
  & > p {
    font-weight: 600;
  }
`
