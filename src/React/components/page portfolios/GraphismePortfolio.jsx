import React, { useState } from 'react'
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
} from '../../../styles/components/page portfolios/graphismePortfolio'
import { data } from '../../../datas/portfolios/portfolio-graphisme/datas'
import Modal from './Modal'

const GraphismePortfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  let position
  const [dataModal, setDataModal] = useState({})

  const handleSubmit = (event) => {
    setModalIsOpen(true)
    const target = event.target
    const id = getId(target)
    position = getCreation(id)
    setDataModal(data[position])
  }
  const getId = (target) => {
    const str = target.id
    const number = str.split('-')
    const id = number[1]
    return id
  }
  const getCreation = (idString) => {
    const creation = data.find((element) => element.id === idString)
    const position = data.indexOf(creation)
    return position
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <SectionPortfolio id="gallery">
      <DivPortfolioCardsContainer>
        {data.map((element, index) => (
          <ArcticlePortfolioGraphicCard
            key={index}
            onClick={(event) => handleSubmit(event)}
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
                  <li id={'divIl-' + element.id} key={'tag' + index}>
                    {el}
                  </li>
                ))}
              </UlTagsPortfolioGraphicCard>
            </DivTitlePortfolioGraphicCard>
          </ArcticlePortfolioGraphicCard>
        ))}
      </DivPortfolioCardsContainer>
      {modalIsOpen && <Modal datas={dataModal} hideModal={closeModal}></Modal>}
    </SectionPortfolio>
  )
}

export default GraphismePortfolio
