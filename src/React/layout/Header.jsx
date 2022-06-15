/* IMPORTS */

import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
// components imports
import NavBurger from './NavBurger'
import SubMenuDesktop from './SubMenuDesktop'
import LiHeaderNav from './LiHeaderNav'
// assets imports
import logo from '../../assets/logo/kardabel.png'
// styles imports
import { HeaderStyle, DivHeaderContent, ImgStyle, NavStyle } from '../../styles/layout/header'

// JSX // _________________________________________________________________

/**
 * Header component to display website's Header
 * @name Header
 * @returns {?JSX}
 */

const Header = () => {
  const [submenu1, setSubmenu1] = useState(false)
  const [submenu2, setSubmenu2] = useState(false)
  const [servicesActive, setServicesActive] = useState(false)
  const [portfoliosActive, setPortfoliosActive] = useState(false)

  const sampleLocation = useLocation()
  const path = sampleLocation.pathname
  const arrayPath = path.split('/')
  const location = arrayPath[1]

/* When pathname location change, 'services' and 'portfolios' style change too */
  useEffect(() => {
    if (location === 'services') {
      setServicesActive(true)
      setPortfoliosActive(false)    }
    if (location === 'portfolios') {
      setPortfoliosActive(true)
      setServicesActive(false)
    }
    if (location !== 'services' &&  location !== 'portfolios') {
      setServicesActive(false)
      setPortfoliosActive(false)    
    }
  }, [location])

  /* To close dropdowns when the user clicks on the logo. */
  const handleClickClose = () => {
    setSubmenu1(false)
    setSubmenu2(false)
  }
  /* To open Services dropdown and close Portfolios dropdown */
  const handleClickServices = () => {
    setSubmenu1(true)
    setSubmenu2(false)
  }
  /* To open Portfolios dropdown and close Services dropdown */
  const handleClickPortfolios = () => {
    setSubmenu2(true)
    setSubmenu1(false)
  }
  /* To close dropdowns when the user clicks on the header. */
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
            <LiHeaderNav
              onClick={() => handleClickClose()}
              link={true}
              to="/"
              name="L'Agence"
            ></LiHeaderNav>
            <LiHeaderNav
              onClick={() => handleClickServices()}
              link={false}
              active={servicesActive}
              name="Services"
            >
              {submenu1 && (
                <SubMenuDesktop
                  links={['Identité', 'Print', 'Web', 'Android']}
                  name={'services'}
                  prefixeName={''}
                  suffixeName={'#card'}
                />
              )}
            </LiHeaderNav>
            <LiHeaderNav
              onClick={() => handleClickPortfolios()}
              link={false}
              active={portfoliosActive}
              name="Portfolios"
            >
              {submenu2 && (
                <SubMenuDesktop
                  links={['Graphisme', 'Web', 'Android']}
                  name={'portfolios'}
                  prefixeName={'portfolio-'}
                  suffixeName={'#gallery'}
                />
              )}
            </LiHeaderNav>
            <LiHeaderNav
              onClick={() => handleClickClose()}
              link={true}
              to="/contact"
              name="Contact"
            ></LiHeaderNav>
          </ul>
        </NavStyle>
        <NavBurger />
      </DivHeaderContent>
    </HeaderStyle>
  )
}

// EXPORT // ______________________________________________________________

export default Header
