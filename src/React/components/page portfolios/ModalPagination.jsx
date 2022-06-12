import React from 'react'
import {
  DivCarousselPosition,
  DivGolbalPagination,
  DivPagination,
  DivProjet,
} from '../../../styles/components/page portfolios/modalPagination'
import preview from '../../../assets/icons/preview.svg'
import next from '../../../assets/icons/next.svg'
import circleRegular from '../../../assets/icons/circle-regular.svg'
import circleSolid from '../../../assets/icons/circle-solid.svg'

const ModalPagination = (props) => {
  return (
    <DivPagination>
      <DivGolbalPagination>
        <img src={preview} alt="fleche suivant" width={20} onClick={props.onClickPreview} />
        <DivProjet>
          <p>
            {props.title} {'\u00a0'}{' '}
          </p>
          <p>
            projet {'\u00a0'}
            {props.position + 1} / {props.allDataLenght}
          </p>
        </DivProjet>
        <img src={next} alt="fleche suivant" width={30} onClick={props.onClickNext} />
      </DivGolbalPagination>
      <DivCarousselPosition>
        {props.caroussel.map((el, index) =>
          index === props.count ? (
            <img key={index} src={circleSolid} alt="icon" width={5} />
          ) : (
            <img key={index} src={circleRegular} alt="icon" width={5} />
          )
        )}
      </DivCarousselPosition>
    </DivPagination>
  )
}

export default ModalPagination
