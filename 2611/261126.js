const calculateStockSpan = (prices) => {
  // スタックの空配列を作る
  // 株価のデータ数分、1で初期化した結果配列を作る
  // pricesのデータの数の分ループする
  // スタックが空ではなく、現在の株価がスタック末尾に対応する温度より高い間、処理を繰り返す
  // 
  // resultを返す
};

console.log(calculateStockSpan([100, 80, 60, 70, 60, 75, 85]));
// [1, 1, 1, 2, 1, 4, 6]

console.log(calculateStockSpan([10, 20, 30, 40]));
// [1, 2, 3, 4]

console.log(calculateStockSpan([20, 20, 20]));
// [1, 2, 3]