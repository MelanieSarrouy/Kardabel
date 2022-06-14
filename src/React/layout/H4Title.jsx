/* IMPORTS */

import React from 'react'
import PropTypes from 'prop-types'
// assets imports
import trio from '../../assets/icons/trio-bleu-dark.svg'
// styles imports
import { DivH4Container, H4Style, SvgH4Trio } from '../../styles/layout/h4Title'

// JSX // _________________________________________________________________

/**
 * H4Title component to display website's H4 title with 'trio' illustration
 * @name H4Title
 * @param {object} props
 * @returns {?JSX}
 */

 const H4Title = (props) => {
  return (
    <DivH4Container id={props.id}>
      <SvgH4Trio src={trio} alt="icon" />
      <H4Style>{props.title}</H4Style>
    </DivH4Container>
  )
}

// PROPTYPES // ___________________________________________________________

H4Title.propTypes = {
  title: PropTypes.string.isRequired,
}

// EXPORT // ______________________________________________________________

export default H4Title
