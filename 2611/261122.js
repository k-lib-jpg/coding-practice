// 整数の配列numbersを受け取り、各要素について、その要素より右側にある、自分より大きい最初の数を探してください。
// 見つかった場合はその数を、見つからなかった場合は-1を結果の配列に格納して返してください。

const nextGreaterElements = (numbers) => {
  // 空のstackの配列を作る
  const stack = [];
  // 最後に返す配列を作る
  const result = Array(numbers.length).fill(-1);
  // numbersの長さの分ループする
  for (let i = 0; i < numbers.length; i++) {
      // スタックに数字があり、かつスタックの末尾の数より現在の数が大きければ、スタックから数字を出し続けてresultの配列を変化させる
      while (stack.length !== 0 && numbers[i] > numbers[stack[stack.length - 1]]) {
        const index = stack.pop();
        result[index] = numbers[i];
      }

      // インデックスをスタックする
      stack.push(i);
  }
  // resultを返す
  return result;
};

console.log(nextGreaterElements([2, 1, 5, 6, 3, 7]));
// [5, 5, 6, 7, 7, -1]