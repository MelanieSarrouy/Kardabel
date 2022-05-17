import styled from "styled-components";

export const ImgSVGArrowTop = styled.img`
  position: fixed;
  bottom: 7rem;
  right: 2%;
  width: 3rem;
  z-index: 5;
  @media (max-width: 950px) {
    width: 2rem;
    bottom: 6rem;

  }

`
export const ImgSVGArrowBottom = styled.img`
  position: fixed;
  bottom: 3rem;
  right: 2%;
  width: 3rem;
  transform: rotate(180deg);
  z-index: 5;
  @media (max-width: 950px) {
    width: 2rem;
  }

`

