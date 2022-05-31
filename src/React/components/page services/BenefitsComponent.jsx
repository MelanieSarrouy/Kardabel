import React, { useState } from 'react'
import H4Title from '../../layout/H4Title'
import { DivH4Content } from '../../../styles/components/page services/whyComponent'
import colors from '../../../styles/bases/colors'
import {
  DivBenefitsCards,
  DivCard,
  DivNoCard,
  PTextBenefitCard,
  PTitleBenefitCard,
} from '../../../styles/components/page services/benefitsComponent'
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
                  <DivCard bck={'yes'} color={colors.background}>
                    <PTextBenefitCard>{NewlineText(element.content)}</PTextBenefitCard>
                  </DivCard>
                ) : (
                  <DivCard bck={'no'} color={props.color}>
                    <div>
                      <PTitleBenefitCard color={props.color}>
                        {NewlineText(element.title)}
                      </PTitleBenefitCard>
                    </div>
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
