import React from 'react'
import trioBleu from '../../../assets/icons/trio-bleu.svg'
import objectifsImage from '../../../assets/illustrations/Idea applications_Monochromatic.svg'
import {
  SectionObjectifs,
  DivH3Title,
  DivImgObjContainer,
  DivObectifsContent,
  H3Style,
  ImgObjContainer,
  PTextObjectifs,
  SVGTrioH3,
} from '../../../styles/components/pageAgence/sectionH3Objectifs'

const SectionH3Objectifs = () => {
  return (
    <SectionObjectifs>
      <DivObectifsContent>
        <DivH3Title>
          <SVGTrioH3 src={trioBleu} alt="deco" />
          <H3Style>Nos objectifs</H3Style>
        </DivH3Title>
        <PTextObjectifs>
          Nous souhaitons avant tout mettre en valeur vos idées, votre personnalité, l'identité de
          votre structure et bien sûr vous aider à concrétiser vos projets.
          <br />
          <br />
          De l’identité visuelle au site internet, en passant par tous les supports de communication
          possibles, notre objectif principal est de trouver une solution sur mesure pour votre
          communication et votre visibilité.
          <br />
          <br />
          Nous proposons des créations graphiques print & web originales, sur mesure, qui vous
          ressemblent et vous permettent de vous démarquer.
        </PTextObjectifs>
      </DivObectifsContent>
      <DivImgObjContainer>
        <ImgObjContainer src={objectifsImage} alt="illustration femme sur echelle avec ampoule" />
      </DivImgObjContainer>
    </SectionObjectifs>
  )
}

export default SectionH3Objectifs
