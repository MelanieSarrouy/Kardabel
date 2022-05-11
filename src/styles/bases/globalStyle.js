import { createGlobalStyle } from 'styled-components'
import colors from './colors'
import fonts from './fonts'

export const GlobalStyle = createGlobalStyle`
  /* Styles principaux */
  * {
    font-family: ${fonts.txt};
    color: ${colors.primary};
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  *, ::before, ::after {
    box-sizing: border-box;
  }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: white;
    max-width: 1620px;
    margin: auto;
    line-height: 1;
  }
  img {
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  .sr-only {
    position:absolute;
    width:1px;
    height:1px;
    padding:0;
    margin:-1px;
    overflow:hidden;
    clip:rect(0,0,0,0);
    white-space:nowrap;
    border:0
  }
  ol, ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .active {
    font-weight: 400;
    border-bottom: solid 2px ${colors.secondary};
    color: ${colors.secondary};
    &:hover {
      color: ${colors.secondary};
      text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
    }
  }
  .book-card-container {
    &.flipped {
      .book-front {
        transform: rotate(180deg);
      }
      .book-back {
        transform: rotate(0deg);
      }
    }
    .book-front,
    .book-back {
      backface-visibility: hidden;
      transform-style: preserve-3d;
      transition: transform ease 500ms;
    }
    .book-front {
      z-index: 2;
      transform: rotateY(0deg);
    }
    .book-back {
      transform: rotateY(-180deg);
    }
  }
`
