import styled from "styled-components"

export const DivButtonsSide = styled.button`
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  padding: 5rem 0;
  & > img {
    width: 2.5rem;
    margin: .5rem;
    @media (max-width: 640px) {
      width: 1.5rem;
    }
  }
  @media (max-width: 640px) {
    width: 3rem;
  }
`
export const PictureCareoussel = styled.picture`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > img {
    object-fit: scale-down;
  }
`
export const ImgCaroussel = styled.img`
  display: flex;
  object-fit: contain;
  box-sizing: content-box;
  filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.9));
  max-width: 43.75rem;
`
