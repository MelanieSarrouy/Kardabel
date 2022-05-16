import styled from "styled-components";
import colors from "../bases/colors";
import fonts from "../bases/fonts";

export const UlSubMenuMobile = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  & > li {
    width: 100%;
    &:hover {
      background-color: ${colors.primaryDark};
    }
    & > a {
      display: flex;
      justify-content: start;
      padding: .5rem 4rem;
      text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
      font-family: ${fonts.titles};
      font-size: 1rem;
      width: 100%;
    }
  }
`
