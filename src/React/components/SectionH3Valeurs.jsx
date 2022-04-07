import React from 'react'
import trioBleu from '../../assets/icons/trio-bleu.svg'
import eye from '../../assets/icons/vector-eye.svg'
import sound from '../../assets/icons/vector-sound.svg'
import solution from '../../assets/icons/vector-solution.svg'
import regardImage from '../../assets/illustrations/analytics_process_flatline.svg'
import ecouteImage from '../../assets/illustrations/Consulting_Flatline.svg'
import solutionsImage from '../../assets/illustrations/Problem Solving_Flatline.svg'
import { ArticleCard, DivArticlesContainer, DivH4Container, DivIconContainer, DivValeursContent, H4Style, ImgSVGCard, ImgSvgIcon, PtextCards, SectionValeurs } from '../../styles/components/sectionH3Valeurs'
import { DivH3Title, H3Style, SVGTrioH3 } from '../../styles/components/sectionH3Objectifs'

const SectionH3Valeurs = () => {
  return (
    <SectionValeurs>
      <DivValeursContent>
        <DivH3Title>
          <SVGTrioH3 src={trioBleu} alt="deco" />
          <H3Style>Nos valeurs</H3Style>
        </DivH3Title>
        <DivArticlesContainer>
          <ArticleCard>
            <DivIconContainer>
              <ImgSvgIcon src={eye} alt="icone eye" />
            </DivIconContainer>
            <DivH4Container>
              <H4Style>Un regard</H4Style>
              <PtextCards>
                Nous vous apportons notre regard, une expertise dans le domaine de la communication
                visuelle, des tendances dans le design et des bonnes pratiques en graphisme et en
                développement web.
                <br />
                Nous mettons notre professionnalisme et notre créativité au service de vos besoins.
              </PtextCards>
            </DivH4Container>
            <DivIconContainer>
              <ImgSVGCard src={regardImage} alt="illustration processus analyse" width={400} />
            </DivIconContainer>
          </ArticleCard>
          <ArticleCard>
            <DivIconContainer>
              <ImgSvgIcon src={sound} alt="icone eye" />
            </DivIconContainer>
            <DivH4Container>
              <H4Style>Une écoute</H4Style>
              <PtextCards>
                Parce que l'écoute est la clé de voute de la réussite de notre collaboration, nous
                prenons le temps nécessaire pour comprendre vos besoins, le contexte, vos objectifs,
                les enjeux, mais aussi pour apprendre à vous connaître, découvrir l'histoire de
                votre structure, de votre projet, les valeurs que vous souhaitez véhiculer, vos
                interrogations…
              </PtextCards>
            </DivH4Container>
            <DivIconContainer>
              <ImgSVGCard src={ecouteImage} alt="illustration discussion" width={400} />
            </DivIconContainer>
          </ArticleCard>
          <ArticleCard>
            <DivIconContainer>
              <ImgSvgIcon src={solution} alt="icone eye" />
            </DivIconContainer>

            <DivH4Container>
              <H4Style>Des solutions</H4Style>
              <PtextCards>
                L'écoute est l'étape indispensable qui nous permettra de travailler ensemble dans
                les meilleures conditions pour trouver les solutions les plus adaptées à vos besoins
                afin de produire des projets fidèles à vos attentes et respectueux de votre
                identité.
                <br />
                Parce qu'au-delà de toute considération technique, chaque projet est une nouvelle
                aventure à partager avec nos clients…
              </PtextCards>
            </DivH4Container>
            <DivIconContainer>
              <ImgSVGCard
                src={solutionsImage}
                alt="illustration resolution de probleme"
                width={400}
              />
            </DivIconContainer>
          </ArticleCard>
        </DivArticlesContainer>
      </DivValeursContent>
    </SectionValeurs>
  )
}

export default SectionH3Valeurs
