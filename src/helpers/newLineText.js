export const NewlineText = (txt) => {
  const newText = txt.split('\n').map((str, index) => <p key={index}>{str}</p>);
  return newText;
}
