import React from 'react'
import { LinkSecondaryStyle } from '../../../styles/components/1pageServices/sectionH2IntroServices'
import {
  DivBackPortfolioCard,
  DivButtonsContainers,
  PDescriptionPortfolioVersoCard,
  PWorkPortfolioVersoCard,
  PTitlePortfolioVersoCard,
  UlTechnosPortfolioVersoCard,
} from '../../../styles/components/3pagesPortfolio/webPortfolioCardBack'
const word = 'figma'
const WebPortfolioCardBack = (props) => {
  return (
    <DivBackPortfolioCard flipped={props.flipped}>
      <PTitlePortfolioVersoCard>{props.title}</PTitlePortfolioVersoCard>
      <PDescriptionPortfolioVersoCard>{props.description}</PDescriptionPortfolioVersoCard>
      <PWorkPortfolioVersoCard>{props.work}</PWorkPortfolioVersoCard>
      <UlTechnosPortfolioVersoCard>
        {props.technos.map((element, index) => (
          <li key={'li-' + index}>{element}</li>
        ))}
      </UlTechnosPortfolioVersoCard>
      <DivButtonsContainers>
        {props.site !== '' && (
          <LinkSecondaryStyle to={{ pathname: props.site }} target="_blank">
            {props.site.indexOf(word) !== -1 ? word : 'site'}
          </LinkSecondaryStyle>
        )}
        {props.code !== '' && (
          <LinkSecondaryStyle to={{ pathname: props.code }} target="_blank">
            code
          </LinkSecondaryStyle>
        )}
      </DivButtonsContainers>
    </DivBackPortfolioCard>
  )
}

export default WebPortfolioCardBack
