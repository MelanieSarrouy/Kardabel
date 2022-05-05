import styled from "styled-components"
import colors from "../bases/colors"
import fonts from "../bases/fonts"

export const DivH4Container = styled.div`
  padding: 7rem 7% 4rem 7%;
  display: flex;
  align-items: baseline;
`
export const ImgH4Arrow = styled.img`
  width: 3rem;
  margin-right: .8rem;
`
export const H4Style = styled.h4`
  font-size: 3rem;
  font-family: ${fonts.titles};
  font-weight: 600;
  color: ${colors.primary};
`
