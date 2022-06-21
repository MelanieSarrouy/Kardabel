import styled from "styled-components"
import fonts from "../../bases/fonts"

export const DivPortraitsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  padding: 2rem 0 5rem 0;
  @media (max-width: 1280px) {
    justify-content: space-between;
  }
  @media (max-width: 1120px) {
    justify-content: space-evenly;
  }
  @media (max-width: 950px) {
    justify-content: space-between;
    padding: 0 0 3rem 0;
  }
  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0 3rem 0;
  }

  & > article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
`
export const ImgPortrait = styled.img`
  width: 25rem;
  padding: 0 2rem 2rem 2rem;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.2));
  @media (max-width: 1320px) {
    width: 20rem;
  }
  @media (max-width: 1120px) {
    width: 18rem;
  }
  @media (max-width: 900px) {
    width: 16rem;
  }
  @media (max-width: 780px) {
    width: 20rem;
  }
  @media (max-width: 520px) {
    width: 18rem;
  }
  @media (max-width: 320px) {
    width: 16rem;
  }
`
export const PName = styled.p`
  font-family: ${fonts.signature};
  font-size: 3rem;
  line-height: 2rem;
  font-weight: 600;
  padding: 1.5rem 0 4rem 0;
  text-align: center;
  @media (max-width: 1120px) {
    font-size: 2.5rem;
    padding: 1.5rem 0 2rem 0;
  }
  @media (max-width: 900px) {
    font-size: 2rem;
    padding: 0 0 1.5rem 0;
  }
  @media (max-width: 780px) {
    font-size: 2.7rem;
    padding: 1.5rem 0 2.5rem 0;
  }
  @media (max-width: 520px) {
    font-size: 2.2rem;
    padding: 1rem 0 2rem 0;
  }
  @media (max-width: 420px) {
    font-size: 2rem;
    padding: 0 0 1.8rem 0;
  }
`
export const PJob = styled.div`
 & > p {
  font-family: ${fonts.titles};
  font-size: 1.8rem;
  line-height: 3rem;
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  @media (max-width: 1120px) {
    font-size: 1.4rem;
    line-height: 2.2rem;
  }
  @media (max-width: 900px) {
    font-size: 1.2rem;
    line-height: 1.8rem;
  }
  @media (max-width: 780px) {
    font-size: 1.6rem;
    line-height: 2.8rem;
  }
  @media (max-width: 520px) {
    font-size: 1.2rem;
    line-height: 2rem;
  }
  @media (max-width: 420px) {
    font-size: 1rem;
    line-height: 1.6rem;
  }
 }
`
