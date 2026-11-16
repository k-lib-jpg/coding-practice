// 整数配列numbersと整数targetを受け取り、合計がtargetになる連続部分配列の個数を返す関数countTargetSubarraysを作成してください。
const countTargetSubarraysTs = (numbers:number[], target:number):number | undefined=> {
  let sum = 0;
  let count = 0;

  const prefixCount = new Map<number,number>();
  prefixCount.set(0, 1);

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];

    const need = sum - target;

    // 今回新しく見つかった区間数を加算
    if (prefixCount.has(need)) {
      count += prefixCount.get(need) ?? 0;
    }

    // 次のループに備えて累積和を記録
    prefixCount.set(sum, (prefixCount.get(sum) ?? 0) + 1);
  }

  return count;
};


console.log(
  countTargetSubarraysTs([1, 2, 1, 2, 1], 3)
);

console.log(
  countTargetSubarraysTs([2, -2, 2], 2)
);

