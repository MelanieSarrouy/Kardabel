/* IMPORTS */

import React from 'react'
import PropTypes from 'prop-types'
// styles imports
import {
  NavLinkBurgerStyle,
  NavLinkBurgerStyleActive,
  PNavMobile,
  PNavMobileActive,
} from '../../styles/layout/liHeaderNavMobile'

// JSX // _________________________________________________________________

/**
 * LiHeaderNavMobile component to display website's Li Header mobile nav elements
 * @name LiHeaderNavMobile
 * @param {object} props
 * @returns {?JSX}
 */

 const LiHeaderNavMobile = (props) => {
  return (
    <li>
      <div onClick={props.onClick}>
        {props.link ? (
          props.active ? (
            <NavLinkBurgerStyleActive to={props.to}>{props.name}</NavLinkBurgerStyleActive>
          ) : (
            <NavLinkBurgerStyle to={props.to}>{props.name}</NavLinkBurgerStyle>
          )
        ) : props.active ? (
          <PNavMobileActive>{props.name}</PNavMobileActive>
        ) : (
          <PNavMobile>{props.name}</PNavMobile>
        )}
      </div>
      {props.children}
    </li>
  )
}

// PROPTYPES // ___________________________________________________________

LiHeaderNavMobile.propTypes = {
  onClick: PropTypes.func.isRequired,
  link: PropTypes.bool.isRequired,
  to: PropTypes.string,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

// EXPORT // ______________________________________________________________

export default LiHeaderNavMobile
