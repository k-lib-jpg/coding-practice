const longestZeroSumSubarrayTs = (numbers: number[]): number => {
  // 長さの最大値を格納するmaxLength = 0を宣言する
  let maxLength = 0;
  // 累積和を格納するsum = 0を宣言する
  let sum = 0;
  // 累積和と最初に登場した位置を管理するlongMemo = new Map()を宣言する
  const longMemo = new Map<number, number>();
  // longMemoに(0, -1)をセットする
  longMemo.set(0,-1);

  // for文でnumbersの長さ分ループする
  for (let i = 0; i < numbers.length; i++) {
    // sumにnumbers[i]を加算する
    sum += numbers[i];
    // longMemoに現在の累積和sumが存在する場合
    const firstIndex = longMemo.get(sum);
    if (firstIndex !== undefined) {
      const length = i - firstIndex;
      if (length > maxLength) {
        maxLength = length;
      }
    } else {
      longMemo.set(sum, i);
    }
  }
  // maxLengthを返す
  return maxLength;
};

console.log(
  longestZeroSumSubarrayTs([1, 2, -3, 3, -1, 2])
); // 3