import React from 'react'
import {
  DivArticlesContainer,
  DivValeursContent,
  SectionValeurs,
} from '../../../styles/components/pageAgence/sectionH3Valeurs'
import { datasValues } from '../../../datas/datasValues'
import ArticleServiceCard from './ArticleServiceCard'
import H3TrioTitle from '../../layout/H3TrioTitle'

const SectionH3Valeurs = () => {
  return (
    <SectionValeurs id='nosValeurs'>
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

export default SectionH3Valeurs
