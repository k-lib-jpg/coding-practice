const isValidParentheses = (str) => {
  // スタックの空配列を作る
  const stack = [];
  // 括弧の対応表を作っておく
  const pairs = new Map([[')', '('], ['}', '{'], [']', '[']]);
  // fot文でstrの文字分ループする
  for (const words of str) {
    // 開き括弧が来た場合、スタックに文字をpushする
    
    // 閉じ括弧が来た場合、スタックの文字をpopする
    // popできなかったり、対応する文字でなければfalseを返す
  }
 
  // 最後まで処理した後、スタックが空ならtrueを返す
  // スタックに開き括弧が残っていればfalseを返す
};

console.log(isValidParentheses("{[()]}")); // true
console.log(isValidParentheses("([)]"));   // false