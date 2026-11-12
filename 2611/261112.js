const calculateRangeSums = (numbers, queries) => {
  // 累積和配列prefixを[0]で初期化する

  // 累積和を管理するpreSumを0で初期化する

  // numbers.length分forループを実行する
  //   preSumにnumbers[i]を加算する
  //   prefixにpreSumを追加する

  // 結果を格納するresultを空配列で初期化する

  // queries.length分forループを実行する
  //   left = queries[j][0]を取得する
  //   right = queries[j][1]を取得する
  //   sum = prefix[right + 1] - prefix[left]を計算する
  //   resultにsumを追加する

  // resultを返す
};

console.log(
  calculateRangeSums(
    [2, 4, 6, 8, 10],
    [[0, 2], [1, 3], [2, 4]]
  )
);