const calculateStockSpanTs = (prices: number[]): number[] => {
  // スタックの空配列を作る
  const stack: number[] = [];
  // 株価のデータ数分、1で初期化した結果配列を作る
  const result: number[] = Array<number>(prices.length).fill(1);
  // pricesのデータ数分ループする
  for (let i = 0; i < prices.length; i++) {
    // スタックが空ではなく、現在の株価がスタック末尾に対応する株価以上である間、処理を繰り返す
    while (stack.length !== 0 && prices[i] >= prices[stack[stack.length - 1]]) {
      // スタック末尾のインデックスをpopする
      const index = stack.pop();
      // popしたインデックスに対応する株価スパンを現在のインデックスの結果に加算する
      if (index !== undefined) {
        result[i] += result[index];
      }

    }
    // 現在のインデックスをスタックにpushする
    stack.push(i);
  }
  // resultを返す
  return result;
};

console.log(calculateStockSpanTs([100, 80, 60, 70, 60, 75, 85]));
// [1, 1, 1, 2, 1, 4, 6]

console.log(calculateStockSpanTs([10, 20, 30, 40]));
// [1, 2, 3, 4]

console.log(calculateStockSpanTs([20, 20, 20]));
// [1, 2, 3]