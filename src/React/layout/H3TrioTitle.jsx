/* IMPORTS */

import React from 'react'
import PropTypes from 'prop-types'
// assets imports
import trioBleu from '../../assets/icons/trio-bleu.svg'
// styles imports
import { DivH3Title, H3TitleStyle, SvgH3Trio } from '../../styles/layout/h3TrioTitle'

// JSX // _________________________________________________________________

/**
 * H3TrioTitle component to display website's H3 title with 'trio' illustration
 * @name H3TrioTitle
 * @param {object} props
 * @returns {?JSX}
 */

 const H3TrioTitle = (props) => {
  return (
    <DivH3Title>
      <SvgH3Trio src={trioBleu} alt="deco" />
      <H3TitleStyle>{props.title}</H3TitleStyle>
    </DivH3Title>
  )
}

// PROPTYPES // ___________________________________________________________

H3TrioTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

// EXPORT // ______________________________________________________________

export default H3TrioTitle
