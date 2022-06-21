/* IMPORTS */

import React from 'react'
// helpers imports
import { NewlineText } from '../../../helpers/newLineText'
// styles imports
import {
  DivPortraitsContainer,
  ImgPortrait,
  PJob,
  PName,
} from '../../../styles/components/page contact/portraits'
import { useFetch } from '../../../services/API'

// JSX // _________________________________________________________________

/**
 * Portraits component to display to display the contact the portraits of the agency's members
 * @name Portraits
 * @returns {?JSX}
 */

const Portraits = () => {
  /* A hook that is used to fetch data from an API. */
  const { data, isLoading, error } = useFetch(`contact/portraits.json`)
  if (error) {
    return <p>Oups, il y a un problème de chargement des données</p>
  }
  if (isLoading) {
    return <p>Loading...</p>
  } else {
    return (
      <DivPortraitsContainer>
        {data.map((element, index) => (
          <article key={index}>
            <ImgPortrait src={element.image} alt={'portrait toon' + element.name} width={200} />
            <PName>{element.name}</PName>
            <PJob>{NewlineText(element.Job)}</PJob>
          </article>
        ))}
      </DivPortraitsContainer>
    )
  }
}

export default Portraits
