const isValidParentheses = (str) => {
  // スタックの空配列を作る
  const stack = [];
  // 括弧の対応表を作っておく
  const pairs = new Map([[')', '('], ['}', '{'], [']', '[']]);
  // fot文でstrの文字分ループする
  for (let i = 0; i < str.length; i++) {
    // strの中の文字を格納する
    const char = str[i]; 
    if (char === "(" || char === "[" || char === "{") {
      // 開き括弧が来た場合、スタックに文字をpushする
      stack.push(char);
    } else {
      // 閉じ括弧が来た場合、スタックの文字をpopする
      const close = char;
      const open = stack.pop();
      // popできなかったり、対応する文字でなければfalseを返す
      if (open !== pairs.get(close)) {
        return false;
      }
    }  
  }
  // 最後まで処理した後、スタックが空ならtrueを返す
  // スタックに開き括弧が残っていればfalseを返す
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isValidParentheses("{[()]}")); // true
console.log(isValidParentheses("([)]"));   // false