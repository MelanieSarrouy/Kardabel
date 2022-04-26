import React from 'react'
import ServiceH3Card from './ServiceH3Card'
import WhyComponent from './WhyComponent'
import { datasIdentity } from '../../../datas/datasIdentity'
import BenefitsComponent from './BenefitsComponent'

const Identity = () => {
  return (
    <>
      <ServiceH3Card
        color={datasIdentity.colors.normal}
        h3Illustration={datasIdentity.illustrations.title}
        h3Title={datasIdentity.title}
        illustrationCard={datasIdentity.illustrations.illustration}
      />
      <WhyComponent
        title={datasIdentity.subtitles.why.title}
        id="pourquoi"
        circle={datasIdentity.subtitles.why.background}
        color={datasIdentity.colors.light}
        content={datasIdentity.subtitles.why.content}
      />
      <BenefitsComponent title={datasIdentity.subtitles.benefits.title} id="avantages" />
    </>
  )
}

export default Identity
