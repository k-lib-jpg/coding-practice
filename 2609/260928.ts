const countConsecutiveNumbersTs = (number: number[]): [number, number][] => {
 //配列を返す入れ物を宣言する
 const result: [number, number][] = [];
 let count = 1;

 //numberが空配列のとき空配列を返す
 if (number.length === 0) {
  return result
 } 

 for (let i = 1; i < number.length; i++) {
 //異なった数字になるまでカウントを増やす
 //異なった数字になったときresultに数列を入れる
  if (number[i - 1] === number[i]) {
    count++;
  } else {
    result.push([number[i - 1], count]);
    count = 1;
  }
 };

 //最後の連続する数字の結果を格納する
 result.push([number[number.length - 1], count]);
 return result;
};

console.log(
  countConsecutiveNumbersTs(
    [1, 1, 2, 2, 2, 3, 1, 1]
  )
);
// [[1, 2], [2, 3], [3, 1], [1, 2]]

console.log(
  countConsecutiveNumbersTs(
    [5, 5, 5, 5]
  )
);
// [[5, 4]]