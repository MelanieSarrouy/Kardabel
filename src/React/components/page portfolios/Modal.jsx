import React from 'react'
import { useKeyPress } from '../../../helpers/useKeyPress'
import close from '../../../assets/icons/icons8-close-91.svg'
import {
  Content,
  CloseModal,
  ModalContent,
  ModalDiv,
  DivDates,
  DivTags,
} from '../../../styles/components/page portfolios/modal'
import { NewlineText } from '../../../helpers/newLineText'

const Modal = (props) => {
  useKeyPress('Escape', props.hideModal)
  const data = props.datas
  const { id, title, dates, description, client, images, tags } = data
  return (
    <ModalDiv onClick={props.hideModal} id={'modal-' + id}>
      <ModalContent>
        <Content>
        {/* {images.more.map((element, index) => (
              <div key={'images' + index}>
                <img src={element} alt={title} height={700}/>
              </div>
            ))} */}
          <div>
            <p>{title}</p>
            <DivDates>

            {dates.map((element, index) => (
                <p key={'dates' + index}>{element}</p>
            ))}
            </DivDates>

            <div>{NewlineText(description)}</div>
            <p>{client}</p>
            <DivTags>
            {tags.map((element, index) => (
                <p key={'tags' + index}>{element}</p>
            ))}
            </DivTags>
          </div>
        </Content>
        <CloseModal src={close} alt="close" onClick={props.hideModal} />
      </ModalContent>
    </ModalDiv>
  )
}

export default Modal
