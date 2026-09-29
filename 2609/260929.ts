const longestIncreasingStreakTs = (numbers: number[]): number => {
 //numbersの要素が0のときカウントが0を返す
 if (numbers.length === 0) {
  return 0
 }
 //カウントするための変数とカウントの最大値の変数を宣言する
 let currentLength = 1;
 let maxLength = 1;
 for (let i = 1; i < numbers.length; i++) {
  //次の数字が前の数字よりも大きいとき、countを増やす。そうでなければカウントをリセットする。
  if (numbers[i - 1] < numbers[i]) {
   currentLength++;
   //カウントが前回の並びよりも大きければ最大カウント値を更新する
    if (currentLength > maxLength) {
      maxLength = currentLength;
    };
  } else {
   currentLength = 1;
  };
 };
 return maxLength;
};

console.log(
  longestIncreasingStreakTs(
    [1, 2, 3, 1, 2, 5, 7]
  )
);
// 4

console.log(
  longestIncreasingStreakTs(
    [1, 2, 3, 4, 5]
  )
);
// 5