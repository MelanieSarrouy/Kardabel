import React from 'react'
import {
  ArticleCard,
  DivIconContainer,
  ImgSVGCard,
  ImgSvgIcon,
  PtextCards,
  DivH4Container,
  H4Style
} from '../../../styles/components/pageAgence/articleServiceCard'

const ArticleServiceCard = (props) => {
  return (
    <ArticleCard>
      <DivIconContainer>
        <ImgSvgIcon src={props.icon} alt={props.altIcon} width={120} />
      </DivIconContainer>
      <DivH4Container>
        <H4Style>{props.title}</H4Style>
        {props.text.map((el, index) => (
          <PtextCards key={index}>{el}</PtextCards>
        ))}
      </DivH4Container>
      <DivIconContainer>
        <ImgSVGCard src={props.illustration} alt={props.altIllustration} width={400} />
      </DivIconContainer>
    </ArticleCard>
  )
}

export default ArticleServiceCard
