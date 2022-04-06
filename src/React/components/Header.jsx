import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/kardabel.png'
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
          <ul>
            <li>
              <NavLinkStyle to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                L'Agence
              </NavLinkStyle>
            </li>
            <li>
              <NavLinkStyle
                to="/services"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                Services
              </NavLinkStyle>
            </li>
            <li>
              <NavLinkStyle
                to="/portfolios"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                Portfolios
              </NavLinkStyle>
            </li>
            <li>
              <NavLinkStyle
                to="/CV"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                CV
              </NavLinkStyle>
            </li>
            <li>
              <NavLinkStyle
                to="/contacts"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                Contacts
              </NavLinkStyle>
            </li>
          </ul>
        </NavStyle>
      </DivHeaderContent>
    </HeaderStyle>
  )
}

export default Header
