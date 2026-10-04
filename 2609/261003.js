//文字列textを受け取り、文字列全体で1回しか登場しない文字のうち、最初の文字を返すfirstUniqueCharacterを作ってください。
const firstUniqueCharacter = (text) => {
 //textを文字に分解する
 const researchChar = [...text];
 //Mapをインスタンス化する
 const counts = new Map();
 //カウントして文字の登場回数を求める
 for (const char of researchChar) {
  //現在の回数を取得する
  const nowCounts = counts.get(char) ?? 0;
  //回数を増やす
  const newCounts = nowCounts + 1;
  //Mapに保存する
  counts.set(char, newCounts);
 };
 //数えた文字の中から1回しか出てないものを返す
 for (const char of researchChar) {
  if (counts.get(char) === 1) {
    return char;
  }
 };
 //複数回出てきたり、textが空だったらundefinedを返す
 return undefined;
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

//模範解答
// const firstUniqueCharacter = (text) => {
//   const counts = new Map();

//   for (const char of text) {
//     const nowCounts = counts.get(char) ?? 0;
//     const newCounts = nowCounts + 1;
//     counts.set(char, newCounts);
//   }

//   for (const char of text) {
//     if (counts.get(char) === 1) {
//       return char;
//     }
//   }

//   return undefined;
// };