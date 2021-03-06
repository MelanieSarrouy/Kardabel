/* IMPORTS */

import { keyframes } from 'styled-components'

// EXPORTS // ______________________________________________________________

/* fadeIn */

export const fadeIn = keyframes`
  0% {
    background-color: rgba(0, 0, 0, 0);
  }
  100% {
    background-color: rgba(0, 0, 0, 0.8);
}
`

/* roadRunnerIn */

export const roadRunnerIn = keyframes`
  0% {
    transform: translateX(-1500px) skewX(30deg) scaleX(1.3);
  }
  100% {
    transform: translateX(0px) skewX(0deg) scaleX(1);
  }
`

/* logo */

export const logo = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100vw);
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateX(0vw);
  }
`

/* kardabel */

export const kardabel = keyframes`
  0% {
    transform: translateY(-300px);
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    transform: translateY(0px);
  }
`

/* heroTitle */

export const heroTitle = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

/* buttonServices */

export const buttonServices = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100vw);
  }
  25% {
    opacity: 1;
  }
  80% {
    transform: rotate(5deg);
  }
  85% {
    transform: rotate(-5deg);
  }
  90% {
    transform: rotate(2deg);
  }
  100% {
    transform: translateX(0vw);
  }
`

/* buttonContact */

export const buttonContact = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100vw);
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateX(0vw);
  }
`

/* trio */

export const trio = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
    transform: rotate(-720deg);
    }
  10% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    transform: rotate(0deg);
  }
`

/* h2Title */

export const h2Title = keyframes`
  0% {
    opacity:0;
    transform: translateX(600px);
    }
  10% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateX(0px);
  }
`

/* buttonsHashLink */

export const buttonsHashLink = keyframes`
  0% {
    filter: brightness(1);    
  }
  50% {
    filter: brightness(0.9);  
  }
  100% {
    filter: brightness(1);    
  }

`
