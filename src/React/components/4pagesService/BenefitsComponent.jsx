import React, { useState } from 'react'
import H4Title from '../../layout/H4Title'
import { DivH4Content } from './WhyComponent'
import { datasIdentity } from '../../../datas/datasIdentity'
import styled from 'styled-components'
import logoBenefitCard from '../../../assets/logo/logo-benefits-cards.svg'
import colors from '../../../styles/bases/colors'

export const DivBenefitsCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  row-gap: 3rem;
`
export const DivCard = styled.div`
  background: no-repeat center center url(${logoBenefitCard});
  background: ${(props) =>
    props.bck === 'yes' ? `no-repeat center center url(${logoBenefitCard})` : 'none'};
  background-color: ${(props) => props.color};
  background-size: 30%;
  border-radius: 1.5rem;
  padding: 3rem 4rem 3rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  & > p {
    text-align: center;
  }
`
export const PTitleBenefitCard = styled.p`
  font-size: 2.2rem;
  text-transform: uppercase;
  font-weight: 600;
`
export const PTextBenefitCard = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.2rem;
`

const cards = datasIdentity.subtitles.benefits.cards
const BenefitsComponent = (props) => {
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
            <DivCard bck={'no'} color={colors.color1} onClick={() => handleClick(0)}>
              <PTitleBenefitCard>{cards[0].title}</PTitleBenefitCard>
            </DivCard>
          )}
          {card1 ? (
            <DivCard bck={'yes'} color={colors.tertiary} onClick={() => handleClick(1)}>
              <PTextBenefitCard>{cards[1].content}</PTextBenefitCard>
            </DivCard>
          ) : (
            <DivCard bck={'no'} color={colors.color1} onClick={() => handleClick(1)}>
              <PTitleBenefitCard>{cards[1].title}</PTitleBenefitCard>
            </DivCard>
          )}
          {card2 ? (
            <DivCard bck={'yes'} color={colors.tertiary} onClick={() => handleClick(2)}>
              <PTextBenefitCard>{cards[2].content}</PTextBenefitCard>
            </DivCard>
          ) : (
            <DivCard bck={'no'} color={colors.color1} onClick={() => handleClick(2)}>
              <PTitleBenefitCard>{cards[2].title}</PTitleBenefitCard>
            </DivCard>
          )}
          {card3 ? (
            <DivCard bck={'yes'} color={colors.tertiary} onClick={() => handleClick(3)}>
              <PTextBenefitCard>{cards[3].content}</PTextBenefitCard>
            </DivCard>
          ) : (
            <DivCard bck={'no'} color={colors.color1} onClick={() => handleClick(3)}>
              <PTitleBenefitCard>{cards[3].title}</PTitleBenefitCard>
            </DivCard>
          )}
        </DivBenefitsCards>
      </DivH4Content>
    </section>
  )
}

export default BenefitsComponent
