// 整数の配列numbersと上限値limitを受け取り、合計がlimit以下になる最長の連続区間を返す関数findLongestSubarrayを作成してください。
const findLongestSubarray = (numbers, limit) => {
  // 最長区間を格納するlongestをnullにしておく
  let longest = null;
  // 外側のforループでstartを0から順番に動かす
  for (let i = 0; i < numbers.length; i++) {
    // startごとにsumを0で初期化する
    let sum = 0;
    // 内側のforループでendをstartから順番に動かす
    for (let j = i; j < numbers.length; j++) {
      // numbers[end]をsumに加算する
      sum += numbers[j];
      // 現在の区間のlengthを計算する
      const length = j - i + 1;
      // sumがlimit以下の場合
      //   longestがnullなら現在の区間を格納する
      //   longestが存在し、現在のlengthの方が大きければ更新する
      if (sum <= limit) {
        if (longest === null || length > longest.length ) {
          longest = {start: i, end: j, sum: sum, length: length};
        }
      } else {
        // sumがlimitを超えた場合、内側のループを終了する
        break;
      }
    }
  }
  // 最後にlongestを返す
  return longest;
};

console.log(
  findLongestSubarray([2, 1, 1, 4, 1, 2, 1], 4)
);

// {
//   start: 0,
//   end: 2,
//   sum: 4,
//   length: 3
// }