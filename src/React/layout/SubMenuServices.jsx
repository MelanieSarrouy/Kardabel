import React from 'react'
import { NavLinkStyle } from '../../styles/layout/header'
import { UlSubMenu } from '../../styles/layout/subMenuServices'

const SubMenuServices = () => {
  return (
    <UlSubMenu>
      <li>
        <NavLinkStyle
          to="services/identite"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Identité
        </NavLinkStyle>
      </li>
      <li>
        <NavLinkStyle
          to="services/print"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Print
        </NavLinkStyle>
      </li>
      <li>
        <NavLinkStyle
          to="services/web"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Web
        </NavLinkStyle>
      </li>
      <li>
        <NavLinkStyle
          to="services/android"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Android
        </NavLinkStyle>
      </li>
    </UlSubMenu>
  )
}

export default SubMenuServices
