import React from 'react'
import preview from '../../../assets/icons/preview.svg'
import next from '../../../assets/icons/next.svg'
import {
  DivButtonsSide,
  ImgCaroussel,
  PictureCareoussel,
} from '../../../styles/components/page portfolios/modalCaroussel'

const ModalCaroussel = (props) => {
  const caroussel = props.caroussel
  const count = props.count
  const title = props.title
  const handleClickPreview = props.handleClickPreview
  const handleClickNext = props.handleClickNext

  return (
    <div>
      <DivButtonsSide onClick={handleClickPreview} type="button">
        <img src={preview} alt="fleche précédent" width={20} />
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

export default ModalCaroussel
