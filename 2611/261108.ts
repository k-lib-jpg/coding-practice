type Longest = {
  start: number,
  end: number,
  substring: string,
  length: number
}

const findLongestUniqueSubstringTs = (str: string): Longest | null => {
  // longestをnullで初期化する
  let longest: Longest | null = null;
  // startを0で初期化する
  let start = 0;
  // seenをSetで生成する
  const seen = new Set<string>();
  // forでendを0からstr.lengthまで動かす
  for (let end = 0; end < str.length; end++) {
    // str[end]がseenに存在する間、whileループを実行する
    while (seen.has(str[end])) {
      //   seenからstr[start]を削除する
      seen.delete(str[start]);
      //   startを1増やす
      start += 1;
    }
    // 重複がなくなったらstr[end]をseenに追加する
    seen.add(str[end]);
    // 現在の区間のlengthを計算する
    const length = end - start + 1;
    // longestがnull、または現在のlengthがlongest.lengthより大きい場合
    //   longestを更新する
    if (longest === null || length > longest.length) {
      // 現在の区間のsubstringを取得する
      const substring = str.substring(start, end + 1);
      longest = { start, end, substring, length };
    }
  }
  // forループ終了後、longestを返す
  return longest;
};

console.log(
  findLongestUniqueSubstringTs("abcabcbb")
);