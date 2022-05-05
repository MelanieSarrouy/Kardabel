import styled from 'styled-components'
import colors from '../../bases/colors'

export const DivH4Content = styled.div`
  padding: 3rem 7%;
`

export const ImgServicesCards = styled.img`
  width: 20rem;
  padding: 0 1rem;
  filter: drop-shadow(0.5rem 0.15rem 0.15rem rgba(0, 0, 0, 0.5));
`
export const DivServiceContent = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: space-between;
  align-items: center;
  & > div > p {
    font-size: 1.8rem;
    line-height: 2.8rem;
    text-align: center;
    font-style: italic;
    font-weight: 600;
    padding: 0.5rem;
  }
`
export const UlLexique = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 3rem;
  line-height: 1.5rem;
  }
  & > li > p {
    color: ${colors.textTertiary};
    padding: 0 1rem;
    border-left: ${colors.textSecondary} solid 1px;
  }
`
export const PLexiqueWord = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  padding: .5rem 0;
`
