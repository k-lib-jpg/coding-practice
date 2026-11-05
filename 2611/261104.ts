type FindLongest = {
  start: number,
  end: number,
  sum: number,
  length: number
}

const findLongestSubarraySlidingTs = (numbers: number[], limit: number): FindLongest | null => {
  // 最長区間を格納するlongestをnullで初期化する
  let longest: FindLongest | null = null;
  // start=0として宣言する
  let start = 0;
  // sum=0として宣言する
  let sum = 0;
  // 外側for文でendを0から順番に動かす
  for (let end = 0; end < numbers.length; end++) {
    // endが動くたびsumを加算する
    sum += numbers[end];
    // sumがlimitを上回ったとき、whileループでlimit以下になるまでループを続ける
    while (sum > limit) {
      // sumからnumbers[start]を減算する
      sum -= numbers[start];
      // startに1を足す
      start += 1;
      // limitを下回ったらループを終える
    }
    // 現在の区間のlengthを計算する
    const length = end - start + 1;
    // start <= endの場合、
    // longestがnullなら現在の区間を格納する
    // longestが存在し、現在のlengthの方が大きければ更新する
      if (start <= end && (longest === null || length > longest.length)) {
        longest = {start: start, end: end, sum: sum, length: length};
      }
  }
  // 最後にlongestを返す
  return longest;
};

console.log(
  findLongestSubarraySlidingTs([2, 1, 1, 4, 1, 2, 1], 4)
);