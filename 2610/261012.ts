const maxSubarraySumTs = (numbers: number[], k: number): number | undefined => {
  if (k > numbers.length) {
    return undefined;
  }

  let windowSum = 0;

  // ① 最初のk個の合計を計算
  for (let i = 0; i < k; i++) {
    windowSum += numbers[i];
  }

  let maxSum = windowSum;

  // ② ウィンドウを右に移動
  for (let i = k; i < numbers.length; i++) {
    windowSum += numbers[i];
    windowSum -= numbers[i - k];

    // ③ 最大値を更新
    if (windowSum > maxSum) {
      maxSum = windowSum;
    }
  }

  return maxSum;
};

console.log(maxSubarraySumTs([2, 1, 5, 1, 3, 2], 3));
// 9

console.log(maxSubarraySumTs([1, 2, 3, 4, 5], 2));
// 9