/* IMPORTS */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
// helpers imports
import { formatDate } from '../../../helpers/formatDate'
// styles imports
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

// JSX // _________________________________________________________________

/**
 * WebPortfolioCardBack component to display back cards web portfolio 
 * @name WebPortfolioCardBack
 * @param {object} props
 * @returns {?JSX}
 */

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

// PROPTYPES // ___________________________________________________________

WebPortfolioCardBack.propTypes = {
  flipped: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  work: PropTypes.string.isRequired,
  technos: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
}

// EXPORT // ______________________________________________________________

export default WebPortfolioCardBack
