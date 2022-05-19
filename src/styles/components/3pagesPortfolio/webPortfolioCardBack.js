import styled from 'styled-components'

export const DivBackPortfolioCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  border-radius: 12px;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.25);
  background-color: white;
  padding: 2rem ;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform ease 500ms;
  transform: rotateY(${(props) => (props.flipped ? '0deg' : '-180deg')});
  & p {
    text-align: center;
  }
`
export const PTitlePortfolioVersoCard = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  padding: 1rem;
`
export const PDescriptionPortfolioVersoCard = styled.p`
  width: 100%;
  font-size: 1.1rem;
  font-weight: 500;
  padding: .8rem;
  line-height: 1.5rem;
  border-bottom: solid 1px;
`
export const PWorkPortfolioVersoCard = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  padding: 0.8rem 0;
`

export const UlTechnosPortfolioVersoCard = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: start;
  width: 100%;
  padding: 0.8rem 0;
  border-top: solid 1px;
  & > li {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    padding: .5rem;
    text-transform: uppercase;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    & > p {
      padding: .8rem 0 0 0;
      text-align: center;
      font-size: .8rem;
    }
  }
`
export const DivButtonsContainers = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 1.2rem 0 0 0;
  border-top: solid 1px;

  & > a {
    display: block;
      text-align: center;
      padding: 0.6rem 0rem;
      border-radius: 2rem;
      font-size: 1.2rem;
      text-decoration: none;
      text-transform: uppercase;
      text-align: center;
      margin: 0 0.4rem;
      width: 7rem;
      @media (max-width: 750px) {
        margin: 0rem;
      }

  }
`
export const ImgIconTechno = styled.img`
  width: 3rem;
`
