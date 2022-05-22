import React from 'react'
import colors from '../../../styles/bases/colors'
import {
  UlButtonContainer,
  LinkButtonServices,
} from '../../../styles/components/pageAgence/sectionH2IntroAgence'
import H2Intro from '../../layout/H2Intro'
const title = "L'Agence"
const content =
  'Kardabel est une agence print & web au service des professionnels, particuliers, associations et institutions. Elle est le partenaire fiable et créatif dont vous avez besoin pour assurer la communication visuelle de vos projets.\nConfiez-nous la conception et la réalisation de vos sites web, applications Android, logos, chartes graphiques, cartes de visite, flyers, affiches, dépliants, PLV, étiquettes, brochures, retouche photo,...'

const SectionH2IntroAgence = () => {
  return (
    <H2Intro id="agence" title={title} content={content}>
      <UlButtonContainer>
        <li>
          <LinkButtonServices
            btncolorbck={colors.primaryDark}
            btncolorhover={colors.secondary}
            btncolortxt={colors.background}
            boxshadow='true'
            to="/#nosservices"
          >
            Nos services
          </LinkButtonServices>
        </li>
        <li>
          <LinkButtonServices
            btncolorbck={colors.primaryDark}
            btncolorhover={colors.secondary}
            btncolortxt={colors.background}
            boxshadow='true'
            to="/#nosobjectifs"
          >
            Nos objectifs
          </LinkButtonServices>
        </li>
        <li>
          <LinkButtonServices
            btncolorbck={colors.primaryDark}
            btncolorhover={colors.secondary}
            btncolortxt={colors.background}
            boxshadow='true'
            to="/#nosvaleurs"
          >
            Nos valeurs
          </LinkButtonServices>
        </li>
      </UlButtonContainer>
    </H2Intro>
  )
}

export default SectionH2IntroAgence
