import styled from 'styled-components'
import colors from '../bases/colors'

export const HeaderStyle = styled.header`
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 20;
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
  max-width: 12rem;
  min-width: 2rem;
  padding: 0.6rem 0;
  @media (max-width: 1024px) {
    max-width: 10rem;
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

