import React, { useState } from 'react'
import {
  DivBackPortfolioCard,
  UlButtonsContainers,
  PDescriptionPortfolioVersoCard,
  PWorkPortfolioVersoCard,
  PTitlePortfolioVersoCard,
  UlTechnosPortfolioVersoCard,
  ImgIconTechno,
} from '../../../styles/components/page portfolios/webPortfolioCardBack'
import { LinkButtonServices } from '../../../styles/components/page agence/sectionH2IntroAgence'
const figma = 'figma'
const npm = 'npm'
const trello = 'trello'
const swagger = 'swagger'

const WebPortfolioCardBack = (props) => {
  const [display, setDisplay] = useState(false)
  const handleClick = (event) => {
    event.preventDefault()
    event.stopPropagation()
    setDisplay(!display)  }
  return (
    <DivBackPortfolioCard flipped={props.flipped}>
      <PTitlePortfolioVersoCard>{props.title}</PTitlePortfolioVersoCard>
      <PDescriptionPortfolioVersoCard>{props.description}</PDescriptionPortfolioVersoCard>
      <PWorkPortfolioVersoCard>{props.work}</PWorkPortfolioVersoCard>
      <UlTechnosPortfolioVersoCard>
        {props.technos.map((element, index) => (
          <li key={'li-' + index} onClick={(event) => handleClick(event)}>
            {!display ? (
              <ImgIconTechno src={element.logo} alt="icone techno" title={element.legende} />
            ) : (
              <p>{element.legende}</p>
            )}
          </li>
        ))}
      </UlTechnosPortfolioVersoCard>
      <UlButtonsContainers>
        {props.site !== '' && (
          <li>
            <LinkButtonServices
              to={{ pathname: props.site }}
              target="_blank"
            >
              {props.site.indexOf(figma) !== -1 ? figma : 'site'}
            </LinkButtonServices>
          </li>
        )}
        {props.code !== '' && (
          <li>
            <LinkButtonServices
              to={{ pathname: props.code }}
              target="_blank"
            >
              code
            </LinkButtonServices>
          </li>
        )}
        {props.other !== '' && (
          <li>
            <LinkButtonServices
              boxshadow="true"
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
            </LinkButtonServices>
          </li>
        )}
      </UlButtonsContainers>
    </DivBackPortfolioCard>
  )
}

export default WebPortfolioCardBack
