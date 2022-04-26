import React from 'react'
import { DivCard, PTextBenefitCard, PTitleBenefitCard } from './BenefitsComponent'

const BenefitCard = (props) => {
  return (
    <DivCard bck={props.bck} color={props.color} onClick={props.action}>
      <PTextBenefitCard>{props.elementCard.content}</PTextBenefitCard>
      <PTitleBenefitCard>{props.titleCard.title}</PTitleBenefitCard>
    </DivCard>
  )
}

export default BenefitCard
