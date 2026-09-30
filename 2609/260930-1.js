//整数配列numbersを受け取り、配列全体で1回しか登場しない数字のうち、最初に登場する数字を返すfirstUniqueNumber関数を作ってください。
const firstUniqueNumber = (numbers) => {
 for (let i = 0; i < numbers.length; i++) {
  //内ループが終わるごとにリセットするカウント変数を宣言する
  let count = 0;
  for (let j = 0; j < numbers.length; j++) {
    //内ループにてnumbers[i]と一致する数字をカウントする
    if (numbers[i] === numbers[j]) {
     count++;
    }
  }
  //数字が1つしかなければそのまま返す
  if (count === 1) {
    return numbers[i];
  }
 }
 //同一の数字を複数持つような数字で構成された配列であればundefinedを返す
 return undefined;
};

console.log(
  firstUniqueNumber([4, 5, 1, 2, 1, 4, 2])
);
// 5

console.log(
  firstUniqueNumber([1, 2, 2, 1, 3, 4])
);
// 3

console.log(
  firstUniqueNumber([7, 7, 8, 8, 9])
);
// 9

console.log(
  firstUniqueNumber([1, 1, 2, 2])
);
// undefined

console.log(
  firstUniqueNumber([10])
);
// 10

console.log(
  firstUniqueNumber([])
);
// undefined