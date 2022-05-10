import React from 'react'
import { NavLinkStyle } from '../../styles/layout/header'
import { UlSubMenu } from '../../styles/layout/subMenuServices'

const SubMenuPortfolios = () => {
  return (
    <UlSubMenu>
      <li>
        <NavLinkStyle
          to="portfolios/portfolio-graphisme"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Graphisme
        </NavLinkStyle>
      </li>
      <li>
        <NavLinkStyle
          to="portfolios/portfolio-web"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Web
        </NavLinkStyle>
      </li>
      <li>
        <NavLinkStyle
          to="portfolios/portfolio-android"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Android
        </NavLinkStyle>
      </li>
    </UlSubMenu>
  )
}

export default SubMenuPortfolios
