// 整数配列numbersと整数targetを受け取り、合計がtargetになる連続部分配列の個数を返す関数countTargetSubarraysを作成してください。
const countTargetSubarrays = (numbers, target) => {
  // 現在の累積和sumを0で初期化する
  // 条件を満たす区間の個数countを0で初期化する
  // 過去の累積和と登場回数を管理するprefixCountをMapで生成する
  // prefixCountにキー0、値1を登録する（初期状態の累積和0）

  // for文でnumbers.length分ループする
  //   sumにnumbers[i]を加算する
  //   need = sum - targetを計算する
  //   prefixCountにneedが存在する場合
  //     needの登場回数をcountに加算する
  //   prefixCountに現在のsumが存在する場合
  //     sumの登場回数を1増やす
  //   存在しない場合
  //     sumの登場回数を1として登録する

  // countを返す

};

console.log(
  countTargetSubarrays([1, 2, 1, 2, 1], 3)
);

[0,1,3,4,6,7]