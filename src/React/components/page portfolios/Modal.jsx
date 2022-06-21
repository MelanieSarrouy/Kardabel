/* IMPORTS */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
// helpers imports
import { useKeyPress } from '../../../helpers/useKeyPress'
// assets imports
import close from '../../../assets/icons/icons8-close-91.svg'
// styles imports
import {
  CloseModal,
  ModalContent,
  ModalDiv,
} from '../../../styles/components/page portfolios/modal'
// components imports
import ModalPagination from './ModalPagination'
import ModalCaroussel from './ModalCaroussel'
import ModalInfos from './ModalInfos'

// JSX // _________________________________________________________________

/**
 * Modal component to display Modal on graphic portfolio page
 * @name Modal
 * @param {object} props
 * @returns {?JSX}
 */

const Modal = (props) => {
  /* To detect key press. */
  useKeyPress('Escape', props.hideModal)
  /* props */
  const allData = props.allData
  const positionStart = props.position

  const allDataLenght = allData.length
  const [position, setPosition] = useState(positionStart)
  /* Destructuring the object allData[position] into the variables id, title, dates, description, client,
images to fetch all elements of selected project*/
  const { id, title, dates, description, client, images } = allData[position]
  const caroussel = images.more
  const length = caroussel.length
  const [count, setCount] = useState(0)

  /* A function that is called when the user clicks on the pagination preview button. */
  const handleClickPaginationPreview = () => {
    position === 0 ? setPosition(allDataLenght - 1) : setPosition(position - 1)
    setCount(0)
  }
  /* A function that is called when the user clicks on the pagination next button. */
  const handleClickPaginationNext = () => {
    position === allDataLenght - 1 ? setPosition(0) : setPosition(position + 1)
    setCount(0)
  }
  /* A function that is called when the user clicks on the preview button. */
  const handleClickPreview = () => {
    const current = count
    if (current === 0) {
      position === 0 ? setPosition(allDataLenght - 1) : setPosition(position - 1)
      setCount(0)
    } else {
      setCount(current - 1)
    }
  }
  /* A function that is called when the user clicks on the next button. */
  const handleClickNext = () => {
    const current = count
    if (current === length - 1) {
      position === allDataLenght - 1 ? setPosition(0) : setPosition(position + 1)
      setCount(0)
    } else {
      setCount(current + 1)
    }
  }
  /* Preventing the default action of the event. */
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
          handleClickPreview={handleClickPreview}
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

// PROPTYPES // ___________________________________________________________

Modal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  allData: PropTypes.array.isRequired,
  position: PropTypes.number.isRequired,
}

// EXPORT // ______________________________________________________________

export default Modal
