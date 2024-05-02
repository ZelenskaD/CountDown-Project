function countZeroes(arr) {
  let low = 0;
  let high = arr.length - 1;
  let firstOIdx = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === 1) {
      low = mid + 1;
    } else {
      firstOIdx = mid;
      high = mid - 1;
    }
  }
  return arr.length - firstOIdx;
}

module.exports = countZeroes;
