/* IMPORTS */

import React from 'react'
// data imports
import { datasAndroid } from '../../../datas/services/services-android/datasAndroid'
// components imports
import ServiceH3Card from './ServiceH3Card'
import WhyComponent from './WhyComponent'
import BenefitsComponent from './BenefitsComponent'
import ServicesComponent from './ServicesComponent'

// JSX // _________________________________________________________________

/**
 * Android component to display android services page
 * @name Android
 * @returns {?JSX}
 */

const Android = () => {
  return (
    <>
      <ServiceH3Card
        color={datasAndroid.colors.normal}
        h3Illustration={datasAndroid.illustrations.title}
        h3Title={datasAndroid.title}
        illustrationCard={datasAndroid.illustrations.illustration}
        colorbtnhover={datasAndroid.colors.normal}
      />
      <WhyComponent
        title={datasAndroid.subtitles.why.title}
        id="kesako"
        bck={datasAndroid.subtitles.why.background}
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
        bckSize='contain'
        services={datasAndroid.subtitles.services.services}
      />
    </>
  )
}

// EXPORT // ______________________________________________________________

export default Android
