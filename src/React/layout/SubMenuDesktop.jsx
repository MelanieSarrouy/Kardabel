/* IMPORTS */

import React from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
// helpers imports
import { createLink } from '../../helpers/createLink'
// styles imports
import colors from '../../styles/bases/colors'
import {
  SubNavLinkStyle,
  SubNavLinkStyleActive,
  UlSubMenu,
} from '../../styles/layout/subMenuDesktop'

// JSX // _________________________________________________________________

/**
 * SubMenuDesktop component to display the submenu of a website on a desktop device.
 * @name SubMenuDesktop
 * @param {object} props
 * @returns {?JSX}
 */

 const SubMenuDesktop = (props) => {
  const sampleLocation = useLocation()
  const location = sampleLocation.pathname

  const links = props.links
  const name = props.name
  const prefixeName = props.prefixeName
  const suffixeName = props.suffixeName

  return (
    <UlSubMenu>
      {links.map((element, index) => (
        <li key={index}>
          {location === createLink(element, name, true, prefixeName, '') ? (
            <SubNavLinkStyleActive
              color={colors.secondary}
              to={createLink(element, name, true, prefixeName, suffixeName)}
            >
              {element}
            </SubNavLinkStyleActive>
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

// PROPTYPES // ___________________________________________________________

SubMenuDesktop.propTypes = {
  links: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  prefixeName: PropTypes.string.isRequired,
  suffixeName: PropTypes.string.isRequired
}

// EXPORT // ______________________________________________________________

export default SubMenuDesktop
