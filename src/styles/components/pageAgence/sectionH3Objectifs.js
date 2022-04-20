import styled from 'styled-components'
import backgroundVectorObectifs from '../../../assets/shapes/vector-objectifs.svg'

export const SectionObjectifs = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10rem;
`
export const DivObectifsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background: left / contain no-repeat url(${backgroundVectorObectifs});
  width: 60%;
  padding: 4rem 7%;
`
export const PTextObjectifs = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
`
export const DivImgObjContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`
export const ImgObjContainer = styled.img`
  max-width: 25rem;
`
