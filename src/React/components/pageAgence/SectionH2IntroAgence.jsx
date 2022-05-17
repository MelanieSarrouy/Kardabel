import React from 'react'
import {
  DivButtonContainer,
  LinkButtonServices,
} from '../../../styles/components/pageAgence/sectionH2IntroAgence'
import H2Intro from '../../layout/H2Intro'
const title = "L'Agence"
const content = 'Kardabel est une agence print & web au service des professionnels, particuliers, associations et institutions. Elle est le partenaire fiable et créatif dont vous avez besoin pour assurer la communication visuelle de vos projets.\nConfiez-nous la conception et la réalisation de vos sites web, applications Android, logos, chartes graphiques, cartes de visite, flyers, affiches, dépliants, PLV, étiquettes, brochures, retouche photo,...'

const SectionH2IntroAgence = () => {

    return (
    <H2Intro id='agence' title={title} content={content}>
      <DivButtonContainer>
        <LinkButtonServices to="/#prestations">Prestations</LinkButtonServices>
        <LinkButtonServices to="/#objectifs">Objectifs</LinkButtonServices>
        <LinkButtonServices to="/#valeurs">Valeurs</LinkButtonServices>
      </DivButtonContainer>
    </H2Intro>
  )
}

export default SectionH2IntroAgence
