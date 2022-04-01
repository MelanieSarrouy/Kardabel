/* IMPORTS */

import React from 'react'
import { DivH3Title, H3Style, SVGTrioH3 } from '../../styles/components/sectionH3Objectifs'
import SectionH3Objectifs from '../components/SectionH3Objectifs'
import SectionIntroAgence from '../components/SectionIntroAgence'
import trioBleu from '../../assets/trio-bleu.svg'
import styled from 'styled-components'
import backgroundVectorValeurs from '../../assets/vector-background-valeurs.svg'
import eye from '../../assets/eye.svg'
import regardImage from '../../assets/analytics_process_flatline.svg'
import colors from '../../styles/bases/colors'

export const SectionValeurs = styled.section`
  margin-bottom: 5rem;
  background: url(${backgroundVectorValeurs});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const DivValeursContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 12rem 7% 12rem 7%;
`
export const DivArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ArticleCard = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3rem;
  background-color: ${colors.background};
  border-radius: 1.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 3rem 0;
`
export const DivH4Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
`
export const ImgSvgIcon = styled.img`
  width: 5.5rem;
  margin: 1rem;
`
export const H4Style = styled.h4`
  font-size: 2.25rem;
  font-weight: 600;
  font-style: italic;
`
export const PtextCards = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;
  width: 50%;
  padding: 2rem;
`
export const ImgSVGCard = styled.img`
  width: 25rem;
`

// JSX // _________________________________________________________________

/**
 * Homepage component to display website's homepage
 * @name Homepage
 * @returns {?JSX}
 */

const Homepage = () => {
  return (
    <>
      <SectionIntroAgence />
      <SectionH3Objectifs />
      <SectionValeurs>
        <DivValeursContent>
          <DivH3Title>
            <SVGTrioH3 src={trioBleu} alt="deco" />
            <H3Style>Nos valeurs</H3Style>
          </DivH3Title>
          <DivArticlesContainer>
            <ArticleCard>
              <DivH4Container>
                <ImgSvgIcon src={eye} alt="icone eye" />
                <H4Style>Un regard</H4Style>
              </DivH4Container>
              <PtextCards>
                Nous vous apportons notre regard, une expertise dans le domaine de la communication
                visuelle, des tendances dans le design et des bonnes pratiques en graphisme et en
                développement web.
                <br />
                <br />
                Nous mettons notre professionnalisme et notre créativité au service de vos besoins.
              </PtextCards>
              <ImgSVGCard src={regardImage} alt="illustration processus analyse" width={400} />
            </ArticleCard>
            <ArticleCard>
              <DivH4Container>
                <ImgSvgIcon src={eye} alt="icone eye" />
                <H4Style>Une écoute</H4Style>
              </DivH4Container>
              <PtextCards>
                Parce que l'écoute est la clé de voute de la réussite de notre collaboration, nous
                prenons le temps nécessaire pour comprendre vos besoins, le contexte, vos objectifs,
                les enjeux, mais aussi pour apprendre à vous connaître, découvrir l'histoire de
                votre structure, de votre projet, les valeurs que vous souhaitez véhiculer, vos
                interrogations…
              </PtextCards>
              <ImgSVGCard src={regardImage} alt="illustration processus analyse" width={400} />
            </ArticleCard>
            <ArticleCard>
              <DivH4Container>
                <ImgSvgIcon src={eye} alt="icone eye" />
                <H4Style>Des solutions</H4Style>
              </DivH4Container>
              <PtextCards>
                L'écoute est l'étape indispensable qui nous permettra de travailler ensemble dans
                les meilleures conditions pour trouver les solutions les plus adaptées à vos besoins
                afin de produire des projets fidèles à vos attentes et respectueux de votre
                identité.
                <br />
                <br /> 
                Parce qu'au-delà de toute considération technique, chaque projet est une
                nouvelle aventure à partager avec nos clients…
              </PtextCards>
              <ImgSVGCard src={regardImage} alt="illustration processus analyse" width={400} />
            </ArticleCard>
          </DivArticlesContainer>
        </DivValeursContent>
      </SectionValeurs>
    </>
  )
}

// EXPORT // ______________________________________________________________

export default Homepage
