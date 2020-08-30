export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.

  if (string === undefined || string === null) {
    return 0;
  }
  const stringLength = string.length;
  if (prediction === undefined) {
    return stringLength;
  }
  let numberOfCharacters = 0;
  for (let index = 0; index < stringLength; index += 1) {
    if (prediction(string[index])) {
      numberOfCharacters += 1;
    }
  }
  return numberOfCharacters;
}
