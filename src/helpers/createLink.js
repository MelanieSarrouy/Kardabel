import { standardizeAndLowerCase } from './standardizeAndLowerCase'

export const createLink = (str, name, prefixeName, suffixeName) => {
  let a = standardizeAndLowerCase(str)
  let b = prefixeName + a
  let c= suffixeName
  return '/' + name + '/' + b + c
}
