import React from 'react'
import {
  DivButtonContainer,
  LinkButtonServices,
  TextCTA,
} from '../../../styles/components/pageAgence/sectionH2IntroAgence'
import H2Intro from '../../layout/H2Intro'

const title = "L'Agence"
const content = `Kardabel est une agence print & web au service des professionnels, particuliers,associations et institutions. Elle est le partenaire fiable et créatif dont vous avez besoin pour assurer la communication visuelle de vos projets. Confiez-nous la conception de vos supports de communication ! Sites web, applications Android, logos, chartes graphiques, cartes de visite, flyers, affiches, dépliants, PLV, étiquettes, brochures, retouche photo,...`

const SectionH2IntroAgence = () => {
  return (
    <H2Intro id='agence' title={title} content={content}>
      <TextCTA>Envie d’en savoir plus sur les services que nous vous proposons ?</TextCTA>
      <DivButtonContainer>
        <LinkButtonServices to="/services">découvrir</LinkButtonServices>
      </DivButtonContainer>
    </H2Intro>
  )
}

export default SectionH2IntroAgence
