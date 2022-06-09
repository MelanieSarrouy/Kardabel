import React, { useEffect } from 'react'
import CoordonnéesKardabel from '../components/page contact/CoordonnéesKardabel'
import H2Intro from '../layout/H2Intro'

const Contact = () => {
  const title = 'Contact'
  const content =
    "N'hésitez pas à nous envoyer un message, que ce soit pour une demande de devis ou un complément d'informations, nous vous répondrons dans les meilleurs délais."

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <H2Intro id="contact" title={title} content={content}></H2Intro>
      <CoordonnéesKardabel />
    </>
  )
}

export default Contact
