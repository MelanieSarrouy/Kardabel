import styled from "styled-components"

export const DivImgWait = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem 2rem 2rem;
  @media (max-width: 420px) {
    padding: 4rem 0rem 2rem 0rem;
  }
  & > img {
    width: 50%;
    @media (max-width: 640px) {
      width: 75%;
    }
    @media (max-width: 420px) {
      width: 100%;
    }
  }
`
export const PTextProvisoire = styled.p`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  font-style: italic;
  @media (max-width: 1200px) {
    font-size: 2rem;
  }
  @media (max-width: 1200px) {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }
  @media (max-width: 340px) {
    font-size: 1.2rem;
    line-height: 1.9rem;
  }
`
