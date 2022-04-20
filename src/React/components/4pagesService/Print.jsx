import React from 'react'
import ServiceH3Card from './ServiceH3Card'
import WhyComponent from './WhyComponent'
import { datasPrint } from '../../../datas/datasPrint'


const Print = () => {
  return (
    <>
      <ServiceH3Card
        color={datasPrint.colors.normal}
        h3Illustration={datasPrint.illustrations.title}
        h3Title={datasPrint.title}
        illustrationCard={datasPrint.illustrations.illustration}
      />
      <WhyComponent
        title={datasPrint.subtitles.why.title}
        id="pourquoi"
        circle={datasPrint.subtitles.why.background}
        color={datasPrint.colors.light}
        content={datasPrint.subtitles.why.content}
      />
    </>
  )
}

export default Print
