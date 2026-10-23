// 顧客ごとに次の2つを集計する関数calculateCustomerStatsを作成してください。
// - totalSpent：購入金額の合計
// - orderCount：注文回数

const orders = [
  { customerId: "C01", amount: 1000 },
  { customerId: "C02", amount: 2000 },
  { customerId: "C01", amount: 500 },
  { customerId: "C03", amount: 300 },
  { customerId: "C02", amount: 1000 }
];

const calculateCustomerStats = (orders) => {
  // Idごとにまとめる
  const orderInfoMap = new Map();
  for (const order of orders) {
    // Mapに何も存在しなければ初期データを登録
    if (!orderInfoMap.has(order.customerId)) {
      orderInfoMap.set(order.customerId, {
        totalSpent: 0,
        orderCount: 0
      });
    }
    // 顧客の集計データを取得
    const customer = orderInfoMap.get(order.customerId);
    // totalSpentにorderTotalを加算する
    // totalItemsにitemCountを加算する
    // orderCountを1増やす
    customer.totalSpent += order.amount;
    customer.orderCount += 1;
    
  }
  // Mapを配列に変換する
  const result = [];
  for (const [customerId, data] of orderInfoMap) {
    result.push({
      customerId,
      totalSpent: data.totalSpent,
      orderCount: data.orderCount
    });
  }
  // 結果を返す
  return result;
};

console.log(calculateCustomerStats(orders));