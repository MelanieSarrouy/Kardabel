import React from 'react'
import { useLocation } from 'react-router-dom'
import { createLink } from '../../helpers/createLink'
import { SubNavLinkStyle, SubNavLinkStyleActive, UlSubMenu } from '../../styles/layout/subMenuServices'

const links = ['Identité', 'Print', 'Web', 'Android']
const name = 'services'
const prefixeName = ''
const suffixeName = '#card'
const empty = ''


const SubMenuServices = () => {
  const sampleLocation = useLocation()
  const location = sampleLocation.pathname

  return (
    <UlSubMenu>
      {links.map((element, index) => (
        <li key={index}>
          {location === createLink(element, name, prefixeName, empty) ? (
            <SubNavLinkStyleActive to="/services">{element}</SubNavLinkStyleActive>
          ) : (
            <SubNavLinkStyle to={createLink(element, name, prefixeName, suffixeName)}>
              {element}
            </SubNavLinkStyle>
          )}
        </li>
      ))}
    </UlSubMenu>
  )
}

export default SubMenuServices
