// 0以上の整数の配列numbersと上限値limitを受け取り、合計がlimit以下になる最長の連続区間を返す関数findLongestSubarraySlidingを作成してください。

const findLongestSubarraySliding = (numbers, limit) => {
  // 最長区間を格納するlongestをnullで初期化する
  // start=0として宣言する
  // sum=0として宣言する
  // 外側for文でendを0から順番に動かす
  // endが動くたびsumを加算する
  // sumがlimitを上回ったとき、whileループでlimit以下になるまでループを続ける
  // sumからnumbers[start]を減算する
  // startに1を足す
  // limitを下回ったらループを終える
  // 現在の区間のlengthを計算する
  // start <= endの場合、
  // longestがnullなら現在の区間を格納する
  // longestが存在し、現在のlengthの方が大きければ更新する
  // 最後にlongestを返す
};

console.log(
  findLongestSubarraySliding([2, 1, 1, 4, 1, 2, 1], 4)
);