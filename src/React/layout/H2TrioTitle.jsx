import React from 'react';
import trioDore from '../../assets/icons/trio-dore.svg'
import { DivH2Title, H2TitleStyle, SvgH2Trio } from '../../styles/layout/h2TrioTitle';


const H2TrioTitle = (props) => {
  return (
    <DivH2Title>
      <SvgH2Trio src={trioDore} alt="deco" />
      <H2TitleStyle>{props.title}</H2TitleStyle>
    </DivH2Title>
  );
};

export default H2TrioTitle;