import styled from 'styled-components'

export const DivServicesBackground = styled.div`
  background: no-repeat center center url(${(props) => props.bck});
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(auto-fill, 22rem);
  grid-gap: 4rem;
  justify-content: center;
  align-items: center;
  padding: 10rem 7% 10rem 7%;
  margin: 4rem 0 5rem 0;
`
export const DivServicesCardsBackground = styled.div`
  background: no-repeat center center url(${(props) => props.circle});
  background-color: ${(props) => props.bckColor};
  background-size: 55%;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: background-size 800ms, box-shadow 100ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-size: 130%;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.35);
  }
`