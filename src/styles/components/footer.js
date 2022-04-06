import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../bases/colors"

export const FooterStyle = styled.footer`
  width: 100%;
  background-color: ${colors.primaryDark};
`
export const DivFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 2200px;
  margin: auto;
  padding: 3rem 7%;
`
export const ImgFooterStyle = styled.img`
  max-width: 18rem;
  padding-bottom: 1rem;
`
export const DivTextFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem 0 0 0;
  width: 100%;
`
export const PTextCopyright = styled.p`
  color: ${colors.background};
  padding: 0.3rem 0;
`
export const NavFooter = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
`
export const LinksFooterStyle = styled(Link)`
  color: ${colors.background};
  padding: 0.3rem 0;
  font-weight: 500;
  &:hover {
    color: ${colors.secondary};
  }
`
