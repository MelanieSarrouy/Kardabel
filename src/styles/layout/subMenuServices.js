import styled from "styled-components";
import colors from "../bases/colors";

export const UlSubMenu = styled.ul`
  position: absolute;
  right: -1rem;
  top: 4.2rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  background-color: ${colors.primaryDark}D8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  width: 9rem;
  & > li {
    padding: 1rem 0;
  }
`
