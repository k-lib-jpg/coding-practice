// 毎日の気温を格納した整数配列temperaturesを受け取り、それぞれの日について、現在より気温が高くなる日まで何日待つ必要があるかを求める関数dailyTemperaturesを作成してください。
// それ以降に気温が高くなる日が存在しない場合は、0を格納してください。

const dailyTemperatures = (temperatures) => {
  // stackを宣言する
  const stack = [];
  // 結果を格納するresultを宣言する
  const result = [];
  // for文で温度のデータ分ループする
  for (let i = 0; i < temperatures.length; i++) {
    // スタックする
    stack.push(temperatures[i]);
    // スタックした前日の温度が現在の温度より小さい場合、
    if (temperatures[i] > stack[stack.length - 1]) {
      // countを宣言する
      const count = 0;
      // スタックをリセットされるまでポップした上でcountを増やす
      while (stack.length !== 0) {
        stack.pop();
        count++;
      }
      result.push(count);
    }
  }
  return result
};

console.log(dailyTemperatures([23, 24, 25, 21, 19, 22, 26, 23]));
// [1, 1, 4, 2, 1, 1, 0, 0]

console.log(dailyTemperatures([30, 20, 10, 40]));
// [3, 2, 1, 0]

console.log(dailyTemperatures([20, 20, 25]));
// [2, 1, 0]

// スタックするための空配列を作る
// temparaturesのデータ数分0を格納した配列を作る
// 温度のデータの数の分ループする
// 