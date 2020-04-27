
/**
 * @function shortenText
 * shorten a text according to the maximum size allowed
 * 
 * @param {String} text text to be shorten 
 * @param {Number} maxSize maximum character size allowed for text
 * 
 * @returns {String}
 */
export const shortenText = (text, maxSize) => {
  let newText = ''

  if (text.length > maxSize) {
    newText = text.slice(0, (maxSize - 3))
    return newText.concat('...')
  }
  return text
}