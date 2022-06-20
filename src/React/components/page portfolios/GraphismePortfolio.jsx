/* IMPORTS */

import React, { useState } from 'react'
// data imports
import { data } from '../../../datas/portfolios/portfolio-graphisme/datas'
// styles imports
import {
  SectionPortfolio,
  DivPortfolioCardsContainer,
} from '../../../styles/components/page portfolios/webPortfolio'
import {
  ArcticlePortfolioGraphicCard,
  DivTitlePortfolioGraphicCard,
  PTitlePortfolioGraphicCard,
  UlTagsPortfolioGraphicCard,
  DivImgContainer,
  LiTagsCard,
} from '../../../styles/components/page portfolios/graphismePortfolio'
// components imports
import Modal from './Modal'

// JSX // _________________________________________________________________

/**
 * GraphismePortfolio component to display the graphic portfolio page
 * @name GraphismePortfolio
 * @returns {?JSX}
 */

const GraphismePortfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [dataPosition, setDataPosition] = useState(0)

  let position = dataPosition
  let dataToDisplay = data
  const body = document.querySelector('body')

  /* A function that is called to open the modal when the user clicks on a card. */
  const openModal = (event) => {
    setModalIsOpen(true)
    const target = event.target
    const id = getId(target)
    position = getCreation(id)
    setDataPosition(position)
    body.classList.add('no-scroll')
  }

  /* A function that is called to get project id when the user clicks on a card. */
  const getId = (target) => {
    const str = target.id
    const number = str.split('-')
    const id = number[1]
    return id
  }

  /* A function that is called to get project when the user clicks on the project card. */
  const getCreation = (idString) => {
    const creation = dataToDisplay.find((element) => element.id === idString)
    const position = dataToDisplay.indexOf(creation)
    return position
  }
  /* A function that is called to close the modal when the user clicks the close button or press Esc. */
  const closeModal = () => {
    setModalIsOpen(false)
    body.classList.remove('no-scroll')
  }

  return (
    <SectionPortfolio id="gallery">
      <DivPortfolioCardsContainer>
        {dataToDisplay.map((element, index) => (
          <ArcticlePortfolioGraphicCard
            key={index}
            onClick={(event) => openModal(event)}
            id={element.id}
          >
            <DivImgContainer id={'divIMg-' + element.id}>
              <picture>
                <source srcSet={element.images.cover.png} type="image/png" />
                <source srcSet={element.images.cover.webp} type="image/webp" />
                <img
                  src={element.images.cover.webp}
                  alt={element.title + ' créations graphiques pour'}
                  width={800}
                />
              </picture>
            </DivImgContainer>
            <DivTitlePortfolioGraphicCard id={'divTxt-' + element.id}>
              <PTitlePortfolioGraphicCard id={'divTitle-' + element.id}>
                {element.title}
              </PTitlePortfolioGraphicCard>
              <UlTagsPortfolioGraphicCard id={'divUl-' + element.id}>
                {element.tags.map((el, index) => (
                  <LiTagsCard id={'divLi' + index + '-' + element.id} key={'tag' + index}>
                    {el}
                  </LiTagsCard>
                ))}
              </UlTagsPortfolioGraphicCard>
            </DivTitlePortfolioGraphicCard>
          </ArcticlePortfolioGraphicCard>
        ))}
      </DivPortfolioCardsContainer>
      {modalIsOpen && (
        <Modal allData={dataToDisplay} position={dataPosition} hideModal={closeModal}></Modal>
      )}
    </SectionPortfolio>
  )
}

// EXPORT // ______________________________________________________________

export default GraphismePortfolio
