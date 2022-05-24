import React from 'react'
import logo from '../../../assets/logo/logo-simple-bleu.svg'
import tel from '../../../assets/icons/tel.svg'
import mail from '../../../assets/icons/mail.svg'
import location from '../../../assets/icons/location.svg'
import mel from '../../../assets/illustrations/mel-toon.png'
import stef from '../../../assets/illustrations/stef-toon.png'
import {
  DivCoordonnees,
  DivCoordonneesContainer,
  DivImgLogoContainer,
  ImgIcon,
  PCoordonnees,
  PKardabel,
  SectionCoordonnes,
  DivPortraitsContainer,
  ImgPortrait,
  PName,
  PJob,
} from '../../../styles/components/page contact/coordonneesKardabel'

const CoordonnéesKardabel = () => {
  return (
    <SectionCoordonnes>
      <DivPortraitsContainer>
        <article>
          <ImgPortrait src={mel} alt="portrait toon Melanie" width={200} />
          <PName>Mélanie Sarrouy</PName>
          <PJob>
            Développeuse Front-End
            <br /> & Graphiste
          </PJob>
        </article>
        <article>
          <ImgPortrait src={stef} alt="portrait toon Stephane" width={200} />
          <PName>Stéphane Warin</PName>
          <PJob>
            Développeur d'applications
            <br /> android
          </PJob>
        </article>
      </DivPortraitsContainer>

        <DivCoordonneesContainer>
          <DivImgLogoContainer>
            <img src={logo} alt="logo" width={256} />
          </DivImgLogoContainer>
          <div>
            <PKardabel>Kardabel</PKardabel>

            <DivCoordonnees>
              <ImgIcon src={tel} alt="icon" width={25} />
              <PCoordonnees>09 77 61 11 90</PCoordonnees>
            </DivCoordonnees>
            <DivCoordonnees>
              <ImgIcon src={mail} alt="icon" width={25} />
              <PCoordonnees>contact@kardabel.com</PCoordonnees>
            </DivCoordonnees>
            <DivCoordonnees>
              <ImgIcon src={location} alt="icon" width={25} />
              <PCoordonnees>France, Occitanie</PCoordonnees>
            </DivCoordonnees>
          </div>
        </DivCoordonneesContainer>
    </SectionCoordonnes>
  )
}

export default CoordonnéesKardabel
