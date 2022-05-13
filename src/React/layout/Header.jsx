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
          <ImgStyle src={logo} alt="logo" width={160} />
        </Link>
        <NavStyle>
          <ul>
            <li onClick={() => handleClickClose()}>
              <NavLinkStyle to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                L'Agence
              </NavLinkStyle>
            </li>
            <li>
              <div onClick={() => handleClickServices()}>
                <NavLinkStyle
                  to="/services"
                  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                  Services
                </NavLinkStyle>
                <DivDropdownSubmenu>
                  <ImgMenuArrow
                    src={submenu1 ? arrowUpGold : arrowDownWhite}
                    alt="accès au sous-menu"
                  />
                </DivDropdownSubmenu>
              </div>
              {submenu1 && <SubMenuServices />}
            </li>
            <li>
              <div onClick={() => handleClickPortfolios()}>
                <NavLinkStyle
                  to="/portfolios"
                  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                  Portfolios
                </NavLinkStyle>
                <DivDropdownSubmenu>
                  <ImgMenuArrow
                    src={submenu2 ? arrowUpGold : arrowDownWhite}
                    alt="accès au sous-menu"
                  />
                </DivDropdownSubmenu>
              </div>
              {submenu2 && <SubMenuPortfolios />}
            </li>
            <li onClick={() => handleClickClose()}>
              <NavLinkStyle
                to="/contact"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                Contact
              </NavLinkStyle>
            </li>
          </ul>
        </NavStyle>
      </DivHeaderContent>
    </HeaderStyle>
  )
}

export default Header
