import { standardizeAndLowerCase } from "./standardizeAndLowerCase"

const sortArray = (a,b) => {
  let titleA = a.split(' ').join('')
  a = standardizeAndLowerCase(titleA)
  let titleB = b.split(' ').join('')
  b = standardizeAndLowerCase(titleB)
  return (a < b) ? -1 : 1 
}
export const sorting = (array) => {
  return array.sort(sortArray)
}