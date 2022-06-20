import React, { useState } from 'react'
import { ArticlePortfolioFlipCard } from '../../../styles/components/page portfolios/webPortfolioCard'
import WebPortfolioCardBack from './WebPortfolioCardBack'
import WebPortfolioCardFront from './WebPortfolioCardFront'

const WebPortfolioCard = (props) => {
  const [flipped, setFlipped] = useState(false)
  return (
    <ArticlePortfolioFlipCard onClick={() => setFlipped(!flipped)}>
      {flipped ? (
        <WebPortfolioCardBack
          flipped={flipped}
          title={props.title}
          date={props.date}
          description={props.description}
          work={props.work}
          technos={props.technos}
          links={props.links}
        />
      ) : (
        <WebPortfolioCardFront flipped={flipped} imagejpg={props.imagejpg} imagewebp={props.imagewebp} title={props.title} />
      )}
    </ArticlePortfolioFlipCard>
  )
}

export default WebPortfolioCard
