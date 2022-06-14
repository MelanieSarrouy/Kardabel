import React, { useEffect } from 'react'
import notFound from '../../assets/illustrations/404 Page Not Found _Flatline.svg'
import { NewlineText } from '../../helpers/newLineText'
import { DivLink, PNotFound } from '../../styles/components/page NotFound/notFound'
import { SectionIntro } from '../../styles/layout/h2Intro'
import { LinkButtonServices } from '../../styles/components/page agence/sectionH2IntroAgence'

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const txt =
    "La page que vous cherchez a disparue (ou bien n'a jamais existé), nos meilleurs enquêteurs sont sur l'affaire. \n Dès que nous aurons de plus amples informations, croyez bien que vous en serez les premiers informés (peut-être...)."

  return (
    <SectionIntro>
      <img src={notFound} alt="404 *page not found" />
      <PNotFound>{NewlineText(txt)}</PNotFound>
      <DivLink>
        <p>Veuillez cliquer sur le bouton ci-dessous pour retourner à la page d'accueil</p>
        <LinkButtonServices to="/">Retour à l'accueil
          
        </LinkButtonServices>
      </DivLink>
    </SectionIntro>
  )
}

export default NotFound
