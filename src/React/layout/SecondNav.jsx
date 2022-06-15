/* IMPORTS */

import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
// helpers imports
import { createLink } from '../../helpers/createLink'
// styles imports
import {
  LinkSecondaryStyle,
  LinkSecondaryStyleActive,
  NavIntro,
} from '../../styles/layout/secondNav'

// JSX // _________________________________________________________________

/**
 * SecondNav component to display website's Second Nav
 * @name SecondNav
 * @param {object} props
 * @returns {?JSX}
 */

const SecondNav = (props) => {
  const sampleLocation = useLocation()
  const location = sampleLocation.pathname

  const links = props.links
  const name = props.name
  const prefixeName = props.prefixeName
  const suffixeName = props.suffixeName

  return (
    <NavIntro>
      <ul>
        {links.map((element, index) => (
          <li key={index}>
            {location === createLink(element, name, true, prefixeName, '') ? (
              <LinkSecondaryStyleActive
                to={createLink(element, name, true, prefixeName, suffixeName)}
              >
                {element}
              </LinkSecondaryStyleActive>
            ) : (
              <LinkSecondaryStyle to={createLink(element, name, true, prefixeName, suffixeName)}>
                {element}
              </LinkSecondaryStyle>
            )}
          </li>
        ))}
      </ul>
    </NavIntro>
  )
}

// PROPTYPES // ___________________________________________________________

SecondNav.propTypes = {
  links: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  prefixeName: PropTypes.string.isRequired,
  suffixeName: PropTypes.string.isRequired
}

// EXPORT // ______________________________________________________________

export default SecondNav
