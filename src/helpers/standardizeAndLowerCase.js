/**
 * It takes a string, removes all non-alphanumeric characters, and returns the string in lowercase.
 * @param str - The string to be standardized and lowercased.
 */
export const standardizeAndLowerCase = (str) => {
  let a = str
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[œ]/g, 'oe')
    .replace(/[ÈÉÊËèéêë]/g, 'e')
    .replace(/[ÂÄÀàâä]/g, 'a')
    .replace(/[ÔÖôö]/g, 'o')
    .replace(/[ÛÜûü]/g, 'u')
    .replace(/[ÎÏîï]/g, 'i')
    .toLowerCase()
    .replace(/[.,/#?!$%^&*;:{}=\-_`~()]/g, '')
    .replace(' ', '')
  return a
}
