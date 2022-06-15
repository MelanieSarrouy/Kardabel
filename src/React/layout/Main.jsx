/* IMPORTS */

import React from 'react'
import PropTypes from 'prop-types'
// components imports
import Hero from './Hero'
import ScrollButton from './ScrollButton'

// JSX // _________________________________________________________________

/**
 * Main component to display website's Main element
 * @name Main
 * @param {object} props
 * @returns {?JSX}
 */

export const Main = (props) => {
  return (
    <main id="top-main">
      <Hero />
      <ScrollButton />
      <div>{props.children}</div>
    </main>
  )
}

// PROPTYPES // ___________________________________________________________

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

// EXPORT // ______________________________________________________________

export default Main
