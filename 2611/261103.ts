type Longest = {
  start: number,
  end: number,
  sum: number,
  length: number
}

const findLongestSubarrayTs = (numbers: number[], limit: number): Longest | null => {
  // 最長区間を格納するlongestをnullにしておく
  let longest: Longest | null = null;
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
  findLongestSubarrayTs([2, 1, 1, 4, 1, 2, 1], 4)
);

// {
//   start: 0,
//   end: 2,
//   sum: 4,
//   length: 3
// }