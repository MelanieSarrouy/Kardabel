import { standardizeAndLowerCase } from './standardizeAndLowerCase'

export const createLink = (str, name, prefixeName) => {
  let a = standardizeAndLowerCase(str)
  let b = prefixeName + a
  return '/' + name + '/' + b
}
