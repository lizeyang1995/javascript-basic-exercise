export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.

  const isRejectPromises = [];
  const processedPromises = [];
  for (let index = 0; index < promises.length; index += 1) {
    if (!(promises[index] instanceof Promise)) {
      throw new Error('Not all elements are promises.');
    }
    isRejectPromises.push(false);
    processedPromises.push(promises[index].catch(() => {
      isRejectPromises[index] = true;
    }));
  }
  return Promise.all(processedPromises).then((promise) => {
    const indexOfReject = isRejectPromises.indexOf(true);
    if (indexOfReject !== -1) {
      throw promise[indexOfReject];
    }
    return promise;
  });
}
