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
                to="/portfolio"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                Portfolio
              </NavLinkStyle>
              <NavLinkStyle
                to="/contact"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                Contact
              </NavLinkStyle>
        </NavStyle>
      </DivHeaderContent>
    </HeaderStyle>
  )
}

export default Header
