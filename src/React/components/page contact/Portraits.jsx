/* IMPORTS */

import React from 'react'
// helpers imports
import { NewlineText } from '../../../helpers/newLineText'
// data imports
import { dataMembers } from '../../../datas/contact/data'
// styles imports
import {
  DivPortraitsContainer,
  ImgPortrait,
  PJob,
  PName,
} from '../../../styles/components/page contact/portraits'

// JSX // _________________________________________________________________

/**
 * Portraits component to display to display the contact the portraits of the agency's members
 * @name Portraits
 * @returns {?JSX}
 */

const Portraits = () => {
  const data = dataMembers
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

export default Portraits
