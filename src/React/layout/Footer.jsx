import React from 'react'
import logo from '../../assets/logo/kardabel.png'
import {
  DivFooterContent,
  DivTextFooterContainer,
  FooterStyle,
  ImgFooterStyle,
  LinksFooterStyle,
  NavFooter,
  PTextCopyright,
} from '../../styles/layout/footer'

const Footer = () => {
  return (
    <FooterStyle>
      <DivFooterContent>
        <ImgFooterStyle src={logo} alt="logo Kardabel" />
        <DivTextFooterContainer>
          <div>
            <PTextCopyright>© KARDABEL 2022</PTextCopyright>
            <PTextCopyright>Site conçu et développé par Kardabel / Mélanie Sarrouy</PTextCopyright>
          </div>
          <NavFooter>
            <LinksFooterStyle to="/contact">Contact</LinksFooterStyle>
            <LinksFooterStyle to="/mentions-legales">Mentions Légales</LinksFooterStyle>
          </NavFooter>
        </DivTextFooterContainer>
      </DivFooterContent>
    </FooterStyle>
  )
}

export default Footer
