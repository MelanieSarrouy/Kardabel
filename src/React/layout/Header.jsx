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
import SubMenuPortfolios from './SubMenuPorfolios'

export const DivDropdownSubmenu = styled.div`
  position: relative;
`
const Header = () => {
  const [submenu1, setSubmenu1] = useState(false)
  const [submenu2, setSubmenu2] = useState(false)

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
              src={submenu1 ? arrowUpWhite : arrowDownWhite}
              alt="accès au sous-menu"
              onClick={() => setSubmenu1(!submenu1)}
            />
            {submenu1 && <SubMenuServices />}
          </DivDropdownSubmenu>
          <NavLinkStyle
            to="/portfolios"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Portfolios
          </NavLinkStyle>
          <DivDropdownSubmenu>
            <ImgMenuArrow
              src={submenu2 ? arrowUpWhite : arrowDownWhite}
              alt="accès au sous-menu"
              onClick={() => setSubmenu2(!submenu2)}
            />
            {submenu2 && <SubMenuPortfolios />}
          </DivDropdownSubmenu>

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
