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
          site={props.site}
          code={props.code}
          other={props.other}
        />
      ) : (
        <WebPortfolioCardFront flipped={flipped} image={props.image} title={props.title} />
      )}
    </ArticlePortfolioFlipCard>
  )
}

export default WebPortfolioCard
