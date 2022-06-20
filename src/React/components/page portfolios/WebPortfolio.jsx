import React from 'react'
import { DivPortfolioCardsContainer, SectionPortfolio } from '../../../styles/components/page portfolios/webPortfolio'
import WebPortfolioCard from './WebPortfolioCard'
import { datasPortfolioWeb } from '../../../datas/portfolios/portfolio-web/datas'

const data = datasPortfolioWeb.reverse()

const WebPortfolio = () => {
  
  return (
    <SectionPortfolio id='gallery'>
      <DivPortfolioCardsContainer>
      {data.map((element, index) => (
        <WebPortfolioCard
          key={index}
          title={element.title}
          imagejpg={element.image.jpg}
          imagewebp={element.image.webp}
          description={element.description}
          date={element.date}
          work={element.work}
          technos={element.technos}
          links={element.links}
        />
      ))}
      </DivPortfolioCardsContainer>
    </SectionPortfolio>
  )
}

export default WebPortfolio
