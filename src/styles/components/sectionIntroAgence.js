import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../bases/colors'


export const TextCTA = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  text-align: center;
  line-height: 3rem;
  font-style: italic;
  padding: 3rem 5% 1rem 5%;
`
export const DivButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 1rem 5% 3rem 5%;
`
export const LinkButtonServices = styled(Link)`
  background-color: ${colors.primary};
  padding: .8rem 2.5rem;
  border-radius: 3rem;
  font-weight: 600;
  font-size: 1.5rem;
  color: ${colors.background};
  border: 2px solid ${colors.primary};
  text-decoration: none;
  transition: color 0.2s, border 0.3s, background-color 0.5s;
  box-shadow: 0px 0.15rem 4px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  &:hover {
    background-color: ${colors.primaryDark};
    border: 2px solid ${colors.background};
    color: ${colors.background};
  }
`
