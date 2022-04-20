import styled from "styled-components"
import colors from "../../bases/colors"

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
`
export const DivIconContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
`
export const ImgSvgIcon = styled.img`
  max-width: 7.5rem;
  filter: drop-shadow(0.25rem 0.25rem 0.3rem rgba(0, 0, 0, 0.5));
`
export const DivH4Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 75%;
  padding: 2rem;
`
export const H4Style = styled.h4`
  font-size: 2.25rem;
  font-weight: 600;
  font-style: italic;
  padding-bottom: 2rem;
`
export const PtextCards = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;
  padding: .5rem 0;
`
export const ImgSVGCard = styled.img`
  max-width: 20rem;
`