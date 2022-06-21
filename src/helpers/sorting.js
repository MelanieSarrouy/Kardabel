import { standardizeAndLowerCase } from "./standardizeAndLowerCase"

/* A function that takes two arguments, a and b. */
const sortArray = (a,b) => {
  let titleA = a.split(' ').join('')
  a = standardizeAndLowerCase(titleA)
  let titleB = b.split(' ').join('')
  b = standardizeAndLowerCase(titleB)
  return (a < b) ? -1 : 1 
}
/**
 * It sorts the array in ascending order.
 * @param array - the array to be sorted
 */
export const sorting = (array) => {
  return array.sort(sortArray)
}