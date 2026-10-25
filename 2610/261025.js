// ECサイトの注文データから、顧客ごとの有効注文を集計し、購入金額の多い順にランキングを作成する関数getCustomerRankingを実装してください。
const orders = [
  { customerId: "C01", amount: 1000, status: "completed" },
  { customerId: "C02", amount: 2000, status: "completed" },
  { customerId: "C03", amount: 1500, status: "completed" },
  { customerId: "C01", amount: 1500, status: "completed" },
  { customerId: "C02", amount: 500, status: "completed" },
  { customerId: "C04", amount: 3000, status: "cancelled" },
  { customerId: "C03", amount: 1000, status: "cancelled" },
  { customerId: "C05", amount: 500, status: "completed" }
];

const getCustomerRanking = (orders) => {
  // ① 顧客IDを管理するMapを作成する
  const customerInfo = new Map();
  // ② for...ofで注文データを1件ずつ取り出す
  for (const order of orders) {
    // ③ statusがcompletedでなければスキップする
    if ( order.status !== "completed") {
      continue;
    }
    // ④ Mapに顧客IDがなければ、totalSpent: 0、orderCount: 0で初期登録する
    if (!customerInfo.has(order.customerId)) {
      customerInfo.set(order.customerId, {
        totalSpent: 0,
        orderCount: 0,
      })
    }
    // ⑤ Mapから顧客の集計データを取得する
    const customerCal = customerInfo.get(order.customerId);
    // ⑥ totalSpentに注文金額を加算し、orderCountを1増やす
    customerCal.totalSpent += order.amount;
    customerCal.orderCount += 1;
  }
  // ⑦ Mapを配列に変換する
  const orderRanking = [];
  for (const [customerId, data] of customerInfo) {
    orderRanking.push({
      customerId,
      totalSpent: data.totalSpent,
      orderCount: data.orderCount,
    })
  }
  // ⑧ totalSpentの降順で並び替える
  orderRanking.sort((a, b) => {
   if (a.totalSpent === b.totalSpent) {
     // 同額の場合はcustomerIdの昇順にする
    return a.customerId.localeCompare(b.customerId);
   }
   return b.totalSpent - a.totalSpent;
  })
  return orderRanking;
};

console.log(getCustomerRanking(orders));

// [
//   { customerId: "C01", totalSpent: 2500, orderCount: 2 },
//   { customerId: "C02", totalSpent: 2500, orderCount: 2 },
//   { customerId: "C03", totalSpent: 1500, orderCount: 1 },
//   { customerId: "C05", totalSpent: 500, orderCount: 1 }
// ]