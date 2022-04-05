import React from 'react'
import {
  DivButtonContainer,
  H2Style,
  LinkButtonServices,
  SectionIntro,
  SVGTrio,
  TextIntro,
  Title,
} from '../../styles/components/sectionIntroAgence'
import trioDore from '../../assets/trio-dore.svg'
import { Route, Routes } from 'react-router-dom'
const Services = () => {
  return (
    <div>
      <SectionIntro>
        <Title>
          <SVGTrio src={trioDore} alt="deco" />
          <H2Style>Services</H2Style>
        </Title>
        <TextIntro>
          Pour répondre au mieux à vos besoins en communiction et visibilité, nous vous propsons un
          ensemble de services dans le domaine du Design Graphique et du Développement.
        </TextIntro>
        <DivButtonContainer>
          <LinkButtonServices to="/services/identite">Identité</LinkButtonServices>
          <LinkButtonServices to="/services/print">Print</LinkButtonServices>
          <LinkButtonServices to="/services/web">Web</LinkButtonServices>
          <LinkButtonServices to="/services/android">Android</LinkButtonServices>
        </DivButtonContainer>
      </SectionIntro>
        <Routes>
          <Route path="/services/identite" element={<Services />} />
          <Route path="/services/print" element={<Services />} />
          <Route path="/services/web" element={<Services />} />
          <Route path="/services/android" element={<Services />} />
        </Routes>
    </div>
  )
}

export default Services
