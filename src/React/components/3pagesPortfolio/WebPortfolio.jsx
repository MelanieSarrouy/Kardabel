import React from 'react'
import H3TrioTitle from '../../layout/H3TrioTitle'
import { LinkSecondaryStyle } from '../../../styles/components/1pageServices/sectionH2IntroServices'
import {
  ArticlePortfolioFlipCard,
  DivBackPortfolioCard,
  DivFrontPortfolioCard,
  PDescriptionPortfolioVersoCard,
  PTitlePortfolioVersoCard,
  SectionPortfolio,
  UlTechnosPortfolioVersoCard,
} from '../../../styles/components/3pagesPortfolio/webPortfolio'

const title = 'Créations web'

const WebPortfolio = () => {
  return (
    <SectionPortfolio>
      <H3TrioTitle title={title} />

      <ArticlePortfolioFlipCard>
        <div>
          <DivFrontPortfolioCard>
            <p>Reservia</p>
          </DivFrontPortfolioCard>

          <DivBackPortfolioCard>
            <PTitlePortfolioVersoCard>Reservia</PTitlePortfolioVersoCard>
            <PDescriptionPortfolioVersoCard>
              Site de planification de vacances (logement et activités)
            </PDescriptionPortfolioVersoCard>
            <UlTechnosPortfolioVersoCard>
              <li>HTML</li>
              <li>CSS</li>
            </UlTechnosPortfolioVersoCard>
            <div>
              <LinkSecondaryStyle to="https://melaniesarrouy.github.io/Reservia_12-2020/">
                site
              </LinkSecondaryStyle>
              <LinkSecondaryStyle to="https://github.com/MelanieSarrouy/Reservia_12-2020">
                code
              </LinkSecondaryStyle>
            </div>
          </DivBackPortfolioCard>
        </div>
      </ArticlePortfolioFlipCard>
    </SectionPortfolio>
  )
}

export default WebPortfolio
