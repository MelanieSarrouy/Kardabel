/* IMPORTS */

import React from 'react'
import PropTypes from 'prop-types'
// styles imports
import { SectionWhy, DivH4Content } from '../../../styles/components/page services/whyComponent'
// components imports
import H4Title from '../../layout/H4Title'
import WhyContent from './WhyContent'

// JSX // _________________________________________________________________

/**
 * WhyComponent component to display why section on 'services' page
 * @name WhyComponent
 * @param {object} props
 * @returns {?JSX}
 */

 const WhyComponent = (props) => {
  return (
    <SectionWhy bck={props.bck}>
      <H4Title id={props.id} title={props.title} />
      <DivH4Content>
        <WhyContent color={props.color} content={props.content} />
      </DivH4Content>
    </SectionWhy>
  )
}

// PROPTYPES // ___________________________________________________________

WhyComponent.propTypes = {
  bck: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

// EXPORT // ______________________________________________________________

export default WhyComponent
