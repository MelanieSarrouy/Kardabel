import styled from "styled-components"
import colors from "../../bases/colors"

export const DivPagination = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 5rem 1.6rem 5rem;
  @media (max-width: 640px) {
    padding: 1rem 3rem 1.6rem 3rem;
  }
`
export const DivGolbalPagination = styled.div`
  display: flex;
  padding-bottom: 0.6rem;
  @media (max-width: 640px) {
    align-items: start;
  }
  & > img {
    width: 1rem;
    padding: 0.1rem;
    cursor: pointer;
  }
`
export const DivProjet = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  @media (max-width: 640px) {
    flex-direction: column;
  }
  & > p {
    text-align: center;
    &:first-child {
      font-weight: 600;
      padding-right: 0.5rem;
      @media (max-width: 640px) {
        padding-bottom: 0.6rem;
        padding-right: 0;
      }
    }
    &:last-child {
      color: ${colors.background};
      font-weight: 400;
    }
  }
`
export const DivCarousselPosition = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  & > img {
    width: 1rem;
    padding: 0.2rem;
  }
`
