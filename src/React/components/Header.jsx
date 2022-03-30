import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/kardabel.png'
import colors from '../../styles/bases/colors'

const HeaderStyle = styled.header`
  background-color: ${colors.primary};
  padding: 1.2rem 0 1.2rem 7%;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 6rem;
  z-index: 1000;
`
const ImgStyle = styled.img`
  max-width: 200px;
  min-width: 100px;
`
const NavStyle = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 0.5rem;
`
const NavLinkStyle = styled(NavLink)`
  font-family: 'Outfit', sans-serif;
  color: ${colors.background};
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1rem;
  padding: 0rem 1rem;
  @media (max-width: 850px) {
    font-size: .8rem;
    padding: 0rem .5rem;

  }

`

const Header = () => {
  return (
    <HeaderStyle>
        <Link to="/">
          <ImgStyle src={logo} alt="logo" />
        </Link>
        <NavStyle>
          <NavLinkStyle to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>L'Agence</NavLinkStyle>
          <NavLinkStyle to='/services' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Services</NavLinkStyle>
          <NavLinkStyle to='/portfolios' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Portfolios</NavLinkStyle>
          <NavLinkStyle to='/CV' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>CV</NavLinkStyle>
          <NavLinkStyle to='/contacts' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contacts</NavLinkStyle>
        </NavStyle>
    </HeaderStyle>
  )
}

export default Header
