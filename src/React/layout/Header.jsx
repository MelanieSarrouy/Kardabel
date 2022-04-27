import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/kardabel.png'
import arrowDownWhite from '../../assets/icons/chevron-down-solid-white.svg'
import arrowUpWhite from '../../assets/icons/chevron-up-solid-white.svg'

import {
  HeaderStyle,
  DivHeaderContent,
  ImgStyle,
  NavLinkStyle,
  NavStyle,
  ImgMenuArrow,
} from '../../styles/layout/header'
import SubMenuServices from './SubMenuServices'
import styled from 'styled-components'

export const DivDropdownSubmenu = styled.div`
  position: relative;
`
const Header = () => {
  const [submenu, setSubmenu] = useState(false)
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
          <DivDropdownSubmenu>
            <ImgMenuArrow
              src={submenu ? arrowUpWhite : arrowDownWhite}
              alt="accès au sous-menu"
              onClick={() => setSubmenu(!submenu)}
            />
            {submenu && <SubMenuServices />}
          </DivDropdownSubmenu>
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
