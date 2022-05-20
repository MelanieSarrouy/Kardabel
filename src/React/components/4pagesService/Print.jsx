import React from 'react'
import ServiceH3Card from './ServiceH3Card'
import WhyComponent from './WhyComponent'
import { datasPrint } from '../../../datas/datasPrint'
import BenefitsComponent from './BenefitsComponent'
import circle from '../../../assets/shapes/EllipseLightGold.svg'
import ServicesComponent from './ServicesComponent'

const Print = () => {
  return (
    <>
      <ServiceH3Card
        color={datasPrint.colors.normal}
        h3Illustration={datasPrint.illustrations.title}
        h3Title={datasPrint.title}
        illustrationCard={datasPrint.illustrations.illustration}
        colorbtnhover={datasPrint.colors.normal}
      />
      <WhyComponent
        title={datasPrint.subtitles.why.title}
        id="kesako"
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
        benefits={datasPrint.subtitles.benefits.cards}
      />
      <ServicesComponent
        title={datasPrint.subtitles.services.title}
        id="prestations"
        intro={datasPrint.subtitles.services.intro}
        bck={datasPrint.subtitles.services.background}
        bckSize='cover'
        services={datasPrint.subtitles.services.services}
        circle={circle}
        circleIntro={datasPrint.subtitles.why.background}
      />
    </>
  )
}

export default Print
