const dailyTemperaturesTs = (temperatures: number[]): number[] => {
  // 温度のインデックスを保存する空のスタックを作る
  const stack: number[] = [];
  // 温度のデータ数分、0で初期化した結果配列を作る
  const result: number[] = Array<number>(temperatures.length).fill(0);
  // 温度のデータ数分ループする
  for (let i = 0; i < temperatures.length; i++) {
    // スタックが空ではなく、現在の温度がスタック末尾に対応する温度より高い間、処理を繰り返す
    while (stack.length !== 0 && (temperatures[i] > temperatures[stack[stack.length - 1]])) {
      // スタックからインデックスをpopする
      const prevIndex = stack.pop();
      // 現在のインデックスと取り出したインデックスの差を求める
      if (prevIndex !== undefined) {
        const indexDiff = i - prevIndex;
        // 取り出したインデックスの位置に結果を格納する
        result[prevIndex] = indexDiff; 
      }
       
    }
    // 現在のインデックスをスタックにpushする
    stack.push(i);
  }
  // 結果配列を返す
  return result;
};

console.log(dailyTemperaturesTs([23, 24, 25, 21, 19, 22, 26, 23]));
// [1, 1, 4, 2, 1, 1, 0, 0]

console.log(dailyTemperaturesTs([30, 20, 10, 40]));
// [3, 2, 1, 0]

console.log(dailyTemperaturesTs([20, 20, 25]));
// [2, 1, 0]