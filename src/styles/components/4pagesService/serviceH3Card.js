import styled from 'styled-components'
import waveCard from '../../../assets/shapes/waveCard.svg'

export const SectionCard = styled.section`
  padding: 8rem 7% 1rem 7%;
`
export const DivProfileCard = styled.div`
  width: 100%;
  border-radius: 1.5rem;
  padding: 2rem 4rem 3rem 4rem;
  background: no-repeat url(${waveCard}) ${(props) => props.color};
  background-size: 70%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 950px) {
    padding: 2rem;
  }
`
export const ImgSVGTitle = styled.img`
  width: 80%;
  padding-bottom: 3rem;
  @media (max-width: 640px) {
    width: 100%;
  }
`
export const UlCardStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: flex-end;
  padding: 1rem 0;
  height: 23rem;
  z-index: 3;
  @media (max-width: 1440px) {
  }
  @media (max-width: 1240px) {
    height: 20rem;
  }
  @media (max-width: 1024px) {
    height: 14rem;
    gap: 1.6rem;
  }
  @media (max-width: 750px) {
    height: 10rem;
    gap: 1.2rem;
  }
  @media (max-width: 420px) {
    padding: 0;
    height: 8rem;
  }
`
export const LiCardstyle = styled.li`
  z-index: 2;
  & > a {
    font-weight: 600;
    padding: 1rem 2rem;
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 35rem;
    margin: 0 2rem 0 0;
    @media (max-width: 1440px) {
      width: 50%;
      padding: 1rem 2rem;
    }
    @media (max-width: 1240px) {
      padding: 0.8rem 2rem;
    }
    @media (max-width: 1024px) {
      font-size: 1.4rem;
    }
    @media (max-width: 950px) {
      font-size: 1.2rem;
      padding: 0.6rem 2rem;
      width: 60%;
    }
    @media (max-width: 750px) {
      padding: 0.4rem 1.8rem;
      font-size: 1rem;
      font-weight: 500;
    }
    @media (max-width: 640px) {
      margin: 0;
      width: 100%;
    }
  }
`
export const DivImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
`
export const ImgSVGLogoDore = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 17.5rem;
  z-index: 0;

  @media (max-width: 950px) {
    max-width: 12rem;
  }
  @media (max-width: 640px) {
    visibility: hidden;
  }
  @media (max-width: 420px) {
    visibility: visible;
  }

`
export const ImgSVGIllustrationCard = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 35%;
  @media (max-width: 640px) {
    visibility: hidden;
  }
`
