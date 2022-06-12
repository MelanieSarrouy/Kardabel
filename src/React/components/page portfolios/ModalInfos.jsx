import React from 'react'
import { NewlineText } from '../../../helpers/newLineText'
import {
  DivDates,
  DivInfosContainer,
  DivPWork,
  DivTitle,
  PClient,
  PTitleImage,
  PTitleModal,
} from '../../../styles/components/page portfolios/modalInfos'

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

export default ModalInfos
