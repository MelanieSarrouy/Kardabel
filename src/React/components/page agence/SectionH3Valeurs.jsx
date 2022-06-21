/* IMPORTS */

import React from 'react'
// styles imports
import {
  DivArticlesContainer,
  DivValeursContent,
  SectionValeurs,
} from '../../../styles/components/page agence/sectionH3Valeurs'
// components imports
import ArticleServiceCard from './ArticleServiceCard'
import H3TrioTitle from '../../layout/H3TrioTitle'
import { useFetch } from '../../../services/API'

// JSX // _________________________________________________________________

/**
 * SectionH3Valeurs component to display agence page's values section
 * @name SectionH3Valeurs
 * @returns {?JSX}
 */

const SectionH3Valeurs = () => {
  /* A hook that is used to fetch data from an API. */
  const { data, isLoading, error } = useFetch(`agence/valeurs.json`)
  if (error) {
    return <p>Oups, il y a un problème de chargement des données</p>
  }
  if (isLoading) {
    return <p>Loading...</p>
  } else {
    return (
      <SectionValeurs id="nosvaleurs">
        <DivValeursContent>
          <H3TrioTitle title={'Nos valeurs'} />
          <DivArticlesContainer>
            {data.map((element, index) => (
              <ArticleServiceCard
                key={index}
                icon={element.icon}
                altIcon={element.altIcon}
                title={element.title}
                text={element.text}
                illustration={element.illustration}
                altIllustration={element.altIllustration}
              />
            ))}
          </DivArticlesContainer>
        </DivValeursContent>
      </SectionValeurs>
    )
  }
}

// EXPORT // ______________________________________________________________

export default SectionH3Valeurs
