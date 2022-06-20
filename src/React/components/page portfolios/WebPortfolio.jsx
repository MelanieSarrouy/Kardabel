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
          image={element.image}
          description={element.description}
          date={element.date}
          work={element.work}
          technos={element.technos}
          site={element.links.site}
          code={element.links.code}
          other={element.links.other}
        />
      ))}
      </DivPortfolioCardsContainer>
    </SectionPortfolio>
  )
}

export default WebPortfolio
