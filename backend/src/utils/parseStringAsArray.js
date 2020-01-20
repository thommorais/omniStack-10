/**
 * Get a string and convert its to an array.
 * 
 * @param {String} arrayAsString
 */
module.exports = function parseStringAsArray(arrayAsString) {
  return arrayAsString.split(',').map(str => str.trim());
};
