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

const BenefitsComponent = (props) => {
  const cards = props.cards
  const [card0, setCard0] = useState(false)
  const [card1, setCard1] = useState(false)
  const [card2, setCard2] = useState(false)
  const [card3, setCard3] = useState(false)
  const [verso, setVerso] = useState(false)

  const cardsCloseFunction = () => {
    setCard0(false)
    setCard1(false)
    setCard2(false)
    setCard3(false)
    setVerso(false)
  }
  const cardOpenFunction = (index) => {
    setVerso(true)
    setCard0(false)
    setCard1(false)
    setCard2(false)
    setCard3(false)
    let setCards = [setCard0, setCard1, setCard2, setCard3]
    setCards[index](true)
  }

  const handleClick = (index) => {
    verso ? cardsCloseFunction() : cardOpenFunction(index)
  }

  return (
    <section>
      <H4Title id={props.id} title={props.title} />
      <DivH4Content>
        <DivBenefitsCards>
          {card0 ? (
            <DivCard bck={'yes'} color={colors.tertiary} onClick={() => handleClick(0)}>
              <PTextBenefitCard>{cards[0].content}</PTextBenefitCard>
            </DivCard>
          ) : (
            <DivCard bck={'no'} color={props.color} onClick={() => handleClick(0)}>
              <PTitleBenefitCard>{cards[0].title}</PTitleBenefitCard>
            </DivCard>
          )}
          {card1 ? (
            <DivCard bck={'yes'} color={colors.tertiary} onClick={() => handleClick(1)}>
              <PTextBenefitCard>{cards[1].content}</PTextBenefitCard>
            </DivCard>
          ) : (
            <DivCard bck={'no'} color={props.color} onClick={() => handleClick(1)}>
              <PTitleBenefitCard>{cards[1].title}</PTitleBenefitCard>
            </DivCard>
          )}
          {card2 ? (
            <DivCard bck={'yes'} color={colors.tertiary} onClick={() => handleClick(2)}>
              <PTextBenefitCard>{cards[2].content}</PTextBenefitCard>
            </DivCard>
          ) : (
            <DivCard bck={'no'} color={props.color} onClick={() => handleClick(2)}>
              <PTitleBenefitCard>{cards[2].title}</PTitleBenefitCard>
            </DivCard>
          )}
          {cards[3].title === '' ? (
            <DivNoCard>
              {cards[3].content.map((element, index) => (
                <PTextBenefitCard key={index}>{element}</PTextBenefitCard>
              ))}{' '}
            </DivNoCard>
          ) : card3 ? (
            <DivCard bck={'yes'} color={colors.tertiary} onClick={() => handleClick(3)}>
              <PTextBenefitCard>{cards[3].content}</PTextBenefitCard>
            </DivCard>
          ) : (
            <DivCard bck={'no'} color={props.color} onClick={() => handleClick(3)}>
              <PTitleBenefitCard>{cards[3].title}</PTitleBenefitCard>
            </DivCard>
          )}
        </DivBenefitsCards>
      </DivH4Content>
    </section>
  )
}

export default BenefitsComponent
