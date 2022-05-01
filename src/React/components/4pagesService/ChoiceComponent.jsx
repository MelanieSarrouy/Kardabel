import React from 'react'
import { DivPrintBenefitsChoice } from '../../../styles/components/4pagesService/printBenefitsChoice'

const ChoiceComponent = (props) => {
  return (
    <DivPrintBenefitsChoice>
      <div>
        {props.txt.map((element, index) => (
          <p key={index}>{element}</p>
        ))}
      </div>
    </DivPrintBenefitsChoice>
  )
}

export default ChoiceComponent
