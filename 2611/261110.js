// 昇順にソートされた整数配列numbersと、探したい整数targetを受け取り、targetが最初に登場するインデックスを返す関数findFirstOccurrenceを作成してください。
const findFirstOccurrence = (numbers, target) => {
  // leftを0で初期化する
  let left = 0;
  // rightをnumbers.length - 1で初期化する
  let right = numbers.length - 1;
  // result=-1として宣言する
  let result = -1;
  // left <= rightの間、whileループを実行する
  while (left <= right) {
    //   leftとrightから中央のインデックスmidを計算する
    let mid = Math.floor((left+right)/2);
    //   numbers[mid]とtargetを比較する
    if (numbers[mid] === target) {
      // 一致していればresult=midと格納した上で、rightをmid-1に更新する
      result = mid;
      right = mid - 1;
    } else if (numbers[mid] > target) {
      // numbers[mid]がtargetより大きければrightをmid - 1に更新する
      right = mid - 1;
    } else {
      // numbers[mid]がtargetより小さければleftをmid + 1に更新する
      left = mid + 1;
    }
  }
  // whileループ終了後、一致するものがなければresult=-1を返す
  return result;
};

console.log(
  findFirstOccurrence([1, 2, 2, 2, 3, 4, 5], 2)
);