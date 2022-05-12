import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../bases/colors'
import fonts from '../bases/fonts'

export const UlSubMenu = styled.ul`
  position: absolute;
  right: 0rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: ${colors.primaryDark}D8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  border-top: solid 3px ${colors.secondary};
  & > li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    & > a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 2rem;
      text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
      font-family: ${fonts.titles};
      text-transform: uppercase;
      font-size: 1rem;
      width: 100%;
      @media (max-width: 850px) {
        font-size: 0.8rem;
      }
    }
  }
`
export const SubNavLinkStyle = styled(Link)`
  color: ${colors.background};
  font-weight: 300;
  transition: font-weight 0.1s, color 0.2s, text-shadow 0.3s;
  &:hover {
    color: ${colors.secondary};
    font-weight: 400;
    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.8);
  }
`
export const SubNavLinkStyleActive = styled(Link)`
  background-color: ${colors.secondary};
  font-weight: 500;
`
