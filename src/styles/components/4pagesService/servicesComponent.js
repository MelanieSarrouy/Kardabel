import styled from 'styled-components'

export const DivServicesIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrapo: wrap;
  width: 100%;
  padding: 1rem 7% 5rem 7%;
  & > p {
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.8rem;
    text-align: center;
    padding: 0.5rem 10rem;
  }
`
export const DivServicesBackground = styled.div`
  background: no-repeat center center url(${(props) => props.bck});
  background-size: cover;
  ${'' /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4rem;   */}
  display: grid;
  grid-template-columns: repeat(auto-fill, 30%);
  grid-gap: 4rem;
  justify-content: space-between;
  align-items: center;
  padding: 10rem 7% 10rem 7%;
`
export const DivServicesCardsBackground = styled.div`
  background: no-repeat center center url(${(props) => props.circle});
  background-color: ${(props) => props.bckColor};
  background-size: 55%;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 22rem;
  width: 26rem;
  padding: 2rem;
  scale: ${(props) => props.scale};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: background-size 800ms, transform 400ms, box-shadow 100ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-size: 130%;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.35);
    transform: scale(${(props) => props.scaleHover});
  }
`
