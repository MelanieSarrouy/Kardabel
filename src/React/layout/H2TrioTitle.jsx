/* IMPORTS */

import React from 'react'
import PropTypes from 'prop-types'
// assets imports
import trioDore from '../../assets/icons/trio-dore.svg'
// styles imports
import { DivH2Title, H2TitleStyle, SvgH2Trio } from '../../styles/layout/h2TrioTitle'

// JSX // _________________________________________________________________

/**
 * H2TrioTitle component to display website's H2 title with 'trio' illustration
 * @name H2TrioTitle
 * @param {object} props
 * @returns {?JSX}
 */

const H2TrioTitle = (props) => {
  return (
    <DivH2Title>
      <SvgH2Trio src={trioDore} alt="deco" width={82} />
      <H2TitleStyle>{props.title}</H2TitleStyle>
    </DivH2Title>
  )
}

// PROPTYPES // ___________________________________________________________

H2TrioTitle.propTypes = {
  title: PropTypes.string.isRequired
}

// EXPORT // ______________________________________________________________

export default H2TrioTitle
