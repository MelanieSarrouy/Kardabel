import React from 'react'
import { createHashLink } from '../../../helpers/createLink'
import {
  UlButtonContainer,
  LinkButtonServices,
} from '../../../styles/components/page agence/sectionH2IntroAgence'
import H2Intro from '../../layout/H2Intro'

const SectionH2IntroAgence = () => {
  
  const title = "L'Agence"
  const content =
    'Kardabel est une agence print & web au service des professionnels, particuliers, associations et institutions. Elle est le partenaire fiable et créatif dont vous avez besoin pour assurer la communication visuelle de vos projets.\nConfiez-nous la conception et la réalisation de vos sites web, applications Android, logos, chartes graphiques, cartes de visite, flyers, affiches, dépliants, PLV, étiquettes, brochures, retouche photo,...'
  const links = ['Nos services', 'Nos objectifs', 'Nos valeurs']

  return (
    <H2Intro id="agence" title={title} content={content}>
      <UlButtonContainer>
        {links.map((element, index) => (
          <li key={index}>
            <LinkButtonServices to={createHashLink(element)}>{element}</LinkButtonServices>
          </li>
        ))}
      </UlButtonContainer>
    </H2Intro>
  )
}

export default SectionH2IntroAgence
