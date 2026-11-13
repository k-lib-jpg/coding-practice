// 整数配列numbersと、複数の区間を表す配列queriesを受け取り、**各区間の合計を配列で返す関数calculateRangeSums**を作成してください。
const calculateRangeSums = (numbers, queries) => {
  // 累積和配列prefixを[0]で初期化する
  let prefix = [0];
  // 累積和を管理するpreSumを0で初期化する
  let preSum = 0;
  // numbers.length分forループを実行する
  for (let i = 0; i < numbers.length; i++) {
    //  preSumにnumbers[i]を加算する
    preSum += numbers[i];
    //  prefixにpreSumを追加する
    prefix.push(preSum);
  }
  // 結果を格納するresultを空配列で初期化する
  let result = [];
  // queries.length分forループを実行する
  for (let j = 0; j < queries.length; j++) {
    // left = queries[j][0]を取得する
    let left = queries[j][0];
    // right = queries[j][1]を取得する
    let right = queries[j][1];
    // sum = prefix[right + 1] - prefix[left]を計算する
    let sum = prefix[right + 1] - prefix[left];
    // resultにsumを追加する
    result.push(sum);
  }
  // resultを返す
  return result;
};

console.log(
  calculateRangeSums(
    [2, 4, 6, 8, 10],
    [[0, 2], [1, 3], [2, 4]]
  )
);