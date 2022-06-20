import React from 'react'
import {
  DivFrontPortfolioCard,
  PTitleFront,
  ImgFrontCard,
} from '../../../styles/components/page portfolios/webPortfolioCardFront'

const WebPortfolioCardFront = (props) => {
  return (
    <DivFrontPortfolioCard flipped={props.flipped}>
      <picture>
        <source srcSet={props.imagejpg} type="image/jpg" />
        <source srcSet={props.imagewebp} type="image/webp" />
        <ImgFrontCard src={props.imagewebp} alt={'image du site' + props.title} width={800} />
      </picture>

      <PTitleFront>{props.title}</PTitleFront>
    </DivFrontPortfolioCard>
  )
}

export default WebPortfolioCardFront
