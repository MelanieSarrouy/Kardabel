import styled from 'styled-components'
import colors from '../../bases/colors'

export const ArticleCard = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${colors.background};
  border-radius: 1.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 3rem 0;
  border-left: solid 0.5rem ${colors.secondary};
  padding: 2rem;
  min-height: 25rem;
  @media (max-width: 1280px) {
    margin: 2rem 0;
  }
  @media (max-width: 1023px) {
    flex-wrap: wrap;
  }
`
export const DivIconContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  @media (max-width: 1023px) {
    width: 100%;
  }
`
export const DivImgContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  @media (max-width: 950px) {
    display: none;
  }
`
export const ImgSvgIcon = styled.img`
  max-width: 7.5rem;
  filter: drop-shadow(0.25rem 0.25rem 0.3rem rgba(0, 0, 0, 0.5));
  @media (max-width: 1023px) {
    max-width: 6rem;
  }
  @media (max-width: 640px) {
    max-width: 5rem;
  }
  @media (max-width: 420px) {
    max-width: 4rem;
  }
`
export const DivH4Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 50%;
  padding: 2rem;
  position: relative;
  @media (max-width: 1023px) {
    width: 75%;
    padding: 2rem 4rem;
  }
  @media (max-width: 950px) {
    width: 100%;
    align-items: center;
  }
  @media (max-width: 640px) {
    padding: 1.2rem 1.2rem 0 1.2rem;
  }
  @media (max-width: 420px) {
    padding: 1.2rem 0rem 0 0rem;
  }
`
export const H4Style = styled.h4`
  font-size: 2.25rem;
  font-weight: 600;
  padding-bottom: 2rem;
  @media (max-width: 950px) {
    padding-top: 0.5rem;
  }
  @media (max-width: 640px) {
    font-size: 2rem;
    padding-bottom: 1.5rem;
  }
`
export const PtextCards = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;
  padding: 0.5rem 0;
  font-style: italic;
`
export const ImgSVGCard = styled.img`
  max-width: 25rem;
  @media (max-width: 1023px) {
    max-width: 20rem;
  }
`
export const DivTextContainer = styled.div`
  display: flex;
  position: relative;
`
export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`
export const ImgCommasStart = styled.img`
  height: 1.8rem;
  width: auto;
  margin: 1rem;
  position: absolute;
  left: -3.9rem;
  top: -1rem;
  @media (max-width: 640px) {
    height: 1.5rem;
    left: -3.4rem;
    top: -0.7rem;
  }
  @media (max-width: 420px) {
    display: none
  }

`
export const ImgCommasEnd = styled.img`
  height: 1.8rem;
  width: auto;
  transform: rotate(180deg);
  margin: 1rem;
  position: absolute;
  right: -3.6rem;
  bottom: -1.2rem;
  @media (max-width: 640px) {
    height: 1.5rem;
    right: -3.2rem;
    bottom: -1rem;
  }
  @media (max-width: 420px) {
    display: none
  }

`
