/**
 * It takes a string and returns a string with newlines inserted.
 * @param txt - The text to be converted.
 */
export const NewlineText = (txt) => {
  const newText = txt.split('\n').map((str, index) => <p key={index}>{str}</p>);
  return newText;
}
