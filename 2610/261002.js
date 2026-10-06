// 文字列の配列wordsを受け取り、最も多く登場する単語を返すmostFrequentWordを作ってください。
const mostFrequentWord = (words) => {
//wordsが空配列であればundefinedを返す
 if (words.length === 0) {
  return undefined;
 }
//Mapオブジェクトをインスタンス化する
 const counts = new Map();
//単語の出現回数をカウントする
 let maxCount = 0;
 let mostFrequentWords = '';
 for (const countWord of words) {
    // ① 現在の回数を取得する
    const oldCount = counts.get(countWord) ?? 0;
    // ② 1増やす
    const newCount = oldCount + 1;
    // ③ Mapに保存する
    counts.set(countWord, newCount)
    // ④ newCountがmaxCountを超えたら更新する
    if (newCount > maxCount) {
     maxCount = newCount;
     mostFrequentWords = countWord;
    };
 };
//一番カウントの多いものを返す
  return mostFrequentWords;
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