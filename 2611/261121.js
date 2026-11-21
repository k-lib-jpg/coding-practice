// 文字列strを受け取り、隣り合う同じ文字を2文字ずつ削除する関数removeAdjacentDuplicatesを作成してください。
// 削除によって新たに同じ文字が隣り合った場合も、削除を繰り返します。
// 最終的に残った文字列を返してください。
const removeAdjacentDuplicates = (str) => {
  // スタックの空配列を作る
  const stack = [];
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

console.log(removeAdjacentDuplicates("abbaca")); // "ca"
