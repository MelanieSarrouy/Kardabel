import React from 'react'
import colors from '../../../styles/bases/colors'
import {
  DivBackPortfolioCard,
  UlButtonsContainers,
  PDescriptionPortfolioVersoCard,
  PWorkPortfolioVersoCard,
  PTitlePortfolioVersoCard,
  UlTechnosPortfolioVersoCard,
  ImgIconTechno,
} from '../../../styles/components/3pagesPortfolio/webPortfolioCardBack'
import { LinkButtonServices } from '../../../styles/components/pageAgence/sectionH2IntroAgence'
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
      <UlButtonsContainers>
        {props.site !== '' && (
          <li><LinkButtonServices
            btncolorbck={colors.primaryDark}
            btncolorhover={colors.secondary}
            btncolortxt={colors.background}
            boxshadow='true'
            to={{ pathname: props.site }}
            target="_blank"
          >
            {props.site.indexOf(figma) !== -1 ? figma : 'site'}
          </LinkButtonServices></li>
        )}
        {props.code !== '' && (
          <li><LinkButtonServices
            btncolorbck={colors.primaryDark}
            btncolorhover={colors.secondary}
            btncolortxt={colors.background}
            boxshadow='true'
            to={{ pathname: props.code }}
            target="_blank"
          >
            code
          </LinkButtonServices></li>
        )}
        {props.other !== '' && (
          <li><LinkButtonServices
            btncolorbck={colors.primaryDark}
            btncolorhover={colors.secondary}
            btncolortxt={colors.background}
            boxshadow='true'
            to={{ pathname: props.other }}
            target="_blank"
          >
            {props.other.indexOf(npm) !== -1
              ? npm
              : props.other.indexOf(trello) !== -1
              ? trello
              : props.other.indexOf(swagger) !== -1
              ? swagger
              : ''}
          </LinkButtonServices></li>
        )}
      </UlButtonsContainers>
    </DivBackPortfolioCard>
  )
}

export default WebPortfolioCardBack
