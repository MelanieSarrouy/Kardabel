import React from 'react'
import { DivPortfolioCardsContainer, SectionPortfolio } from '../../../styles/components/3pagesPortfolio/webPortfolio'
import WebPortfolioCard from './WebPortfolioCard'
import { datasPortfolioWeb } from '../../../datas/datasPortfolioWeb'

const data = datasPortfolioWeb.reverse()

const WebPortfolio = () => {
  
  return (
    <SectionPortfolio id='gallery'>
      <DivPortfolioCardsContainer>
      {data.map((element, index) => (
        <WebPortfolioCard
          key={index}
          title={element.title}
          image={element.image}
          description={element.description}
          work={element.work}
          technos={element.technos}
          site={element.links.site}
          code={element.links.code}
        />
      ))}
      </DivPortfolioCardsContainer>
    </SectionPortfolio>
  )
}

export default WebPortfolio
