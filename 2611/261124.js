// 毎日の気温を格納した整数配列temperaturesを受け取り、それぞれの日について、現在より気温が高くなる日まで何日待つ必要があるかを求める関数dailyTemperaturesを作成してください。
// それ以降に気温が高くなる日が存在しない場合は、0を格納してください。

const dailyTemperatures = (temperatures) => {
  // 温度のインデックスを保存する空のスタックを作る
  const stack = [];
  // 温度のデータ数分、0で初期化した結果配列を作る
  const result = Array(temperatures.length).fill(0);
  // 温度のデータ数分ループする
  for (let i = 0; i < temperatures.length; i++) {
    // スタックが空ではなく、現在の温度がスタック末尾に対応する温度より高い間、処理を繰り返す
    while (stack.length !== 0 && (temperatures[i] > temperatures[stack[stack.length - 1]])) {
      // スタックからインデックスをpopする
      const prevIndex = stack.pop();
      // 現在のインデックスと取り出したインデックスの差を求める
      const indexDiff = i - prevIndex;
      // 取り出したインデックスの位置に結果を格納する
      result[prevIndex] = indexDiff;  
    }
    // 現在のインデックスをスタックにpushする
    stack.push(i);
  }
  // 結果配列を返す
  return result;
};

console.log(dailyTemperatures([23, 24, 25, 21, 19, 22, 26, 23]));
// [1, 1, 4, 2, 1, 1, 0, 0]

console.log(dailyTemperatures([30, 20, 10, 40]));
// [3, 2, 1, 0]

console.log(dailyTemperatures([20, 20, 25]));
// [2, 1, 0]