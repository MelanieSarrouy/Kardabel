import React from 'react'
import {
  DivFrontPortfolioCard,
  PTitleFront,
  ImgFrontCard,
} from '../../../styles/components/page portfolios/webPortfolioCardFront'

const WebPortfolioCardFront = (props) => {
  return (
    <DivFrontPortfolioCard flipped={props.flipped} image={props.image}>
      <ImgFrontCard src={props.image} alt={'image du site' + props.title} width={800} />
      <PTitleFront>{props.title}</PTitleFront>
    </DivFrontPortfolioCard>
  )
}

export default WebPortfolioCardFront
