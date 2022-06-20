/* IMPORTS */

import React from 'react'
import PropTypes from 'prop-types'
// assets imports
import preview from '../../../assets/icons/preview.svg'
import next from '../../../assets/icons/next.svg'
// styles imports
import {
  DivButtonsSide,
  ImgCaroussel,
  PictureCareoussel,
} from '../../../styles/components/page portfolios/modalCaroussel'

// JSX // _________________________________________________________________

/**
 * ModalCaroussel component to display the caroussel of the modal 
 * @name ModalCaroussel
 * @param {object} props
 * @returns {?JSX}
 */

const ModalCaroussel = (props) => {

  const caroussel = props.caroussel
  const count = props.count
  const title = props.title
  const handleClickPreview = props.handleClickPreview
  const handleClickNext = props.handleClickNext

  return (
    <div>
      <DivButtonsSide onClick={handleClickPreview} type="button">
        <img src={preview} alt="fleche précédent" width={30} />
      </DivButtonsSide>
      <PictureCareoussel>
        <source srcSet={caroussel[count].png} type="image/png" />
        <source srcSet={caroussel[count].webp} type="image/webp" />
        <ImgCaroussel
          id={'caroussel-' + count}
          src={caroussel[count].webp}
          alt={title}
          width={700}
        />
      </PictureCareoussel>
      <DivButtonsSide onClick={handleClickNext} type="button">
        <img src={next} alt="fleche suivant" width={30} />
      </DivButtonsSide>
    </div>
  )
}

// PROPTYPES // ___________________________________________________________

ModalCaroussel.propTypes = {
  caroussel: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  handleClickPreview: PropTypes.func.isRequired,
  handleClickNext: PropTypes.func.isRequired,
}

// EXPORT // ______________________________________________________________

export default ModalCaroussel
