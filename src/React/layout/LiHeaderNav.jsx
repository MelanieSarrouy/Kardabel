/* IMPORTS */

import React from 'react'
import PropTypes from 'prop-types'
// styles imports
import { NavLinkStyle, PNav } from '../../styles/layout/liHeaderNav'

// JSX // _________________________________________________________________

/**
 * LiHeaderNav component to display website's Li Header nav elements
 * @name LiHeaderNav
 * @param {object} props
 * @returns {?JSX}
 */

const LiHeaderNav = (props) => {
  return (
    <li>
      <div onClick={props.onClick}>
        {props.link ? (
          <NavLinkStyle
            to={props.to}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            {props.name}
          </NavLinkStyle>
        ) : props.active ? (
          <PNav className="active">{props.name}</PNav>
        ) : (
          <PNav className="">{props.name}</PNav>
        )}
      </div>
      {props.children}
    </li>
  )
}

// PROPTYPES // ___________________________________________________________

LiHeaderNav.propTypes = {
  onClick: PropTypes.func.isRequired,
  link: PropTypes.bool.isRequired,
  to: PropTypes.string,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

// EXPORT // ______________________________________________________________

export default LiHeaderNav
