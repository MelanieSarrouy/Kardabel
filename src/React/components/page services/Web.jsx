/* IMPORTS */

import React from 'react'
// data imports
import { datasWeb } from '../../../datas/services/services-web/datasWeb'
// assets imports
import circle from '../../../assets/shapes/EllipseLightGold.svg'
// components imports
import ServiceH3Card from './ServiceH3Card'
import WhyComponent from './WhyComponent'
import BenefitsComponent from './BenefitsComponent'
import ServicesComponent from './ServicesComponent'

// JSX // _________________________________________________________________

/**
 * Web component to display web services page
 * @name Web
 * @returns {?JSX}
 */

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
          bckSize="cover"
          services={datasWeb.subtitles.services.services}
          circle={circle}
        />
      </>
    )
}

// EXPORT // ______________________________________________________________

export default Web
