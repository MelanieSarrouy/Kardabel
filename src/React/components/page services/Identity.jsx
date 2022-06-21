/* IMPORTS */

import React from 'react'
// assets imports
import circle from '../../../assets/shapes/EllipseLightGold.svg'
// components imports
import ServiceH3Card from './ServiceH3Card'
import WhyComponent from './WhyComponent'
import BenefitsComponent from './BenefitsComponent'
import ServicesComponent from './ServicesComponent'
import { useFetch } from '../../../services/API'

// JSX // _________________________________________________________________

/**
 * Identity component to display identity services page
 * @name Identity
 * @returns {?JSX}
 */

 const Identity = () => {
    /* A hook that is used to fetch data from an API. */
    const { data, isLoading, error } = useFetch(`services/identity.json`)
    if (error) {
      return <p>Oups, il y a un problème de chargement des données</p>
    }
    if (isLoading) {
      return <p>Loading...</p>
    } else {
      const datasIdentity = data
  
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
}

// EXPORT // ______________________________________________________________

export default Identity
