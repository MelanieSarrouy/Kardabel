/* IMPORTS */

import React, { useState } from 'react'
// assets imports
import top from '../../assets/icons/circle-arrow-up-solid.svg'
// styles imports
import { ImgSVGArrowTop } from '../../styles/layout/scrollButton'

// JSX // _________________________________________________________________

/**
 * ScrollButton component to display scroll to the top button
 * @name ScrollButton
 * @returns {?JSX}
 */

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop

    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => window.scrollTo(0, 0)

  window.addEventListener('scroll', toggleVisible)

  return (
    <button type="button" onClick={scrollToTop} style={{ display: visible ? 'flex' : 'none' }}>
      <ImgSVGArrowTop src={top} alt="remonter en haut de la page" />
    </button>
  )
}

// EXPORT // ______________________________________________________________

export default ScrollButton
