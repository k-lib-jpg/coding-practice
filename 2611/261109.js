// 昇順にソートされた整数の配列numbersと、探したい整数targetを受け取り、**targetが存在するインデックスを返す関数binarySearch**を作成してください。
// targetが存在しない場合は-1を返してください。
const binarySearch = (numbers, target) => {
  // leftを0で初期化する
  let left = 0;
  // rightをnumbers.length - 1で初期化する
  let right = numbers.length - 1;
  // left <= rightの間、whileループを実行する
  while (left <= right) {
    //  leftとrightから中央のインデックスmidを計算する
    const mid = Math.floor((left + right) / 2);
    //   numbers[mid]とtargetを比較する
    if (numbers[mid] === target) {
      //   一致していればmidを返す
      return mid;
    } else if (numbers[mid] > target) {
      //  numbers[mid]がtargetより大きければ、rightをmid - 1に更新する 
      right = mid - 1;
    } else if (numbers[mid] < target) {
      //  numbers[mid]がtargetより小さければ、leftをmid + 1に更新する
      left = mid + 1;
    }
  }
  // whileループ終了後、-1を返す
  return -1;
};

console.log(
  binarySearch([2, 4, 6, 8, 10, 12, 14], 10)
);