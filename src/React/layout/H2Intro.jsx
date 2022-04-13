import React from 'react'
import {
  H2Style,
  SectionIntro,
  SVGTrio,
  TextIntro,
  Title,
} from '../../styles/layout/h2Intro'
import trioDore from '../../assets/icons/trio-dore.svg'


const H2Intro = (props) => {
  return (
    <SectionIntro id={props.id}>
      <Title>
        <SVGTrio src={trioDore} alt="deco" />
        <H2Style>{props.title}</H2Style>
      </Title>
      <TextIntro>{props.content}
      </TextIntro>
      {props.children}
    </SectionIntro>
  )
}

export default H2Intro
