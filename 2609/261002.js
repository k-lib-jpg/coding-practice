// 文字列の配列wordsを受け取り、最も多く登場する単語を返すmostFrequentWordを作ってください。
const mostFrequentWord = (words) => {
//Mapオブジェクトをインスタンス化する
 const counts = new Map();
//単語の出現回数をカウントする
 for (const word of words) {
  counts.set(word, (counts.get(word) || 0) + 1);
 }
//一番カウントの多いものを返す
 if () {
  return 
 }
};

console.log(
  mostFrequentWord([
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple"
  ])
);
// "apple"

console.log(
  mostFrequentWord([
    "cat",
    "dog",
    "dog",
    "cat",
    "dog"
  ])
);
// "dog"

console.log(
  mostFrequentWord([
    "red",
    "blue",
    "red",
    "blue"
  ])
);
// "red"

console.log(
  mostFrequentWord(["hello"])
);
// "hello"

console.log(
  mostFrequentWord([])
);
// undefined