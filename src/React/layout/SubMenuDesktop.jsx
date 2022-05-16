import React from 'react'
import { useLocation } from 'react-router-dom'
import { createLink } from '../../helpers/createLink'
import { SubNavLinkStyle, SubNavLinkStyleActive, UlSubMenu } from '../../styles/layout/subMenuDesktop'


const SubMenuDesktop = (props) => {
  const sampleLocation = useLocation()
  const location = sampleLocation.pathname
  const links = props.links
  const name = props.name
  const prefixeName = props.prefixeName
  const suffixeName = props.suffixeName
  const newLink = (name) => {
    return '/' + name
  }

  return (
    <UlSubMenu>
      {links.map((element, index) => (
        <li key={index}>
          {location === createLink(element, name, true, prefixeName, '') ? (
            <SubNavLinkStyleActive to={newLink(name)}>{element}</SubNavLinkStyleActive>
          ) : (
            <SubNavLinkStyle to={createLink(element, name, true, prefixeName, suffixeName)}>
              {element}
            </SubNavLinkStyle>
          )}
        </li>
      ))}
    </UlSubMenu>
  )
}

export default SubMenuDesktop
