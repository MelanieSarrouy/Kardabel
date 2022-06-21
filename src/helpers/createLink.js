import { standardizeAndLowerCase } from './standardizeAndLowerCase'

/**
 * It creates a link.
 * @param str - the string to be parsed
 * @param name - the name of the link
 * @param submenu - true or false
 * @param prefixeName - the prefixe of the name of the link
 * @param suffixeName - "&lt;/a&gt;"
 */
export const createLink = (str, name, submenu, prefixeName, suffixeName) => {
  let a = standardizeAndLowerCase(str)
  let b = prefixeName + a
  let c= suffixeName
  return ((submenu) ? ('/' + name + '/' + b + c) : ('/' + name))
}

/**
 * It creates a hash link.
 * @param str - The string to be hashed
 */
export const createHashLink = (str) => {
  let a = standardizeAndLowerCase(str)
  return ('/#' + a)
}