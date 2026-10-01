//整数配列numbersを受け取り、**同じ数字が2回以上登場したらtrue、すべて異なる数字ならfalse**を返すcontainsDuplicateを作ってください。
const containsDuplicate = (numbers) => {
 //セットオブジェクトをインスタンス化する
 const seenArr = new Set();
 for (let i = 0; i < numbers.length; i++) {
  //配列の中にnumbers[i]と一致するものがないかを確認する
  let duplicateNum = seenArr.has(numbers[i]);
  //配列にnumbers[i]を追加する
  seenArr.add(numbers[i]);
  //一致することが確認できればtrueを返す
  if (duplicateNum === true) {
    return true;
  }
 }
 //一致するものがなければfalseを返す
 return false;
};

console.log(
  containsDuplicate([1, 2, 3, 1])
);
// true

console.log(
  containsDuplicate([1, 2, 3, 4])
);
// false

console.log(
  containsDuplicate([5, 5])
);
// true

console.log(
  containsDuplicate([1])
);
// false

console.log(
  containsDuplicate([])
);
// false

console.log(
  containsDuplicate([3, 1, 4, 2, 4, 5])
);
// true

//模範解答
// const containsDuplicate = (numbers) => {
//   const seen = new Set();

//   for (let i = 0; i < numbers.length; i++) {
//     if (seen.has(numbers[i])) {
//       return true;
//     }

//     seen.add(numbers[i]);
//   }

//   return false;
// };