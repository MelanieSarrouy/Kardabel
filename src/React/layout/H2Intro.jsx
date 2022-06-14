/* IMPORTS */

import React from 'react'
import PropTypes from 'prop-types'
// components imports
import H2TrioTitle from './H2TrioTitle'
// helpers imports
import { NewlineText } from '../../helpers/newLineText'
// styles imports
import { SectionIntro, TextIntro } from '../../styles/layout/h2Intro'

// JSX // _________________________________________________________________

/**
 * H2Intro component to display website's H2 title and page introduction
 * @name Footer
 * @param {object} props
 * @returns {?JSX}
 */

const H2Intro = (props) => {
  return (
    <SectionIntro id={props.id}>
      <H2TrioTitle title={props.title} />
      <TextIntro>{NewlineText(props.content)}</TextIntro>
      {props.children}
    </SectionIntro>
  )
}

// PROPTYPES // ___________________________________________________________

H2Intro.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

// EXPORT // ______________________________________________________________

export default H2Intro
