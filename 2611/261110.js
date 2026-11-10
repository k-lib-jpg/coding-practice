// 昇順にソートされた整数配列numbersと、探したい整数targetを受け取り、targetが最初に登場するインデックスを返す関数findFirstOccurrenceを作成してください。
const findFirstOccurrence = (numbers, target) => {
  // leftを0で初期化する
  // rightをnumbers.length - 1で初期化する
  // result=-1として宣言する
  // left <= rightの間、whileループを実行する
  //   leftとrightから中央のインデックスmidを計算する
  //   numbers[mid]とtargetを比較する
  //   一致していればresult=midと格納した上で、rightをmid-1に更新する
  //   一致していない上でresult=midと格納していれば、resultを返す
  //   numbers[mid]がtargetより大きければrightをmid - 1に更新する
  //   numbers[mid]がtargetより小さければleftをmid + 1に更新する
  // whileループ終了後、-1を返す
};

console.log(
  findFirstOccurrence([1, 2, 2, 2, 3, 4, 5], 2)
);