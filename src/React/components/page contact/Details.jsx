/* IMPORTS */

import React from 'react'
// data imports
import { dataDetails } from '../../../datas/contact/data'
// assets imports
import logo from '../../../assets/logo/logo-simple-bleu.svg'
// styles imports
import {
  DivCoordonneesContainer,
  DivImgLogoContainer,
  PKardabel,
  DivCoordonnees,
  ImgIcon,
  PCoordonnees,
} from '../../../styles/components/page contact/details'
import { useFetch } from '../../../services/API'

// JSX // _________________________________________________________________

/**
 * Details component to display to display the contact details of kardabel on the contact page
 * @name Details
 * @returns {?JSX}
 */

const Details = () => {
  /* A hook that is used to fetch data from an API. */
  const { data, isLoading, error } = useFetch(`contact/details.json`)
  if (error) {
    return <p>Oups, il y a un problème de chargement des données</p>
  }
  if (isLoading) {
    return <p>Loading...</p>
  } else {
    return (
      <DivCoordonneesContainer>
        <DivImgLogoContainer>
          <img src={logo} alt="logo" width={256} />
        </DivImgLogoContainer>
        <div>
          <PKardabel>Kardabel</PKardabel>
          {data.map((element, index) => (
            <DivCoordonnees key={index}>
              <ImgIcon src={element.src} alt="icon" width={25} />
              <PCoordonnees>{element.txt}</PCoordonnees>
            </DivCoordonnees>
          ))}
        </div>
      </DivCoordonneesContainer>
    )
  }
}

export default Details
