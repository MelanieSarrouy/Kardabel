import styled from "styled-components"
import colors from "../../bases/colors"

export const DivInfosContainer = styled.div`
  width: 100%;
  padding: 0rem 5rem 1rem 5rem;
  @media (max-width: 640px) {
    padding: .5rem 2rem 1rem 2rem;
  }
`
export const PTitleImage = styled.p`
  text-align: center;
  padding: 1.6rem 5rem 1rem 5rem;
  @media (max-width: 640px) {
    padding: 1.6rem 2rem 1rem 2rem;
    line-height: 1.3rem;
  }
`
export const DivDates = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: .5rem;
  & > p {
    font-size: 1.1rem;
    font-weight: 400;
    @media (max-width: 750px) {
      font-size: 1rem;
    }
    @media (max-width: 420px) {
      line-height: .9rem;
      font-size: .9rem;
    }
  }
  @media (max-width: 420px) {
      flex-wrap: wrap;
      padding-top: .5rem;
      gap: .3rem;
    }
`
export const DivTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  border-top: solid 1px ${colors.background};
  & > p {
    color: ${colors.background};
    padding-right: .5rem;
  }
  @media (max-width: 700px) {
    line-height: 1.6rem;
  }
`
export const PTitleModal = styled.p`
  font-size: 1.4rem;
  padding-right: 1.5rem;
  font-weight: 400;
  letter-spacing: 1px;
  @media (max-width: 750px) {
    font-size: 1.3rem;
  }
  @media (max-width: 640px) {
    font-size: 1.2rem;
    padding-right: 0;

  }
`
export const PClient = styled.p`
  font-style: italic;
  padding-bottom: 0.5rem;
  font-weight: 400;
`
export const DivPWork = styled.div`
  & > p {
    font-size: 1.1rem;
    font-weight: 300;
    color: ${colors.background};
    line-height: 1.4rem;
    @media (max-width: 750px) {
      font-size: 1rem;
      line-height: 1.3rem;
    }
  }
`
