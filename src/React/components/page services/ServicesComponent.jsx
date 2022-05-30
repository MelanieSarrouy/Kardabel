import React, { useState } from 'react'
import { NewlineText } from '../../../helpers/newLineText'
import colors from '../../../styles/bases/colors'
import {
  DivServicesBackground,
  DivServicesCardsBackground,
  DivServicesIntro,
  PTitleServicesCard,
  PTextServicesCard
} from '../../../styles/components/page services/servicesComponent'
import H4Title from '../../layout/H4Title'

const ServicesComponent = (props) => {
  const [flipped, setFlipped] = useState(-1)

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
        {props.services !== '' &&
          props.services.map((element, index) => (
            <div key={index} onClick={() => handleClick(index)}>
              {flipped === index ? (
                <DivServicesCardsBackground
                  bckColor={colors.background}
                >
                  <PTextServicesCard>{NewlineText(element.details)}</PTextServicesCard>
                </DivServicesCardsBackground>
              ) : (
                <DivServicesCardsBackground
                  bckColor="white"
                  circle={props.circle}
                >
                  <PTitleServicesCard>{NewlineText(element.name)}</PTitleServicesCard>
                </DivServicesCardsBackground>
              )}
            </div>
          ))}
      </DivServicesBackground>
    </section>
  )
}

export default ServicesComponent
