import React, { useState } from 'react'
import { useKeyPress } from '../../../helpers/useKeyPress'
import close from '../../../assets/icons/icons8-close-91.svg'
import preview from '../../../assets/icons/preview.svg'
import next from '../../../assets/icons/next.svg'
import {
  CloseModal,
  ModalContent,
  ModalDiv,
  DivDates,
  DivTitle,
  PClient,
  DivPWork,
  DivInfosContainer,
  PTitleModal,
  ImgCaroussel,
  DivButtonsSide,
} from '../../../styles/components/page portfolios/modal'
import { NewlineText } from '../../../helpers/newLineText'

const Modal = (props) => {
  useKeyPress('Escape', props.hideModal)
  const data = props.datas
  const { id, title, dates, description, client, images } = data
  const caroussel = images.more
  const length = caroussel.length
  const [count, setCount] = useState(0)

  const handleClicPreview = () => {
    const current = count
    current === 0 ? setCount(length - 1) : setCount(current - 1)
  }
  const handleClickNext = () => {
    const current = count
    current === length - 1 ? setCount(0) : setCount(current + 1)
  }
  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <ModalDiv id={'modal-' + id} onClick={props.hideModal}>
      <ModalContent onClick={(e) => handleClick(e)}>
        <DivButtonsSide onClick={handleClicPreview}>
          <img src={preview} alt="fleche précédent" width={30} />
        </DivButtonsSide>
        <div>
          <ImgCaroussel id={'caroussel-' + count} src={caroussel[count]} alt={title} />
          <DivInfosContainer>
            <DivTitle>
              <PTitleModal>{title}</PTitleModal>
              <DivDates>
                {dates.map((element, index) => (
                  <p key={'dates' + index}>{element}</p>
                ))}
              </DivDates>
            </DivTitle>
            {client !== '' ? <PClient>{client}</PClient> : ''}

            <DivPWork>{NewlineText(description)}</DivPWork>
          </DivInfosContainer>
        </div>
        <DivButtonsSide onClick={handleClickNext}>
          <img src={next} alt="fleche suivant" width={30} />
        </DivButtonsSide>
        <CloseModal src={close} alt="close" onClick={props.hideModal} />
      </ModalContent>
    </ModalDiv>
  )
}

export default Modal
