import React from 'react'
import objectifsImage from '../../../assets/illustrations/Idea applications_Monochromatic.svg'
import {
  SectionObjectifs,
  DivImgObjContainer,
  DivObectifsContent,
  PTextObjectifs,
} from '../../../styles/components/page agence/sectionH3Objectifs'
import H3TrioTitle from '../../layout/H3TrioTitle'

const SectionH3Objectifs = () => {
  return (
    <SectionObjectifs id='nosobjectifs'>
      <DivObectifsContent>
        <H3TrioTitle title={'Nos objectifs'} />        
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
        <img src={objectifsImage} alt="illustration femme sur echelle avec ampoule" />
      </DivImgObjContainer>
    </SectionObjectifs>
  )
}

export default SectionH3Objectifs
