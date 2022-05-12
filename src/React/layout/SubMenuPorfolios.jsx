import React from 'react'
import { useLocation } from 'react-router-dom'
import { createLink } from '../../helpers/createLink'
import { SubNavLinkStyle, SubNavLinkStyleActive, UlSubMenu } from '../../styles/layout/subMenuServices'

const links = ['Graphisme', 'Web', 'Android']
const name = 'portfolios'
const prefixeName = 'portfolio-'


const SubMenuPortfolios = () => {
  const sampleLocation = useLocation()
  const location = sampleLocation.pathname

  return (
    <UlSubMenu>
          {links.map((element, index) => (
        <li key={index}>
          {location === createLink(element, name, prefixeName) ? (
            <SubNavLinkStyleActive to="/services">{element}</SubNavLinkStyleActive>
          ) : (
            <SubNavLinkStyle to={createLink(element, name, prefixeName)}>
              {element}
            </SubNavLinkStyle>
          )}
        </li>
      ))}
    </UlSubMenu>
  )
}

export default SubMenuPortfolios
