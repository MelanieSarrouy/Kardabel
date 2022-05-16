import { standardizeAndLowerCase } from './standardizeAndLowerCase'

export const createLink = (str, name, submenu, prefixeName, suffixeName) => {
  let a = standardizeAndLowerCase(str)
  let b = prefixeName + a
  let c= suffixeName
  return ((submenu) ? ('/' + name + '/' + b + c) : ('/' + name))
   
}
