/* IMPORTS */

import React from 'react'
import { Link } from 'react-router-dom'
// assets imports
import logo from '../../assets/logo/kardabel.png'
// styles imports
import {
  DivFooterContent,
  DivTextFooterContainer,
  FooterStyle,
  LinksFooterStyle,
  NavFooter,
  PTextCopyright,
} from '../../styles/layout/footer'
import { ImgStyle } from '../../styles/layout/header'

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
        <Link to="/">
          <ImgStyle src={logo} alt="logo" width={192} />
        </Link>{' '}
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
