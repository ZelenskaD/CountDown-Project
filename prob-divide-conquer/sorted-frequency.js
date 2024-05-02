function sortedFrequency(arr, num) {
  //helper func to find first idx of the num using binary search
  function findFirstIndex(arr, num) {
    let low = 0;
    let high = arr.length - 1;
    let firstIdx = -1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] >= num) {
        if (arr[mid] === num) firstIdx = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return firstIdx;
  }

  function findLastIndex(arr, num) {
    let low = 0;
    let high = arr.length - 1;
    let lastIdx = -1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] <= num) {
        if (arr[mid] === num) lastIdx = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return lastIdx;
  }
  const firstIdx = findFirstIndex(arr, num);
  const lastIdx = findLastIndex(arr, num);

  if (firstIdx === -1 || lastIdx === -1) {
    return -1; //num not found
  }
  return lastIdx - firstIdx + 1;
}

module.exports = sortedFrequency;
