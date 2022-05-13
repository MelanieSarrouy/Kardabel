import React from 'react'
import H2Intro from '../../layout/H2Intro'

const title = 'Contact'
const content =
  'N\'hésitez pas à nous envoyer un message, que ce soit pour une demande de devis ou un complément d\'informations, nous vous répondrons dans les meilleurs délais.'

const SectionH2IntroContact = () => {
  return (
      <H2Intro id="contact" title={title} content={content}>
      </H2Intro>
  )
}

export default SectionH2IntroContact
