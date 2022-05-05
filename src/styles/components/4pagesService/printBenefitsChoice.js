import styled from "styled-components";

export const DivPrintBenefitsChoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrapo: wrap;
  width: 100%;
  padding: 3rem 7%;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 5rem;
    & > p {
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 2.8rem;
      text-align: center;
      padding: .5rem;
    }
  }
`
