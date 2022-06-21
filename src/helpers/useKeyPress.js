import { useEffect } from 'react'

/**
 * It returns a function that, when called, will add an event listener to the document that will call
 * the action function when the key is pressed.
 * @param key - the key you want to listen for
 * @param action - a function that will be called when the key is pressed
 */
export const useKeyPress = (key, action) => {
  useEffect(() => {
    const onKeyUp = (e) => {
      if (e.key === key) action()
    }
    window.addEventListener('keyup', onKeyUp)
    return () => window.removeEventListener('keyup', onKeyUp)
  }, [action, key])
}
