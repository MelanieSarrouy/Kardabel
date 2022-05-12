import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/kardabel.png'
import arrowDownWhite from '../../assets/icons/chevron-down-solid-white.svg'
import arrowUpGold from '../../assets/icons/chevron-up-solid-gold.svg'

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

  const handleClickClose = () => {
    setSubmenu1(false)
    setSubmenu2(false)
  }
  const handleClickServices = () => {
    setSubmenu1(!submenu1)
    setSubmenu2(false)
  }
  const handleClickPortfolios = () => {
    setSubmenu2(!submenu2)
    setSubmenu1(false)
  }

  return (
    <HeaderStyle>
      <DivHeaderContent>
        <Link to="/">
          <ImgStyle src={logo} alt="logo" />
        </Link>
        <NavStyle>
          <NavLinkStyle
            to="/"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            onClick={() => handleClickClose}
          >
            L'Agence
          </NavLinkStyle>
          <NavLinkStyle
            to="/services"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            onClick={() => handleClickServices()}
          >
            Services
          </NavLinkStyle>
          <DivDropdownSubmenu>
            <ImgMenuArrow
              src={submenu1 ? arrowUpGold : arrowDownWhite}
              alt="accès au sous-menu"
              onClick={() => handleClickServices()}
            />
            {submenu1 && <SubMenuServices />}
          </DivDropdownSubmenu>
          <NavLinkStyle
            to="/portfolios"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            onClick={() => handleClickPortfolios()}
          >
            Portfolios
          </NavLinkStyle>
          <DivDropdownSubmenu>
            <ImgMenuArrow
              src={submenu2 ? arrowUpGold : arrowDownWhite}
              alt="accès au sous-menu"
              onClick={() => handleClickPortfolios()}
            />
            {submenu2 && <SubMenuPortfolios />}
          </DivDropdownSubmenu>

          <NavLinkStyle
            to="/contact"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            onClick={() => handleClickClose()}
          >
            Contact
          </NavLinkStyle>
        </NavStyle>
      </DivHeaderContent>
    </HeaderStyle>
  )
}

export default Header
