// 数値の配列numbersと数値targetを受け取り、合計がtargetになる2つの数値のインデックスを返すtwoSumを作ってください。
const twoSum = (numbers, target) => {
 //Map()をインスタンス化する
 const addNumber = new Map();
 for (let i = 0; i < numbers.length; i++) {
  //現在のインデックスの数字とターゲットの引き算から求めたい数字を格納する変数を宣言する
  const needNumber = target - numbers[i];
  //現在のneedNumberから昔登録したものがないかを確認する
  if (addNumber.has(needNumber)) {
   //当時のインデックスと現在のインデックスを返す
   return [addNumber.get(needNumber), i]
  }
  //addNumberに数字とそのときのインデックスを記録する
  addNumber.set(numbers[i], i);
 }
 //該当するものがなければundegfinedを返す
 return undefined
};

console.log(
  twoSum([2, 7, 11, 15], 9)
);
// [0, 1]

console.log(
  twoSum([3, 2, 4], 6)
);
// [1, 2]

console.log(
  twoSum([3, 3], 6)
);
// [0, 1]

console.log(
  twoSum([1, 5, 8, 10], 18)
);
// [2, 3]

console.log(
  twoSum([1, 2, 3], 10)
);
// undefined

console.log(
  twoSum([], 5)
);
// undefined