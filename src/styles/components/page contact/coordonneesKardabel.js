import styled from 'styled-components'
import fonts from '../../bases/fonts'

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
export const DivPortraitsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: start;
  padding: 2rem 0 5rem 0;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
`
export const ImgPortrait = styled.img`
  width: 25rem;
  padding: 2rem;
`
export const PName = styled.p`
  font-family: ${fonts.style};
  font-size: 3rem;
  line-height: 2rem;
  font-weight: 600;
  padding: 1.5rem 0 4rem 0;
`
export const PJob = styled.p`
  font-family: ${fonts.titles};
  font-size: 1.8rem;
  line-height: 2.5rem;
  font-weight: 300;
  padding: 1rem 3rem;
  text-transform: uppercase;
  text-align: center;
`

