import React from 'react'
import ServiceH3Card from './ServiceH3Card'
import WhyComponent from './WhyComponent'
import { datasWeb } from '../../../datas/datasWeb'
import BenefitsComponent from './BenefitsComponent'
import ServicesComponent from './ServicesComponent'
import circle from '../../../assets/shapes/EllipseLightGold.svg'


const Web = () => {
  return (
    <>
      <ServiceH3Card
        color={datasWeb.colors.normal}
        h3Illustration={datasWeb.illustrations.title}
        h3Title={datasWeb.title}
        illustrationCard={datasWeb.illustrations.illustration}
        colorbtnhover={datasWeb.colors.normal}
      />
      <WhyComponent
        title={datasWeb.subtitles.why.title}
        id="kesako"
        bck={datasWeb.subtitles.why.background}
        color={datasWeb.colors.light}
        content={datasWeb.subtitles.why.content}
      />
      <BenefitsComponent
        cards={datasWeb.subtitles.benefits.cards}
        title={datasWeb.subtitles.benefits.title}
        id="avantages"
        color={datasWeb.colors.normal}
        benefits={datasWeb.subtitles.benefits.cards}
      />
      <ServicesComponent
        title={datasWeb.subtitles.services.title}
        id="prestations"
        intro={datasWeb.subtitles.services.intro}
        bck={datasWeb.subtitles.services.background}
        bckSize='cover'
        services={datasWeb.subtitles.services.services}
        circle={circle}
      />
    </>
  )
}

export default Web
