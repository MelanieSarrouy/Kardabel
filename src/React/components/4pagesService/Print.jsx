import React from 'react'
import ServiceH3Card from './ServiceH3Card'
import WhyComponent from './WhyComponent'
import { datasPrint } from '../../../datas/datasPrint'
import BenefitsComponent from './BenefitsComponent'
import ChoiceComponent from './ChoiceComponent'
import H4Title from '../../layout/H4Title'
import styled from 'styled-components'
import bck from '../../../assets/illustrations/pink-background.jpg'
import circle from '../../../assets/shapes/EllipseLightGold.svg'
import { PTitleBenefitCard } from '../../../styles/components/4pagesService/benefitsComponent'

export const DivServicesBackground = styled.div`
  background: no-repeat center center url(${bck});
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(auto-fill, 22rem);
  grid-gap: 4rem;
  justify-content: center;
  align-items: center;
  padding: 10rem 7% 10rem 7%;
  margin: 4rem 0 5rem 0;
  & > div {
    background: no-repeat center center url(${circle});
    background-color: white;
    background-size: 55%;
    border-radius: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20rem;
    transition: background-size 200ms ease-in-out;
    &:hover {
      background-size: 80%;
    }
  }
`

const Print = () => {
  return (
    <>
      <ServiceH3Card
        color={datasPrint.colors.normal}
        h3Illustration={datasPrint.illustrations.title}
        h3Title={datasPrint.title}
        illustrationCard={datasPrint.illustrations.illustration}
      />
      <WhyComponent
        title={datasPrint.subtitles.why.title}
        id="pourquoi"
        side={datasPrint.subtitles.why.side}
        circle={datasPrint.subtitles.why.background}
        color={datasPrint.colors.light}
        content={datasPrint.subtitles.why.content}
      />
      <BenefitsComponent
        cards={datasPrint.subtitles.benefits.cards}
        title={datasPrint.subtitles.benefits.title}
        id="avantages"
        color={datasPrint.colors.normal}
      />
      <section>
        <H4Title id="prestations" title={datasPrint.subtitles.services.title} />
        <ChoiceComponent txt={datasPrint.subtitles.benefits.advice} />
        <DivServicesBackground>
          {datasPrint.subtitles.services.services.map((element, index) => (
            <div key={index}>
              <PTitleBenefitCard>{element.name}</PTitleBenefitCard>
            </div>
          ))}
        </DivServicesBackground>
      </section>
    </>
  )
}

export default Print
