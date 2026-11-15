// 整数配列numbersと整数targetを受け取り、合計がtargetになる連続部分配列の個数を返す関数countTargetSubarraysを作成してください。
const countTargetSubarrays = (numbers, target) => {
  // 現在の累積和sumを0で初期化する
  let sum = 0;
  // 条件を満たす区間の個数countを0で初期化する
  let count = 0;
  // 過去の累積和と登場回数を管理するprefixCountをMapで生成する
  let prefixCount = new Map();
  // prefixCountにキー0、値1を登録する（初期状態の累積和0）
  prefixCount.set(0, 1);
  // for文でnumbers.length分ループする
  for (let i = 0; i < numbers.length; i++) {
    // sumにnumbers[i]を加算する
    sum += numbers[i];
    //   need = sum - targetを計算する
    const need = sum - target;
    // prefixCountにneedが存在する場合
    // prefixCountに現在のsumが存在する場合
    // 存在しない場合
    if (prefixCount.has(need)) {
      // needの登場回数をcountに加算する
      count += prefixCount.get(need);
    } else if (prefixCount.has(sum)) {
      // sumの登場回数を1増やす
      prefixCount.set(sum, (prefixCount.get(sum) ?? 0) + 1);
    } else {
      // sumの登場回数を1として登録する
      prefixCount.set(sum, 1);
    }
  }
  // countを返す
  return count;
};

console.log(
  countTargetSubarrays([1, 2, 1, 2, 1], 3)
);

// 0 1
// 1 1
// 3 1
// 4 1
// 6 1
// 7 1
