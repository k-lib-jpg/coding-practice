export{};

type Order = {
  customerId: string,
  amount: number,
}

type Orders = Order[]

type Result = {
  customerId: string,
  totalSpent: number,
  orderCount: number,
}

type Results = Result[]

type OrderInfo = {
  totalSpent: number,
  orderCount: number,
}

const orders: Orders = [
  { customerId: "C01", amount: 1000 },
  { customerId: "C02", amount: 2000 },
  { customerId: "C01", amount: 500 },
  { customerId: "C03", amount: 300 },
  { customerId: "C02", amount: 1000 }
];

const calculateCustomerStatsTs = (orders: Orders): Results => {
  // Idごとにまとめる
  const orderInfoMap = new Map<string, OrderInfo>();
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
    if (customer === undefined) {
      continue;
    }
    // totalSpentにamountを足す
    // orderCountを1増やす
    customer.totalSpent += order.amount;
    customer.orderCount += 1;
    
  }
  // Mapを配列に変換する
  const result: Results = [];
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

console.log(calculateCustomerStatsTs(orders));