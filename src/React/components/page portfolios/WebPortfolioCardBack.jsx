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
import { formatDate } from '../../../helpers/formatDate'

const WebPortfolioCardBack = (props) => {
  const [display, setDisplay] = useState(false)
  const handleClick = (event) => {
    event.preventDefault()
    event.stopPropagation()
    setDisplay(!display)
  }

  return (
    <DivBackPortfolioCard flipped={props.flipped}>
      <PTitlePortfolioVersoCard>{props.title}</PTitlePortfolioVersoCard>
      <p>- {formatDate(props.date)} -</p>
      <PDescriptionPortfolioVersoCard>{props.description}</PDescriptionPortfolioVersoCard>
      <PWorkPortfolioVersoCard>{props.work}</PWorkPortfolioVersoCard>
      <UlTechnosPortfolioVersoCard>
        {props.technos.map((element, index) => (
          <li key={'liTechnos-' + index} onClick={(event) => handleClick(event)}>
            {!display ? (
              <ImgIconTechno src={element.logo} alt="icone techno" title={element.legende} />
            ) : (
              <p>{element.legende}</p>
            )}
          </li>
        ))}
      </UlTechnosPortfolioVersoCard>
      <UlButtonsContainers>
        {props.links.map((element, index) => (
          <li key={'liLinks-' + index}>
            <LinkButtonServices to={{ pathname: element.url }} target="_blank">
              {element.name}
            </LinkButtonServices>
          </li>
        ))}
      </UlButtonsContainers>
    </DivBackPortfolioCard>
  )
}

export default WebPortfolioCardBack
