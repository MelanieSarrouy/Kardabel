import React from 'react'
import styled from 'styled-components'
import logo from '../../../assets/logo/logo-simple-bleu.svg'
import fonts from '../../../styles/bases/fonts'
import tel from '../../../assets/icons/tel.svg'
import mail from '../../../assets/icons/mail.svg'
import location from '../../../assets/icons/location.svg'

export const SectionCoordonnes = styled.section`
  margin: 0 7% 8rem 7%;
`
export const DivCoordonneesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
`
export const DivCoordonnees = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const PKardabel = styled.p`
  font-size: 4.5rem;
  font-family: ${fonts.kardabel};
  line-height: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 1rem 0 2rem 3.6rem;
`
export const PCoordonnees = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 500;
  padding: 0.6rem;
`
export const ImgIcon = styled.img`
  height: 2rem;
  width: 2rem;
  justify-content: center;
  margin: 0.6rem;
  align-items: center;
`
export const DivLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    max-width: 16rem;
    margin-left: 3.6rem;
  }
`

const CoordonnéesKardabel = () => {
  return (
    <SectionCoordonnes>
      <DivLogoContainer>
        <img src={logo} alt="logo" width={160} height={180} />
      </DivLogoContainer>
      <DivCoordonneesContainer>
        <div>
          <PKardabel>Kardabel</PKardabel>
          <div>
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
        </div>
      </DivCoordonneesContainer>
    </SectionCoordonnes>
  )
}

export default CoordonnéesKardabel
