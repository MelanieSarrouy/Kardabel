import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import colors from '../bases/colors'
import fonts from '../bases/fonts'

export const UlSubMenu = styled.ul`
  position: absolute;
  top: 5rem;
  right: 0rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.primaryDark}E6;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  border-top: solid 3px ${colors.secondary};
  & > li,
  & > li > div {
    width: 100%;
    &:hover {
      @media (min-width: 950px) {
        background-color: ${colors.primaryDark};
      }
    }
    & > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.8rem;
      text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
      font-family: ${fonts.titles};
      text-transform: uppercase;
      font-size: 1rem;
      width: 100%;
      @media (max-width: 1024px) {
        padding: 1rem 1.2rem;
      }
      @media (max-width: 950px) {
        padding: 1rem 21% 1rem 2rem;
      }
      @media (max-width: 800px) {
        padding: 1rem 14% 1rem 2rem;
      }
      @media (max-width: 640px) {
        padding: 1rem 7%;
      }
    }
    & a > p {
      text-transform: uppercase;
      text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
    }
  }
`
export const SubNavLinkStyle = styled(HashLink)`
  color: ${colors.background};
  font-weight: 300;
  transition: font-weight 0.1s, color 0.2s, text-shadow 0.3s;
  &:hover {
    color: ${colors.secondary};
    font-weight: 400;
    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.8);
  }
  @media (max-width: 950px) {
    &:hover {
      background-color: ${colors.primaryDark};
    }
  }
`
export const SubNavLinkStyleActive = styled(HashLink)`
  background-color: ${colors.secondary};
  font-weight: 500;
`