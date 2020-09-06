export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === null || array === undefined) {
    throw new Error('Flatten undefined or null array');
  }
  const resultArray = [];
  array.map((item) => {
    if (item instanceof Array) {
      return item.map(value => resultArray.push(value));
    }
    return resultArray.push(item);
  });
  return resultArray;
}
