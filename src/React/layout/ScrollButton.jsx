import React, { useState } from 'react'
import top from '../../assets/icons/circle-arrow-up-solid.svg'
import { HashLink } from 'react-router-hash-link'
import { ImgSVGArrowTop } from '../../styles/layout/scrollButton'


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

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <HashLink to="#top-main" onClick={scrollToTop} style={{ display: visible ? 'flex' : 'none' }}>
      <ImgSVGArrowTop src={top} alt="remonter en haut de la page" />
    </HashLink>
  )
}

export default ScrollButton
