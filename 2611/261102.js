// 整数の配列numbersと目標値targetを受け取り、合計がtargetになる連続した区間をすべて見つける関数findTargetSubarraysを作成してください。

const findTargetSubarrays = (numbers, target) => {
  // start、end、sumを格納する配列conArrを作成する
  const conArr = [];
  let start = 0;
  let end = 0;
  let sum = 0;
  // 外側のforループでstartを0から順番に動かす
  for (let i = 0; i < numbers.length; i++) {
    // startごとにsumを0で初期化する
    sum = 0;
    start = i;
    // 内側のforループでendをstartから順番に動かす
    for (let j = i; j < numbers.length; j++) {
      // numbers[end]をsumに加算する
      end = j;
      sum += numbers[end];
      // sumがtargetと一致した場合、start、end、sumをオブジェクトとしてconArrに追加する
      if (sum === target) {
        conArr.push({start, end, sum});
      }
    }
  }
  // 最後にconArrを返す
  return conArr;
};

console.log(
  findTargetSubarrays([2, 3, 1, 2, 4, 1], 6)
);

// 模範解答
// const findTargetSubarrays = (numbers, target) => {
//   const conArr = [];

//   for (let i = 0; i < numbers.length; i++) {
//     let sum = 0;

//     for (let j = i; j < numbers.length; j++) {
//       sum += numbers[j];

//       if (sum === target) {
//         conArr.push({
//           start: i,
//           end: j,
//           sum: sum
//         });
//       }
//     }
//   }

//   return conArr;
// };