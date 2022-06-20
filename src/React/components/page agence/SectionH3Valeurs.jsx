/* IMPORTS */

import React from 'react'
// data imports
import { datasValues } from '../../../datas/agence/datasValues'
// styles imports
import {
  DivArticlesContainer,
  DivValeursContent,
  SectionValeurs,
} from '../../../styles/components/page agence/sectionH3Valeurs'
// components imports
import ArticleServiceCard from './ArticleServiceCard'
import H3TrioTitle from '../../layout/H3TrioTitle'

// JSX // _________________________________________________________________

/**
 * SectionH3Valeurs component to display agence page's values section
 * @name SectionH3Valeurs
 * @returns {?JSX}
 */

 const SectionH3Valeurs = () => {
  return (
    <SectionValeurs id='nosvaleurs'>
      <DivValeursContent>
        <H3TrioTitle title={'Nos valeurs'} />
        <DivArticlesContainer>
          {datasValues.map((element, index) => (
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

// EXPORT // ______________________________________________________________

export default SectionH3Valeurs
