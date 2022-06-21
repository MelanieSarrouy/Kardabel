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
 * Print component to display Print services page
 * @name Android
 * @returns {?JSX}
 */

const Print = () => {
  /* A hook that is used to fetch data from an API. */
  const { data, isLoading, error } = useFetch(`services/print.json`)
  if (error) {
    return <p>Oups, il y a un problème de chargement des données</p>
  }
  if (isLoading) {
    return <p>Loading...</p>
  } else {
    const datasPrint = data

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
          bck={datasPrint.subtitles.why.background}
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
          bckSize="cover"
          services={datasPrint.subtitles.services.services}
          circle={circle}
        />
      </>
    )
  }
}

// EXPORT // ______________________________________________________________

export default Print
