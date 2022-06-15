/* IMPORTS */

import React from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
// helpers imports
import { createLink } from '../../helpers/createLink'
// styles imports
import colors from '../../styles/bases/colors'
import { SubNavLinkStyle, SubNavLinkStyleActive } from '../../styles/layout/subMenuDesktop'
import { UlSubMenuMobile } from '../../styles/layout/subMenuMobile'

// JSX // _________________________________________________________________

/**
 * SubMenuMobile component to display the submenu of a website on a mobile device.
 * @name SubMenuMobile
 * @param {object} props
 * @returns {?JSX}
 */

 const SubMenuMobile = (props) => {
  const sampleLocation = useLocation()
  const location = sampleLocation.pathname
  
  const links = props.links
  const name = props.name
  const prefixeName = props.prefixeName
  const suffixeName = props.suffixeName
  const onClick = props.onClick

  return (
    <UlSubMenuMobile onClick={onClick}>
      {links.map((element, index) => (
        <li key={index}>
          {location === createLink(element, name, true, prefixeName, '') ? (
            <SubNavLinkStyleActive color={colors.tertiary} to={createLink(element, name, true, prefixeName, suffixeName)}>
              {element}
            </SubNavLinkStyleActive>
          ) : (
            <SubNavLinkStyle to={createLink(element, name, true, prefixeName, suffixeName)}>
              {element}
            </SubNavLinkStyle>
          )}
        </li>
      ))}
    </UlSubMenuMobile>
  )
}

// PROPTYPES // ___________________________________________________________

SubMenuMobile.propTypes = {
  links: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  prefixeName: PropTypes.string.isRequired,
  suffixeName: PropTypes.string.isRequired
}

// EXPORT // ______________________________________________________________

export default SubMenuMobile
