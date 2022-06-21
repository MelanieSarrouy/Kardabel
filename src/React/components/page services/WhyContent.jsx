/* IMPORTS */

import React from 'react'
import PropTypes from 'prop-types'
// helpers imports
import { NewlineText } from '../../../helpers/newLineText'
// styles imports
import {
  DivWhyContent,
  DivWhyTextContent,
} from '../../../styles/components/page services/whyContent'

// JSX // _________________________________________________________________

/**
 * WhyContent component to display section why content on 'services' page
 * @name WhyContent
 * @param {object} props
 * @returns {?JSX}
 */

 const WhyContent = (props) => {
  return (
    <DivWhyContent>
      <DivWhyTextContent color={props.color}>{NewlineText(props.content)}
      </DivWhyTextContent>
    </DivWhyContent>
  )
}

// PROPTYPES // ___________________________________________________________

WhyContent.propTypes = {
  color: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

// EXPORT // ______________________________________________________________

export default WhyContent
