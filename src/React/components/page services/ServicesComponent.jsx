/* IMPORTS */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
// helpers imports
import { NewlineText } from '../../../helpers/newLineText'
// styles imports
import colors from '../../../styles/bases/colors'
import {
  DivServicesBackground,
  DivServicesCardsBackground,
  DivServicesIntro,
  PTitleServicesCard,
  PTextServicesCard,
} from '../../../styles/components/page services/servicesComponent'
// components imports
import H4Title from '../../layout/H4Title'

// JSX // _________________________________________________________________

/**
 * ServicesComponent component to display services cards on 'services' page
 * @name ServicesComponent
 * @param {object} props
 * @returns {?JSX}
 */

const ServicesComponent = (props) => {
  const [flipped, setFlipped] = useState(-1)

  /* A function that is called when the user clicks on a card. */
  const handleClick = (id) => {
    if (flipped !== id) {
      setFlipped(id)
    } else {
      setFlipped(-1)
    }
  }
  return (
    <section>
      <H4Title id={props.id} title={props.title} />
      <DivServicesIntro>{NewlineText(props.intro)}</DivServicesIntro>
      <DivServicesBackground bck={props.bck} bckSize={props.bckSize}>
        {props.services !== [] &&
          props.services.map((element, index) => (
            <div key={index} onClick={() => handleClick(index)}>
              {flipped === index ? (
                <DivServicesCardsBackground bckColor={colors.background}>
                  <PTextServicesCard>{NewlineText(element.details)}</PTextServicesCard>
                </DivServicesCardsBackground>
              ) : (
                <DivServicesCardsBackground bckColor="white" circle={props.circle}>
                  <PTitleServicesCard>{NewlineText(element.name)}</PTitleServicesCard>
                </DivServicesCardsBackground>
              )}
            </div>
          ))}
      </DivServicesBackground>
    </section>
  )
}

// PROPTYPES // ___________________________________________________________

ServicesComponent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  bck: PropTypes.string.isRequired,
  bckSize: PropTypes.string.isRequired,
  services: PropTypes.array,
  circle: PropTypes.string,
}

// EXPORT // ______________________________________________________________

export default ServicesComponent
