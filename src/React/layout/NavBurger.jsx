import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import burgerNormal from '../../assets/icons/hamburge-normal.svg'
import burgerActive from '../../assets/icons/icons8-close-92.svg'
import arrowDownWhite from '../../assets/icons/chevron-down-solid-white.svg'
import arrowDownBlue from '../../assets/icons/chevron-down-solid-blue.svg'

import arrowUpBlue from '../../assets/icons/chevron-up-solid-blue.svg'

import SubMenuMobile from './SubMenuMobile'
import {
  BurgerContainer,
  ImgBurger,
  NavBurgerContainer,
  UlMenuBurger,
  NavLinkBurgerStyle,
  NavLinkBurgerStyleActive,
} from '../../styles/layout/navBurger'
import { ImgMenuArrow } from '../../styles/layout/header'

const NavBurger = () => {
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

  const [isOpen, setIsOpen] = useState(false)
  const sampleLocation = useLocation()
  const location = sampleLocation.pathname

  return (
    <BurgerContainer>
      <NavBurgerContainer>
        <ImgBurger
          src={isOpen ? burgerActive : burgerNormal}
          alt="burger navigation"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen ? (
          <UlMenuBurger>
            <li>
              <div onClick={() => handleClickClose()}>
                {location === '/' ? (
                  <NavLinkBurgerStyleActive to="/">
                    <p>L'Agence</p>
                  </NavLinkBurgerStyleActive>
                ) : (
                  <NavLinkBurgerStyle to="/">
                    <p>L'Agence</p>
                  </NavLinkBurgerStyle>
                )}
              </div>
            </li>
            <li>
              <div onClick={() => handleClickServices()}>
                {location === '/services' ? (
                  <NavLinkBurgerStyleActive to="/services">
                    <p>Services</p>
                    <ImgMenuArrow
                      src={submenu1 ? arrowUpBlue : arrowDownBlue}
                      alt="accès au sous-menu"
                    />
                  </NavLinkBurgerStyleActive>
                ) : (
                  <NavLinkBurgerStyle to="/services">
                    <p>Services</p>
                    <ImgMenuArrow
                      src={submenu1 ? arrowUpBlue : arrowDownWhite}
                      alt="accès au sous-menu"
                    />
                  </NavLinkBurgerStyle>
                )}
              </div>
              {submenu1 ? (
                <SubMenuMobile
                  links={['Identité', 'Print', 'Web', 'Android']}
                  name={'services'}
                  prefixeName={''}
                  suffixeName={'#card'}
                />
              ) : (
                ''
              )}
            </li>
            <li>
              <div onClick={() => handleClickPortfolios()}>
                {location === '/portfolios' ? (
                  <NavLinkBurgerStyleActive to="/portfolios">
                    <p>Portfolios</p>
                    <ImgMenuArrow
                      src={submenu2 ? arrowUpBlue : arrowDownBlue}
                      alt="accès au sous-menu"
                    />
                  </NavLinkBurgerStyleActive>
                ) : (
                  <NavLinkBurgerStyle to="/portfolios">
                    <p>Portfolios</p>
                    <ImgMenuArrow
                      src={submenu2 ? arrowUpBlue : arrowDownWhite}
                      alt="accès au sous-menu"
                    />
                  </NavLinkBurgerStyle>
                )}
              </div>
              {submenu2 ? (
                <SubMenuMobile
                  links={['Graphisme', 'Web', 'Android']}
                  name={'portfolios'}
                  prefixeName={'portfolio-'}
                  suffixeName={'#gallery'}
                />
              ) : (
                ''
              )}
            </li>
            <li>
              <div onClick={() => handleClickClose()}>
                {location === '/contact' ? (
                  <NavLinkBurgerStyleActive to="/contact">
                    <p>Contact</p>
                  </NavLinkBurgerStyleActive>
                ) : (
                  <NavLinkBurgerStyle to="/contact">
                    <p>Contact</p>
                  </NavLinkBurgerStyle>
                )}
              </div>
            </li>
          </UlMenuBurger>
        ) : (
          ''
        )}
      </NavBurgerContainer>
    </BurgerContainer>
  )
}

export default NavBurger
