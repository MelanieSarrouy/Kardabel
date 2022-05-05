import React from 'react'
import { SectionIntro, TextIntro } from '../../styles/layout/h2Intro'
import H2TrioTitle from './H2TrioTitle'

function NewlineText(txt) {
  const newText = txt.split('\n').map((str, index) => <p key={index}>{str}</p>);
  
  return newText;
}

const H2Intro = (props) => {
  return (
    <SectionIntro id={props.id}>
      <H2TrioTitle title={props.title} />
      <TextIntro>{NewlineText(props.content)}</TextIntro>
      {props.children}
    </SectionIntro>
  )
}

export default H2Intro
