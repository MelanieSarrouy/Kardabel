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
  width: 50%;
  padding: 2rem;
  position: relative;

`
export const H4Style = styled.h4`
  font-size: 2.25rem;
  font-weight: 600;
  padding-bottom: 2rem;
`
export const PtextCards = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;
  padding: .5rem 0;
  font-style: italic;
`
export const ImgSVGCard = styled.img`
  width: 20rem;
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
  height: 2rem;
  width: auto;
  margin: 1rem;
  position: absolute;
  left: -4.5rem;
  top: -1.2rem;
`
export const ImgCommasEnd = styled.img`
  height: 2rem;
  width: auto;
  transform: rotate(180deg);
  margin: 1rem;
  position: absolute;
  right: -4rem;
  bottom: -1.2rem;
`
