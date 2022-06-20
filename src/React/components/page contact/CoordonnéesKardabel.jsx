/* IMPORTS */

import React from 'react'
// helpers imports
import { NewlineText } from '../../../helpers/newLineText'
// data imports
import { dataMembers, dataDetails } from '../../../datas/contact/data'
// assets imports
import logo from '../../../assets/logo/logo-simple-bleu.svg'
// styles imports
import {
  DivCoordonnees,
  DivCoordonneesContainer,
  DivImgLogoContainer,
  ImgIcon,
  PCoordonnees,
  PKardabel,
  SectionCoordonnes,
  DivPortraitsContainer,
  ImgPortrait,
  PName,
  PJob,
} from '../../../styles/components/page contact/coordonneesKardabel'

// JSX // _________________________________________________________________

/**
 * CoordonnéesKardabel component to display to display the contact details of kardabel on the contact page
 * @name CoordonnéesKardabel
 * @returns {?JSX}
 */

 const CoordonnéesKardabel = () => {
  return (
    <SectionCoordonnes>
      <DivPortraitsContainer>
      {dataMembers.map((element, index) => (
        <article key={index}>
          <ImgPortrait src={element.image} alt={'portrait toon' + element.name} width={200} />
          <PName>{element.name}</PName>
          <PJob>{NewlineText(element.Job)}
          </PJob>
        </article>
      ))}
      </DivPortraitsContainer>

        <DivCoordonneesContainer>
          <DivImgLogoContainer>
            <img src={logo} alt="logo" width={256} />
          </DivImgLogoContainer>
          <div>
            <PKardabel>Kardabel</PKardabel>
            {dataDetails.map((element, index) => (
              <DivCoordonnees key={index}>
              <ImgIcon src={element.src} alt="icon" width={25} />
              <PCoordonnees>{element.txt}</PCoordonnees>
            </DivCoordonnees>
            ))}
          </div>
        </DivCoordonneesContainer>
    </SectionCoordonnes>
  )
}

// EXPORT // ______________________________________________________________

export default CoordonnéesKardabel
