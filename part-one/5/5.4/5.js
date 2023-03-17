function getMaxSubSum(arr) {
  let maxSubSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxSubSum) {
      maxSubSum = arr[i];
    }
    let currentSub = 0;
    for (let j = i; j < arr.length; j++) {
      currentSub += arr[j];
      if (currentSub > maxSubSum) {
        maxSubSum = currentSub;
      }
    }
  }

  return maxSubSum;
}
