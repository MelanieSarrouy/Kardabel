/* IMPORTS */

import React from 'react'
// helpers imports
import { createHashLink } from '../../../helpers/createLink'
// styles imports
import {
  UlButtonContainer,
  LinkButtonServices,
} from '../../../styles/components/page agence/sectionH2IntroAgence'
// components imports
import H2Intro from '../../layout/H2Intro'

// JSX // _________________________________________________________________

/**
 * SectionH2IntroAgence component to display agence page's introduction
 * @name SectionH2IntroAgence
 * @returns {?JSX}
 */

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

// EXPORT // ______________________________________________________________

export default SectionH2IntroAgence
