// IMPORTS // ______________________________________________________________

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// components imports
import SubMenuMobile from './SubMenuMobile'
// assets imports
import burgerNormal from '../../assets/icons/hamburge-normal.svg'
import close from '../../assets/icons/icons8-close-92.svg'
// styles imports
import {
  BurgerContainer,
  ImgBurger,
  NavBurgerContainer,
  UlMenuBurger,
} from '../../styles/layout/navBurger'
import LiHeaderNavMobile from './LiHeaderNavMobile'

// JSX // _________________________________________________________________

/**
 * Navurger component to display navigation with small devices (smartphones and tablets)
 * @name NavBurger *
 * @returns {?JSX}
 */

const NavBurger = () => {
  const [submenu1, setSubmenu1] = useState(false)
  const [submenu2, setSubmenu2] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [agenceActive, setAgenceActive] = useState(false)
  const [servicesActive, setServicesActive] = useState(false)
  const [portfoliosActive, setPortfoliosActive] = useState(false)
  const [contactActive, setContactActive] = useState(false)

  const sampleLocation = useLocation()
  const path = sampleLocation.pathname
  const arrayPath = path.split('/')
  const location = arrayPath[1]

  /* When pathname change, burger nav style change too */
  useEffect(() => {
    if (location === '') {
      setAgenceActive(true)
      setServicesActive(false)
      setPortfoliosActive(false)
      setContactActive(false)
    }
    if (location === 'services') {
      setAgenceActive(false)
      setServicesActive(true)
      setPortfoliosActive(false)
      setContactActive(false)
    }
    if (location === 'portfolios') {
      setAgenceActive(false)
      setPortfoliosActive(true)
      setServicesActive(false)
      setContactActive(false)
    }
    if (location === 'contact') {
      setAgenceActive(false)
      setPortfoliosActive(false)
      setServicesActive(false)
      setContactActive(true)
    }
  }, [location])

/* A function that is called when the user clicks on the close button. */
  const handleClickClose = () => {
    setSubmenu1(false)
    setSubmenu2(false)
    setIsOpen(false)
  }
/* A function that is called when the user clicks on the services button. */
  const handleClickServices = () => {
    setSubmenu1(!submenu1)
    setSubmenu2(false)
  }
/* A function that is called when the user clicks on the portfolios button. */
  const handleClickPortfolios = () => {
    setSubmenu2(!submenu2)
    setSubmenu1(false)
  }

  return (
    <BurgerContainer>
      <NavBurgerContainer>
        <ImgBurger
          src={isOpen ? close : burgerNormal}
          alt="burger navigation"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <UlMenuBurger>
            <LiHeaderNavMobile
              onClick={() => handleClickClose()}
              to="/"
              name="L'Agence"
              link={true}
              active={agenceActive}
            ></LiHeaderNavMobile>
            <LiHeaderNavMobile
              onClick={() => handleClickServices()}
              name="Services"
              link={false}
              active={servicesActive}
            >
              {submenu1 && 
                <SubMenuMobile
                  onClick={() => setIsOpen(!isOpen)}
                  links={['Identité', 'Print', 'Web', 'Android']}
                  name={'services'}
                  prefixeName={''}
                  suffixeName={'#card'}
                />
              }
            </LiHeaderNavMobile>
            <LiHeaderNavMobile
              onClick={() => handleClickPortfolios()}
              name="Portfolios"
              link={false}
              active={portfoliosActive}
            >
              {submenu2 && 
                <SubMenuMobile
                  onClick={() => setIsOpen(!isOpen)}
                  links={['Graphisme', 'Web', 'Android']}
                  name={'portfolios'}
                  prefixeName={'portfolio-'}
                  suffixeName={'#gallery'}
                />
              }
            </LiHeaderNavMobile>
            <LiHeaderNavMobile
              onClick={() => handleClickClose()}
              to="/contact"
              name="Contact"
              link={true}
              active={contactActive}
            ></LiHeaderNavMobile>
          </UlMenuBurger>
        )}
      </NavBurgerContainer>
    </BurgerContainer>
  )
}

// EXPORTS // ______________________________________________________________

export default NavBurger
