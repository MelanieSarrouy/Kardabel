import React, { useState } from 'react'
import { NewlineText } from '../../../helpers/newLineText'
import colors from '../../../styles/bases/colors'
import {
  PTextBenefitCard,
  PTitleBenefitCard,
} from '../../../styles/components/4pagesService/benefitsComponent'
import {
  DivServicesBackground,
  DivServicesCardsBackground,
  DivServicesIntro,
} from '../../../styles/components/4pagesService/servicesComponent'
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
                  <PTextBenefitCard>{NewlineText(element.details)}</PTextBenefitCard>
                </DivServicesCardsBackground>
              ) : (
                <DivServicesCardsBackground
                  bckColor="white"
                  circle={props.circle}
                >
                  <PTitleBenefitCard>{NewlineText(element.name)}</PTitleBenefitCard>
                </DivServicesCardsBackground>
              )}
            </div>
          ))}
      </DivServicesBackground>
    </section>
  )
}

export default ServicesComponent
