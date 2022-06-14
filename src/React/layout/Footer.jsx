/* IMPORTS */

import React from 'react'
// assets imports
import logo from '../../assets/logo/kardabel.png'
// styles imports
import {
  DivFooterContent,
  DivTextFooterContainer,
  FooterStyle,
  ImgFooterStyle,
  LinksFooterStyle,
  NavFooter,
  PTextCopyright,
} from '../../styles/layout/footer'

// JSX // _________________________________________________________________

/**
 * Footer component to display website's Footer
 * @name Footer
 * @returns {?JSX}
 */

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

// EXPORT // ______________________________________________________________

export default Footer
