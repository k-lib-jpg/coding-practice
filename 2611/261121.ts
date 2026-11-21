const removeAdjacentDuplicatesTs = (str: string): string => {
  // スタックの空配列を作る
  const stack: string[] = [];
  // for文でstrの文字数分ループする
  for (let i = 0; i < str.length; i++) {
    // スタックの最後の文字と現在の文字を比較する
    if (str[i] === stack[stack.length - 1]) {
      // 同じであればスタックの最後の文字をpopする
      stack.pop();
    } else {
      // 異なる場合は現在の文字をpushする
      stack.push(str[i]);
    }
  }
  // 最後にスタックの文字を結合して返す
  return stack.join("");
};

console.log(removeAdjacentDuplicatesTs("abbaca")); // "ca"