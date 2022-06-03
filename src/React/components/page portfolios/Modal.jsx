import React, { useState } from 'react'
import { useKeyPress } from '../../../helpers/useKeyPress'
import close from '../../../assets/icons/icons8-close-91.svg'
import preview from '../../../assets/icons/preview.svg'
import next from '../../../assets/icons/next.svg'
import circleRegular from '../../../assets/icons/circle-regular.svg'
import circleSolid from '../../../assets/icons/circle-solid.svg'
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
  PictureCareoussel,
  ImgCaroussel,
  DivButtonsSide,
  DivPagination,
  PTitleImage,
  DivCarousselPosition,
  DivGolbalPagination
} from '../../../styles/components/page portfolios/modal'
import { NewlineText } from '../../../helpers/newLineText'

const Modal = (props) => {
  useKeyPress('Escape', props.hideModal)
  // const data = props.datas
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
        <DivButtonsSide onClick={handleClicPreview}>
          <img src={preview} alt="fleche précédent" width={20} />
        </DivButtonsSide>
        <div>
          <DivPagination>
            <DivGolbalPagination>
              <img
                src={preview}
                alt="fleche suivant"
                width={20}
                onClick={handleClickPaginationPreview}
              />
              <p>
                {position + 1} / {allDataLenght}
              </p>
              <img src={next} alt="fleche suivant" width={30} onClick={handleClickPaginationNext} />
            </DivGolbalPagination>
            <DivCarousselPosition>
              {caroussel.map((el, index) =>
                index === count ? (
                  <img key={index} src={circleSolid} alt="icon" width={5} />
                ) : (
                  <img key={index} src={circleRegular} alt="icon" width={5} />
                )
              )}
            </DivCarousselPosition>
          </DivPagination>
          <PictureCareoussel>
            <source srcSet={caroussel[count].png} type="image/png" />
            <source srcSet={caroussel[count].webp} type="image/webp" />
            <ImgCaroussel
              id={'caroussel-' + count}
              src={caroussel[count].webp}
              alt={title}
              width={700}
            />
          </PictureCareoussel>
          <PTitleImage>{caroussel[count].title}</PTitleImage>

          <DivInfosContainer>
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
