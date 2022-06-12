import styled from "styled-components"
import colors from "../../bases/colors"
import fonts from "../../bases/fonts"

export const SectionsH3 = styled.section`
  padding: 2rem 7% 1rem 7%;
  @media (max-width: 640px) {
    padding: 2.5rem 7% 0rem 7%;
  }
  @media (max-width: 420px) {
    padding: 2rem 2rem 0rem 2rem;
  }
`
export const H3MentionsTitle = styled.h3`
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  background-color: ${colors.primaryDark};
  color: ${colors.background};
  font-family: ${fonts.titles};
  word-spacing: 0.6rem;
  font-size: 2.8rem;
  font-weight: 500;
  @media (max-width: 1080px) {
    font-size: 2.4rem;
  }
  @media (max-width: 950px) {
    font-size: 2.1rem;
    word-spacing: 0.4rem;
  }
  @media (max-width: 850px) {
    font-size: 1.9rem;
  }
  @media (max-width: 850px) {
    font-size: 1.8rem;
  }
  @media (max-width: 500px) {
    font-size: 1.4rem;
    padding: 0.6rem 1rem;
    line-height: 1.6rem;
  }
  @media (max-width: 420px) {
    font-size: 1.2rem;
    padding: 0.4rem 1rem;
  }
`
export const DivMentionsContainer = styled.div`
  padding: 0.5rem 0;
  width: 80%;
  margin-left: 1rem;
  @media (max-width: 950px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    margin-left: 3%;
    width: 97%;
    padding: 0.3rem 0;
  }
`
export const PTxt = styled.p`
  font-size: 1.4rem;
  line-height: 1.9rem;
  padding: 0.3rem 0;
  @media (max-width: 640px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
  @media (max-width: 420px) {
    font-size: 1rem;
    line-height: 1.3rem;
  }
`
export const PBold = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  padding: 0.5rem 0;
  @media (max-width: 640px) {
    font-size: 1.6rem;
  }
`
export const LiCredits = styled(PTxt).attrs({
  as: 'li',
})``
export const ALinksMention = styled(PTxt).attrs({
  as: 'a',
})`
  font-weight: 600;
  color: ${colors.secondary};
`
