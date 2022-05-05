import React, { useState } from 'react'
import colors from '../../../styles/bases/colors'
import {
  PTextBenefitCard,
  PTitleBenefitCard,
} from '../../../styles/components/4pagesService/benefitsComponent'
import {
  DivServicesBackground,
  DivServicesCardsBackground,
} from '../../../styles/components/4pagesService/servicesComponent'
import H4Title from '../../layout/H4Title'
import ChoiceComponent from './ChoiceComponent'

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
      <ChoiceComponent txt={props.txt} />
      <DivServicesBackground bck={props.bck}>
        {props.services.map((element, index) => (
          <div key={index} onClick={() => handleClick(index)}>
            {(flipped === index) ? (
              <DivServicesCardsBackground bckColor={colors.tertiary}>
                <PTextBenefitCard>{element.details}</PTextBenefitCard>
              </DivServicesCardsBackground>
            ) : (
              <DivServicesCardsBackground bckColor='white' circle={props.circle}>
                <PTitleBenefitCard>{element.name}</PTitleBenefitCard>
              </DivServicesCardsBackground>
            )}
          </div>
        ))}
      </DivServicesBackground>
    </section>
  )
}

export default ServicesComponent
