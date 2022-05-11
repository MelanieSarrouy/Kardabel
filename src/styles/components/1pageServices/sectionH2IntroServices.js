import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../bases/colors'

export const NavServicesStyle = styled.nav`
  & > ul {
    display: flex;
    justify-content: center;
    align-items: baseline;
    padding: 3rem 0 1rem 0;
  }
`
export const LinkSecondaryStyle = styled(Link)`
  background-color: ${colors.primary};
  padding: 0.6rem 2rem;
  border-radius: 2rem;
  font-weight: 500;
  font-size: 1.2rem;
  color: ${colors.background};
  border: solid 2px ${colors.primary};
  text-decoration: none;
  box-shadow: 0px 0.2rem 2px rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
  transition: color 0.2s, border 0.2s, background-color 0.5s;
  margin: 0 0.5rem;
  @media (max-width: 950px) {
    font-size: 1rem;
  }
  @media (max-width: 710px) {
    padding: 0.4rem 1.8rem;
  }
  &:hover {
    border: solid 2px ${colors.primaryDark};
    background-color: ${colors.primaryDark};
  }
`
export const LinkSecondaryStyleActive = styled(Link)`
  background-color: ${colors.background};
  padding: 0.6rem 2rem;
  border-radius: 2rem;
  color: ${colors.primary};
  font-size: 1.2rem;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 0.5rem;
  border: 2px solid ${colors.primary};
  box-shadow: 0px 0.2rem 2px rgba(0, 0, 0, 0.4);
  font-weight: 700;
  &:hover {
    border: solid 2px ${colors.primaryDark};
    color: ${colors.primaryDark};
  }
`
// export const ButtonServicesStyle = styled.button`
//   background-color: ${colors.primary};
//   padding: 0.6rem 2rem;
//   border-radius: 2rem;
//   font-weight: 500;
//   font-size: 1.2rem;
//   color: ${colors.background};
//   border: solid 2px ${colors.primary};
//   text-decoration: none;
//   box-shadow: 0px 0.2rem 2px rgba(0, 0, 0, 0.4);
//   text-transform: uppercase;
//   transition: color 0.2s, border 0.2s, background-color 0.5s;
//   margin: 0 0.5rem;
//   @media (max-width: 950px) {
//     font-size: 1rem;
//   }
//   @media (max-width: 710px) {
//     padding: 0.4rem 1.8rem;
//   }
//   &:hover {
//     border: solid 2px ${colors.primaryDark};
//     background-color: ${colors.primaryDark};
//   }
// `
// export const ButtonServicesStyleActive = styled.button`
//   background-color: ${colors.background};
//   padding: 0.6rem 2rem;
//   border-radius: 2rem;
//   color: ${colors.primary};
//   font-size: 1.2rem;
//   text-decoration: none;
//   text-transform: uppercase;
//   margin: 0 0.5rem;
//   border: 2px solid ${colors.primary};
//   box-shadow: 0px 0.2rem 2px rgba(0, 0, 0, 0.4);
//   font-weight: 700;
//   &:hover {
//     border: solid 2px ${colors.primaryDark};
//     color: ${colors.primaryDark};
//   }
// `
