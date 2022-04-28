import React, { useState } from 'react'
import top from '../../assets/icons/circle-arrow-up-solid.svg'
import { ImgSVGArrowBottom } from '../../styles/layout/scrollButton'

const ScrollButtonBottom = () => {
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState(0)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }
  const scrollBottom = (event) => {
    let element = event.target
    let rect = element.getBoundingClientRect()
    setPosition(rect.top)
    window.scrollBy(0, position)
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <button onClick={(event) => scrollBottom(event)} style={{ display: visible ? 'flex' : 'none' }}>
      <ImgSVGArrowBottom src={top} alt="descendre dans la page" />
    </button>
  )
}

export default ScrollButtonBottom
