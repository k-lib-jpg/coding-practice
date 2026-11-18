// 整数配列numbersを受け取り、合計が0になる連続部分配列の最大の長さを返す関数longestZeroSumSubarrayを作成してください。
const longestZeroSumSubarray = (numbers) => {
  // 長さの最大値を格納するmaxLength = 0を宣言する
  let maxLength = 0;
  // 累積和を格納するsum = 0を宣言する
  let sum = 0;
  // 累積和と最初に登場した位置を管理するlongMemo = new Map()を宣言する
  const longMemo = new Map();
  // longMemoに(0, -1)をセットする
  longMemo.set(0,-1);

  // for文でnumbersの長さ分ループする
  for (let i = 0; i < numbers.length; i++) {
    // sumにnumbers[i]を加算する
    sum += numbers[i];
    // longMemoに現在の累積和sumが存在する場合
    if (longMemo.has(sum)) {
      // 現在のインデックスと最初に登場した位置の差を求める
      const length = i - longMemo.get(sum);
      // 差がmaxLengthより大きければmaxLengthを更新する
      if (length > maxLength) {
        maxLength = length;
      }
    } else {
      // longMemoに現在の累積和sumが存在しない場合、sumと現在のインデックスをlongMemoに保存する
      longMemo.set(sum, i)
    }
  }
  // maxLengthを返す
  return maxLength;
};

console.log(
  longestZeroSumSubarray([1, 2, -3, 3, -1, 2])
); // 3