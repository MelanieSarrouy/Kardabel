import React from 'react'
import ServiceH3Card from './ServiceH3Card'
import WhyComponent from './WhyComponent'
import { datasAndroid } from '../../../datas/datasAndroid'
import BenefitsComponent from './BenefitsComponent'
import ServicesComponent from './ServicesComponent'

const Android = () => {
  return (
    <>
      <ServiceH3Card
        color={datasAndroid.colors.normal}
        h3Illustration={datasAndroid.illustrations.title}
        h3Title={datasAndroid.title}
        illustrationCard={datasAndroid.illustrations.illustration}
      />
      <WhyComponent
        title={datasAndroid.subtitles.why.title}
        id="pourquoi"
        side={datasAndroid.subtitles.why.side}
        circle={datasAndroid.subtitles.why.background}
        color={datasAndroid.colors.light}
        content={datasAndroid.subtitles.why.content}
      />
      <BenefitsComponent
        cards={datasAndroid.subtitles.benefits.cards}
        title={datasAndroid.subtitles.benefits.title}
        id="avantages"
        color={datasAndroid.colors.normal}
        benefits={datasAndroid.subtitles.benefits.cards}
      />
      <ServicesComponent
        title={datasAndroid.subtitles.services.title}
        id="prestations"
        intro={datasAndroid.subtitles.services.intro}
        bck={datasAndroid.subtitles.services.background}
        services={datasAndroid.subtitles.services.services}
      />
    </>
  )
}

export default Android
