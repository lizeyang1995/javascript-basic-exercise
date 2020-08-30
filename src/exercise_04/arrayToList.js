export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === null || array === undefined) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }
  const headNode = { value: array[0], next: null };
  let currentNode = headNode;
  for (let index = 1; index < array.length; index += 1) {
    currentNode.next = { value: array[index], next: null };
    currentNode = currentNode.next;
  }
  return headNode;
}
