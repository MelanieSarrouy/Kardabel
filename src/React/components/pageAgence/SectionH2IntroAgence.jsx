import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  DivButtonContainer,
  LinkButtonServices,
  TextCTA,
} from '../../../styles/components/pageAgence/sectionH2IntroAgence'
import H2Intro from '../../layout/H2Intro'
const title = "L'Agence"
const content = 'Kardabel est une agence print & web au service des professionnels, particuliers,associations et institutions. Elle est le partenaire fiable et créatif dont vous avez besoin pour assurer la communication visuelle de vos projets.\nConfiez-nous la conception et la réalisation de vos sites web, applications Android, logos, chartes graphiques, cartes de visite, flyers, affiches, dépliants, PLV, étiquettes, brochures, retouche photo,...'

const SectionH2IntroAgence = () => {
  const location = useLocation()
  const hash = location.hash.substring(1)
  const history = window.history

  useEffect(() => {
    if (hash !== '') {
      history.pushState(null, '', '/');
    }
  }, [hash, history])

    return (
    <H2Intro id='agence' title={title} content={content}>
      <TextCTA>Envie d’en savoir plus sur les services que nous vous proposons ?</TextCTA>
      <DivButtonContainer>
        <LinkButtonServices to="/#nosServices">Nos Services</LinkButtonServices>
        <LinkButtonServices to="/#nosObjectifs">Nos Objectifs</LinkButtonServices>
        <LinkButtonServices to="/#nosValeurs">Nos Valeurs</LinkButtonServices>
      </DivButtonContainer>
    </H2Intro>
  )
}

export default SectionH2IntroAgence
