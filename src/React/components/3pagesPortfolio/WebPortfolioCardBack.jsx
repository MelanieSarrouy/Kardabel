import React from 'react'
import { LinkSecondaryStyle } from '../../../styles/components/1pageServices/sectionH2IntroServices'
import {
  DivBackPortfolioCard,
  DivButtonsContainers,
  PDescriptionPortfolioVersoCard,
  PWorkPortfolioVersoCard,
  PTitlePortfolioVersoCard,
  UlTechnosPortfolioVersoCard,
  ImgIconTechno,
} from '../../../styles/components/3pagesPortfolio/webPortfolioCardBack'
const figma = 'figma'
const npm = 'npm'
const trello = 'trello'
const swagger = 'swagger'

const WebPortfolioCardBack = (props) => {
  return (
    <DivBackPortfolioCard flipped={props.flipped}>
      <PTitlePortfolioVersoCard>{props.title}</PTitlePortfolioVersoCard>
      <PDescriptionPortfolioVersoCard>{props.description}</PDescriptionPortfolioVersoCard>
      <PWorkPortfolioVersoCard>{props.work}</PWorkPortfolioVersoCard>
      <UlTechnosPortfolioVersoCard>
        {props.technos.map((element, index) => (
          <li key={'li-' + index}>
            <ImgIconTechno src={element.logo} alt="icone techno" />
            <p>{element.legende}</p>
          </li>
        ))}
      </UlTechnosPortfolioVersoCard>
      <DivButtonsContainers>
        {props.site !== '' && (
          <LinkSecondaryStyle to={{ pathname: props.site }} target="_blank">
            {props.site.indexOf(figma) !== -1 ? figma : 'site'}
          </LinkSecondaryStyle>
        )}
        {props.code !== '' && (
          <LinkSecondaryStyle to={{ pathname: props.code }} target="_blank">
            code
          </LinkSecondaryStyle>
        )}
        {props.other !== '' && (
          <LinkSecondaryStyle to={{ pathname: props.other }} target="_blank">
            {props.other.indexOf(npm) !== -1
              ? npm
              : props.other.indexOf(trello) !== -1
              ? trello
              : props.other.indexOf(swagger) !== -1
              ? swagger
              : ''}
          </LinkSecondaryStyle>
        )}
      </DivButtonsContainers>
    </DivBackPortfolioCard>
  )
}

export default WebPortfolioCardBack
