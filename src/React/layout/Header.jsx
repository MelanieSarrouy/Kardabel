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
import styled from 'styled-components'
import NavBurger from './NavBurger'
import SubMenuDesktop from './SubMenuDesktop'

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
  const handleCloseDropdowns = () => {
    if (submenu1) {
      setSubmenu1(false)
    }
    if (submenu2) {
      setSubmenu2(false)
    }
  }

  return (
    <HeaderStyle onClick={() => handleCloseDropdowns()}>
      <DivHeaderContent>
        <Link to="/" onClick={() => handleClickClose()}>
          <ImgStyle src={logo} alt="logo" width={192} />
        </Link>
        <NavStyle>
          <ul>
            <li>
              <div onClick={() => handleClickClose()}>
                <NavLinkStyle
                  to="/"
                  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                  L'Agence
                </NavLinkStyle>
              </div>
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
              {submenu1 && (
                <SubMenuDesktop
                  links={['Identité', 'Print', 'Web', 'Android']}
                  name={'services'}
                  prefixeName={''}
                  suffixeName={'#card'}
                />
              )}
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
              {submenu2 && 
                <SubMenuDesktop
                  links={['Graphisme', 'Web', 'Android']}
                  name={'portfolios'}
                  prefixeName={'portfolio-'}
                  suffixeName={'#gallery'}
                />
              }
            </li>
            <li>
              <div onClick={() => handleClickClose()}>
                <NavLinkStyle
                  to="/contact"
                  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                  Contact
                </NavLinkStyle>
              </div>
            </li>
          </ul>
        </NavStyle>
        <NavBurger />
      </DivHeaderContent>
    </HeaderStyle>
  )
}

export default Header
