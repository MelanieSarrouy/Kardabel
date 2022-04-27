import styled from "styled-components"
import colors from "../../bases/colors"

export const DivH4Content = styled.div`
  padding: 3rem 7%;
`

export const ImgServicesCards = styled.img`
  width: 20rem;
  padding: 1rem;
  filter: drop-shadow(0.5rem 0.15rem 0.15rem rgba(0, 0, 0, 0.5));

`
export const DivServiceContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const UlLexique = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2rem;
  padding: 2rem 0;
  border-top: ${colors.textSecondary} solid 1px;
  border-left: ${colors.textSecondary} solid 1px;
  line-height: 1.5rem;
  background-color: white;
  border-radius: .5rem;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, .25);
  & > li > p {
    color: ${colors.textTertiary};
    padding-left: 2rem;
  }
`
export const PLexiqueWord = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  padding-bottom: 1rem;
`
