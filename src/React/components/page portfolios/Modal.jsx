import React, { useState } from 'react'
import { useKeyPress } from '../../../helpers/useKeyPress'
import close from '../../../assets/icons/icons8-close-91.svg'
import {
  CloseModal,
  ModalContent,
  ModalDiv,
} from '../../../styles/components/page portfolios/modal'
import ModalPagination from './ModalPagination'
import ModalCaroussel from './ModalCaroussel'
import ModalInfos from './ModalInfos'

const Modal = (props) => {
  useKeyPress('Escape', props.hideModal)
  const allData = props.allData
  const allDataLenght = allData.length
  const positionStart = props.position
  const [position, setPosition] = useState(positionStart)
  const { id, title, dates, description, client, images } = allData[position]
  const caroussel = images.more
  const length = caroussel.length
  const [count, setCount] = useState(0)

  const handleClickPaginationPreview = () => {
    position === 0 ? setPosition(allDataLenght - 1) : setPosition(position - 1)
    setCount(0)
  }
  const handleClickPaginationNext = () => {
    position === allDataLenght - 1 ? setPosition(0) : setPosition(position + 1)
    setCount(0)
  }

  const handleClicPreview = () => {
    const current = count
    if (current === 0) {
      position === 0 ? setPosition(allDataLenght - 1) : setPosition(position - 1)
      setCount(0)
    } else {
      setCount(current - 1)
    }
  }
  const handleClickNext = () => {
    const current = count
    if (current === length - 1) {
      position === allDataLenght - 1 ? setPosition(0) : setPosition(position + 1)
      setCount(0)
    } else {
      setCount(current + 1)
    }
  }
  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <ModalDiv id={'modal-' + id} onClick={props.hideModal}>
      <ModalContent onClick={(e) => handleClick(e)}>
        <ModalPagination
          onClickPreview={handleClickPaginationPreview}
          title={title}
          position={position}
          allDataLenght={allDataLenght}
          onClickNext={handleClickPaginationNext}
          caroussel={caroussel}
          count={count}
        ></ModalPagination>
        <ModalCaroussel
          caroussel={caroussel}
          count={count}
          title={title}
          handleClicPreview={handleClicPreview}
          handleClickNext={handleClickNext}
        ></ModalCaroussel>
        <ModalInfos
          title={title}
          dates={dates}
          client={client}
          description={description}
          caroussel={caroussel}
          count={count}
        ></ModalInfos>
        <CloseModal src={close} alt="close" onClick={props.hideModal} />
      </ModalContent>
    </ModalDiv>
  )
}

export default Modal
