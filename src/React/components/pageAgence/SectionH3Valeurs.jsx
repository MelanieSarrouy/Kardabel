import React from 'react'
import trioBleu from '../../../assets/icons/trio-bleu.svg'
import {
  DivArticlesContainer,
  DivValeursContent,
  SectionValeurs,
} from '../../../styles/components/pageAgence/sectionH3Valeurs'
import {
  DivH3Title,
  H3Style,
  SVGTrioH3,
} from '../../../styles/components/pageAgence/sectionH3Objectifs'
import { datasValues } from '../../../datas/datasValues'
import ArticleServiceCard from './ArticleServiceCard'

const SectionH3Valeurs = () => {
  return (
    <SectionValeurs>
      <DivValeursContent>
        <DivH3Title>
          <SVGTrioH3 src={trioBleu} alt="deco" />
          <H3Style>Nos valeurs</H3Style>
        </DivH3Title>
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
