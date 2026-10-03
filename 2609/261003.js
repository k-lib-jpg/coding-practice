//文字列textを受け取り、文字列全体で1回しか登場しない文字のうち、最初の文字を返すfirstUniqueCharacterを作ってください。
const firstUniqueCharacter = (text) => {
 //textを文字に分解する
 const researchChar = [...text];
 //textが空だったらundefinedを返す
 if (text === '') {
  return undefined;
 }
 //最大値をカウントするための変数を宣言する
 let maxCounts = 0;
 let mostFrequentChar;
 //Mapをインスタンス化する
 const counts = new Map();
 //カウントして文字の最頻値を求める
 for (const char of researchChar) {
  //現在の回数を取得する
  const nowCounts = counts.get(researchChar) ?? 0;
  //回数を増やす
  const newCounts = nowCounts + 1;
  //Mapに保存する
  counts.set(char, newCounts);
  //最頻値を記録する
  if (newCounts > maxCounts) {
    maxCounts = newCounts;
    mostFrequentChar = char;
  }
 };
 //最頻値を返す
 return mostFrequentChar;
};

console.log(
  firstUniqueCharacter("aabbcddee")
);
// "c"

console.log(
  firstUniqueCharacter("leetcode")
);
// "l"

console.log(
  firstUniqueCharacter("aabbcc")
);
// undefined

console.log(
  firstUniqueCharacter("x")
);
// "x"

console.log(
  firstUniqueCharacter("")
);
// undefined

console.log(
  firstUniqueCharacter("aabbccd")
);
// "d"