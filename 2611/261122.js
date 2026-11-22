// 整数の配列numbersを受け取り、各要素について、その要素より右側にある、自分より大きい最初の数を探してください。
// 見つかった場合はその数を、見つからなかった場合は-1を結果の配列に格納して返してください。

const nextGreaterElements = (numbers) => {
  // 空のstackの配列を作る
  const stack = [];
  // 最後に返す配列を作る
  const result = Array(5).fill(-1);
  // numbersの数分for文でループする
  for (let i = 0; i < numbers.length; i++) {
    // 大きな数が出るまでインデックスをスタックする
    if (numbers[i] <= numbers[i-1]) {
      
    }
    // 大きな数が出たらスタックに数字がある間、スタックから数字を出し続けて、resultの配列を変化させる

  }
  // スタックに保存された
  return arr;
};

console.log(nextGreaterElements([2, 1, 5, 6, 3, 7]));
// [5, 5, 6, 7, 7, -1]