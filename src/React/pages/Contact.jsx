/* IMPORTS */

import React, { useEffect } from 'react'
// components imports
import CoordonnéesKardabel from '../components/page contact/CoordonnéesKardabel'
import H2Intro from '../layout/H2Intro'

// JSX // _________________________________________________________________

/**
 * Contact component to display website's Contact page
 * @name Contact
 * @returns {?JSX}
 */

const Contact = () => {
  const title = 'Contact'
  const content =
    "N'hésitez pas à nous envoyer un message, que ce soit pour une demande de devis ou un complément d'informations, nous vous répondrons dans les meilleurs délais."

  /* Scrolling the window to the top of the page after every render. */
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

// EXPORT // ______________________________________________________________

export default Contact
