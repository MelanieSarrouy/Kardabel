import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/kardabel.png'
import {
  HeaderStyle,
  DivHeaderContent,
  ImgStyle,
  NavLinkStyle,
  NavStyle,
} from '../../styles/components/header'

const Header = () => {
  return (
    <HeaderStyle>
      <DivHeaderContent>
        <Link to="/">
          <ImgStyle src={logo} alt="logo" />
        </Link>
        <NavStyle>
              <NavLinkStyle to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                L'Agence
              </NavLinkStyle>
              <NavLinkStyle
                to="/services"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                Services
              </NavLinkStyle>
              <NavLinkStyle
                to="/portfolios"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                Portfolios
              </NavLinkStyle>
              <NavLinkStyle
                to="/CV"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                CV
              </NavLinkStyle>
              <NavLinkStyle
                to="/contacts"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                Contacts
              </NavLinkStyle>
        </NavStyle>
      </DivHeaderContent>
    </HeaderStyle>
  )
}

export default Header
