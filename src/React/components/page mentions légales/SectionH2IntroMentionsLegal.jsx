import React from 'react'
import H2Intro from '../../layout/H2Intro'

const title = 'Mentions Légales'
const content =
  'Merci de lire avec attention les différentes modalités d’utilisation du présent site avant d’y parcourir ses pages. En vous connectant sur ce site, vous acceptez, sans réserves, les présentes modalités. \n Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la confiance dans l’économie numérique, les responsables du présent site internet www.kardabel.com sont :'

const SectionH2IntroMentionsLegal = () => {
  return <H2Intro id="mentions-legales" title={title} content={content}></H2Intro>
}

export default SectionH2IntroMentionsLegal
