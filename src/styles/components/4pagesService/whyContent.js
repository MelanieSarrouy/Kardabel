import styled from 'styled-components'


export const DivWhyContent = styled.div`
  display: flex;
  flex-direction: column;

  background: url(${props => props.circle}) no-repeat center ${props => props.side};
  background-size: contain;
  padding: 6rem;
  margin-top: -2rem;
`
export const DivWhyTextContent = styled.div`
  background-color: ${(props) => props.color};
  padding: 3rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, .25);
  width: 100%;
`
export const PWhyText = styled.p`
  font-size: 2.25rem;
  line-height: 3.5rem;
  text-align: center;
  font-style: italic;
  font-weight: 500;
  padding: .5rem;
`