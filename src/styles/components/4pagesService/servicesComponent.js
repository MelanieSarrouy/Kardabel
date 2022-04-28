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
`
export const UlLexique = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${'' /* margin-bottom: 2rem; */}
  ${'' /* padding: 2rem 6rem; */}
  padding-top: 3rem;
  ${'' /* padding: 1rem 2rem 2rem 2rem; */}
  ${'' /* margin: 1rem; */}
  line-height: 1.5rem;
  ${'' /* background-color: white; */}
  ${'' /* box-shadow: inset 1px 1px 2px rgba(0, 0, 0, .25); */}
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
