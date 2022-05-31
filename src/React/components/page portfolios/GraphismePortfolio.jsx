import React from 'react'
import { SectionPortfolio, DivPortfolioCardsContainer } from '../../../styles/components/page portfolios/webPortfolio'
import { DivPortfolioGraphicCard, ImgPortfolioGraphicCard, DivTitlePortfolioGraphicCard, PTitlePortfolioGraphicCard, UlTagsPortfolioGraphicCard } from '../../../styles/components/page portfolios/graphismePortfolio'
import { data } from '../../../datas/portfolios/portfolio-graphisme/datas'


const GraphismePortfolio = () => {
    return (
      <SectionPortfolio id="gallery">
      <DivPortfolioCardsContainer>
      {data.map((element, index) => (
        <DivPortfolioGraphicCard key={index}><ImgPortfolioGraphicCard src={element.images.cover1} alt={'création graphique pour ' + element.title} width={800} /><DivTitlePortfolioGraphicCard><PTitlePortfolioGraphicCard>{element.title}</PTitlePortfolioGraphicCard><UlTagsPortfolioGraphicCard>{element.tags.map((el, index) => (<li key={'tag' + index}>{el}</li>))}</UlTagsPortfolioGraphicCard></DivTitlePortfolioGraphicCard></DivPortfolioGraphicCard>
      ))}
      </DivPortfolioCardsContainer>

      </SectionPortfolio>
    )
}

export default GraphismePortfolio
