import React from 'react'
import {
  ArticleCard,
  DivIconContainer,
  DivImgContainer,
  ImgSVGCard,
  ImgSvgIcon,
  PtextCards,
  DivH4Container,
  H4Style,
  DivTextContainer,
  ImgCommasStart,
  DivText,
  ImgCommasEnd,
} from '../../../styles/components/pageAgence/articleServiceCard'
import commas from '../../../assets/icons/commas.svg'


const ArticleServiceCard = (props) => {
  return (
    <ArticleCard>
      <DivIconContainer>
        <ImgSvgIcon src={props.icon} alt={props.altIcon} width={120} />
      </DivIconContainer>
      <DivH4Container>
        <H4Style>{props.title}</H4Style>
        <DivTextContainer>
          <ImgCommasStart src={commas} alt="" />
          <DivText>
          {props.text.map((el, index) => (
            <PtextCards key={index}>{el}</PtextCards>
          ))}
          </DivText>

          <ImgCommasEnd src={commas} alt="" />
        </DivTextContainer>
      </DivH4Container>
      <DivImgContainer>
        <ImgSVGCard src={props.illustration} alt={props.altIllustration} width={400} />
      </DivImgContainer>
    </ArticleCard>
  )
}

export default ArticleServiceCard
