/* IMPORTS */

import React from 'react'
// data imports
import { datasIdentity } from '../../../datas/services/services-identity/datasIdentity'
// assets imports
import circle from '../../../assets/shapes/EllipseLightGold.svg'
// components imports
import ServiceH3Card from './ServiceH3Card'
import WhyComponent from './WhyComponent'
import BenefitsComponent from './BenefitsComponent'
import ServicesComponent from './ServicesComponent'

// JSX // _________________________________________________________________

/**
 * Identity component to display identity services page
 * @name Identity
 * @returns {?JSX}
 */

 const Identity = () => {
  
  return (
    <>
      <ServiceH3Card
        id={datasIdentity.id}
        color={datasIdentity.colors.normal}
        h3Illustration={datasIdentity.illustrations.title}
        h3Title={datasIdentity.title}
        illustrationCard={datasIdentity.illustrations.illustration}
        colorbtnhover={datasIdentity.colors.normal}
      />
      <WhyComponent
        title={datasIdentity.subtitles.why.title}
        id="kesako"
        bck={datasIdentity.subtitles.why.background}
        color={datasIdentity.colors.light}
        content={datasIdentity.subtitles.why.content}
      />
      <BenefitsComponent
        cards={datasIdentity.subtitles.benefits.cards}
        title={datasIdentity.subtitles.benefits.title}
        id="avantages"
        color={datasIdentity.colors.normal}
        benefits={datasIdentity.subtitles.benefits.cards}
      />
      <ServicesComponent 
        title={datasIdentity.subtitles.services.title}
        id="prestations"
        intro={datasIdentity.subtitles.services.intro}
        bck={datasIdentity.subtitles.services.background}
        bckSize='cover'
        services={datasIdentity.subtitles.services.services}
        circle={circle}
      />
    </>
  )
}

// EXPORT // ______________________________________________________________

export default Identity
