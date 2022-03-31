import React from 'react';
import trioDore from '../../assets/trio-dore.svg'
import { DivButtonContainer, H2Style, LinkButtonContactUs, SectionIntro, SVGTrio, TextIntro, Title } from '../../styles/components/sectionIntroAgence';

const SectionIntroAgence = () => {
  return (
    <SectionIntro>
    <Title>
      <SVGTrio src={trioDore} alt="deco" />
      <H2Style>L'Agence</H2Style>
    </Title>
    <TextIntro>
      Kardabel est une agence print & web au service des professionnels, particuliers,
      associations et institutions. Elle est le partenaire fiable et créatif dont vous avez
      besoin pour assurer la communication visuelle de vos projets. <br /> <br /> Confiez-nous
      la conception de vos supports de communication ! Sites web, applications Android, logos,
      chartes graphiques, cartes de visite, flyers , affiches, dépliants, PLV, étiquettes,
      brochures, retouche photo,...
    </TextIntro>
    <DivButtonContainer>
      <LinkButtonContactUs to="/contacts">Nous contacter</LinkButtonContactUs>
    </DivButtonContainer>
  </SectionIntro>
);
};

export default SectionIntroAgence;