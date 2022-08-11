import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../bases/colors'

export const FooterStyle = styled.footer`
  width: 100%;
  background-color: ${colors.primaryDark};
  margin-top: 5rem;
`
export const DivFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1620px;
  margin: auto;
  padding: 2rem 7%;
  @media (max-width: 420px) {
    padding: 2rem;
  }
`
export const ImgFooterStyle = styled.img`
  max-width: 12rem;
  padding-bottom: 1rem;
  @media (max-width: 950px) {
    padding-bottom: 2rem;
  }
  @media (max-width: 640px) {
    max-width: 10rem;
  }
`
export const DivTextFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & > div {
    @media (max-width: 750px) {
      padding: 1rem 0;
    }
  }
`
export const PTextCopyright = styled.p`
  color: ${colors.background};
  padding: 0.3rem 0;
  font-weight: 300;
  @media (max-width: 750px) {
    text-align: center;
    line-height: 1.5rem;
  }
  @media (max-width: 640px) {
    padding: 0.3rem;
  }
`
export const NavFooter = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  @media (max-width: 750px) {
    align-items: center;
  }
`
export const LinksFooterStyle = styled(Link)`
  color: ${colors.background};
  padding: 0.3rem 0;
  font-weight: 400;
  &:hover {
    color: ${colors.secondary};
  }
`
