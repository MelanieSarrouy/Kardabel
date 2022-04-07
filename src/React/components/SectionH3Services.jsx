import React from 'react'
import identityPicture from '../../assets/illustrations/Profile analysis _Flatline.svg'
import printPicture from '../../assets/illustrations/Designer _Flatline.svg'
import webPicture from '../../assets/illustrations/Web development _Flatline.svg'
import androidPicture from '../../assets/illustrations/Authentication_Flatline.svg'
import {
  DivServicesContent,
  H3ServiceStyle,
  ImgSVGService,
  LinkCardService,
  PtextService,
  Section4Services,
} from '../../styles/components/sectionH3Services'

const SectionH3Services = () => {
  return (
    <Section4Services>
      <DivServicesContent>
        <LinkCardService to="/services/identite">
          <ImgSVGService src={identityPicture} alt="illustration identité" />
          <H3ServiceStyle>Identité</H3ServiceStyle>
          <PtextService>
            Création ou refonte de votre identité visuelle
            <br />
            (logo, charte graphique, brand board)
          </PtextService>
        </LinkCardService>
        <LinkCardService to="/services/print">
          <ImgSVGService src={printPicture} alt="illustration print" />
          <H3ServiceStyle>Print</H3ServiceStyle>
          <PtextService>
            Concéption et réalisation de tous les supports de communication matériels dont vous avez
            besoin
          </PtextService>
        </LinkCardService>
        <LinkCardService to="/services/web">
          <ImgSVGService src={webPicture} alt="illustration web" />
          <H3ServiceStyle>web</H3ServiceStyle>
          <PtextService>
            Création ou refonte de votre site internet avec un CMS type WordPress ou ‘from scatch’
            pour un site sur-mesure
          </PtextService>
        </LinkCardService>
        <LinkCardService to="/services/android">
          <ImgSVGService src={androidPicture} alt="illustration android" />
          <H3ServiceStyle>Android</H3ServiceStyle>
          <PtextService>
            Conception et réalisation d’une application Android pour un outil qui vous facilite la
            vie en fonction de vos besoins et de votre activité
          </PtextService>
        </LinkCardService>
      </DivServicesContent>
    </Section4Services>
  )
}

export default SectionH3Services
