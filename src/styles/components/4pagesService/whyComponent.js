import styled from "styled-components";

export const SectionWhy = styled.section`
  background: no-repeat center left url(${(props) => props.bck});
  background-size: contain;
  margin-top: 2rem;
  padding-bottom: 2rem;
`

export const DivH4Content = styled.div`
  padding: 0rem 7%;
  @media (max-width: 420px) {
    padding: 0rem 2rem;
  }
`