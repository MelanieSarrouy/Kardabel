import styled from "styled-components"
import fonts from "../../bases/fonts"

export const DivCoordonneesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const DivCoordonnees = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`
export const PKardabel = styled.p`
  font-size: 4.5rem;
  font-family: ${fonts.kardabel};
  line-height: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 1rem 0 2rem 0;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
  text-align: center;
  @media (max-width: 780px) {
    font-size: 3.5rem;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 520px) {
    font-size: 3rem;
    padding: 0.5rem 0 1rem 0rem;
  }
  @media (max-width: 420px) {
    font-size: 2.7rem;
  }
`
export const PCoordonnees = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 500;
  padding: 0.6rem 0;
  @media (max-width: 520px) {
    font-size: 1.4rem;
    padding: 0.4rem 0;
  }
  @media (max-width: 420px) {
    font-size: 1.3rem;
    padding: 0.2rem 0;
  }
  @media (max-width: 380px) {
    padding: 0.2rem 0 0 1.8rem;
  }

`
export const ImgIcon = styled.img`
  height: 2rem;
  width: 2rem;
  justify-content: center;
  margin: 0.6rem;
  align-items: center;
  position: absolute;
  left: -3.5rem;
  @media (max-width: 520px) {
    height: 1.8rem;
    width: 1.8rem;
    left: -3.3rem;
  }
  @media (max-width: 420px) {
    height: 1.6rem;
    width: 1.6rem;
    left: -3rem;
  }
  @media (max-width: 380px) {
    left: -1.2rem;
  }
`
export const DivImgLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16rem;
  @media (max-width: 1280px) {
    width: 14rem;
  }
  @media (max-width: 1120px) {
    width: 12rem;
  }
  @media (max-width: 780px) {
    width: 10rem;
  }
  @media (max-width: 520px) {
    width: 9rem;
  }
  @media (max-width: 420px) {
    width: 8rem;
  }
  & > img {
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.4));
    @media (max-width: 780px) {
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
    }
  }
`
