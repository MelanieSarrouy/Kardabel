/* IMPORTS */

import React from 'react'
import PropTypes from 'prop-types'
// helpers imports
import { NewlineText } from '../../../helpers/newLineText'
// styles imports
import {
  DivDates,
  DivInfosContainer,
  DivPWork,
  DivTitle,
  PClient,
  PTitleImage,
  PTitleModal,
} from '../../../styles/components/page portfolios/modalInfos'

// JSX // _________________________________________________________________

/**
 * ModalInfos component to display the project details of the modal 
 * @name ModalInfos
 * @param {object} props
 * @returns {?JSX}
 */

 const ModalInfos = (props) => {
  const title = props.title
  const dates = props.dates
  const client = props.client
  const description = props.description
  const caroussel = props.caroussel
  const count = props.count
  return (
    <DivInfosContainer>
      <PTitleImage>{caroussel[count].title}</PTitleImage>
      <DivTitle>
        <PTitleModal>{title}</PTitleModal>
        <DivDates>
          {dates.map((element, index) => (
            <p key={'dates' + index}>{element}</p>
          ))}
        </DivDates>
      </DivTitle>
      {client !== '' ? <PClient>{client}</PClient> : <PClient>'Divers'</PClient>}

      <DivPWork>{NewlineText(description)}</DivPWork>
    </DivInfosContainer>
  )
}

// PROPTYPES // ___________________________________________________________

ModalInfos.propTypes = {
  title: PropTypes.string.isRequired,
  dates: PropTypes.array.isRequired,
  client: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  caroussel: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
}

// EXPORT // ______________________________________________________________

export default ModalInfos
