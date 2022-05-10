import React, { useState } from 'react'
import H4Title from '../../layout/H4Title'
import { DivH4Content } from '../../../styles/components/4pagesService/whyComponent'
import colors from '../../../styles/bases/colors'
import {
  DivBenefitsCards,
  DivCard,
  DivNoCard,
  PTextBenefitCard,
  PTitleBenefitCard,
} from '../../../styles/components/4pagesService/benefitsComponent'
import { NewlineText } from '../../../helpers/newLineText'

const BenefitsComponent = (props) => {
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
      <DivH4Content>
        <DivBenefitsCards>
          {props.benefits.map((element, index) =>
            element.title !== '' ? (
              <div key={index} onClick={() => handleClick(index)}>
                {flipped === index ? (
                  <DivCard
                    bck={'yes'}
                    color={colors.tertiary}
                    scale={1.05}
                    scaleHover={1}
                  >
                    <PTextBenefitCard>{NewlineText(element.content)}</PTextBenefitCard>
                  </DivCard>
                ) : (
                  <DivCard
                    bck={'no'}
                    color={props.color}
                    scale={1}
                    scaleHover={1.05}
                  >
                    <PTitleBenefitCard>{NewlineText(element.title)}</PTitleBenefitCard>
                  </DivCard>
                )}
              </div>
            ) : (
              <DivNoCard key={index}>
                <PTextBenefitCard>{NewlineText(element.content)}</PTextBenefitCard>
              </DivNoCard>
            )
          )}
        </DivBenefitsCards>
      </DivH4Content>
    </section>
  )
}

export default BenefitsComponent
