const firstUniqueNumberTs = (numbers: number[]): number | undefined => {
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
  firstUniqueNumberTs([4, 5, 1, 2, 1, 4, 2])
);
// 5

console.log(
  firstUniqueNumberTs([1, 2, 2, 1, 3, 4])
);
// 3