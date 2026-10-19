type OrderStatus = "completed" | "cancelled";

type OrderItem = {
  productId: string;
  price: number;
  quantity: number;
};

type OrderCustomerInfo = {
  totalSpent: number;
  totalItems: number;
  orderCount: number;
}

type CustomerSummary = {
  customerId: string;
  totalSpent: number;
  totalItems: number;
  orderCount: number;
};

type Order = {
  orderId: string;
  customerId: string;
  status: OrderStatus;
  items: OrderItem[];
};

type Orders = Order[];

const orders: Orders = [
  {
    orderId: "O01",
    customerId: "C01",
    status: "completed",
    items: [
      { productId: "P01", price: 1000, quantity: 2 },
      { productId: "P02", price: 500, quantity: 1 }
    ]
  },
  {
    orderId: "O02",
    customerId: "C02",
    status: "completed",
    items: [
      { productId: "P03", price: 2000, quantity: 1 }
    ]
  },
  {
    orderId: "O03",
    customerId: "C01",
    status: "cancelled",
    items: [
      { productId: "P04", price: 3000, quantity: 1 }
    ]
  },
  {
    orderId: "O04",
    customerId: "C01",
    status: "completed",
    items: [
      { productId: "P02", price: 500, quantity: 3 }
    ]
  },
  {
    orderId: "O05",
    customerId: "C03",
    status: "completed",
    items: []
  }
];

const getCustomerSummaryTs = (orders: Orders): CustomerSummary[] => {
  const summary = new Map<string, OrderCustomerInfo>();
  for (const order of orders) {
    if (order.status !== "completed") {
      continue;
    }
    // ① この注文の購入金額と商品個数を計算
    let orderTotal = 0;
    let itemCount = 0;
    for (const item of order.items) {
      orderTotal += item.price * item.quantity;
      itemCount += item.quantity;
    }
    // ② 顧客がMapに存在しなければ初期データを登録
    if (!summary.has(order.customerId)) {
      summary.set(order.customerId, {
        totalSpent: 0,
        totalItems: 0,
        orderCount: 0
      });
    }
    // ③ 顧客の集計データを取得
    const customer = summary.get(order.customerId);
    if (customer === undefined) {
      continue;
    }
        // totalSpentにorderTotalを加算する
    // totalItemsにitemCountを加算する
    // orderCountを1増やす
    customer.totalSpent += orderTotal;
    customer.totalItems += itemCount;
    customer.orderCount += 1;
    
  }
  // Mapを配列に変換する
  const result: CustomerSummary[] = [];
  for (const [customerId, data] of summary) {
    result.push({
      customerId,
      totalSpent: data.totalSpent,
      totalItems: data.totalItems,
      orderCount: data.orderCount
    });
  }
  // totalSpentの降順に並び替える
  const customerInfo = result.sort((a, b) => {
  if (a.totalSpent === b.totalSpent) {
   return a.customerId.localeCompare(b.customerId);
  }
   return b.totalSpent - a.totalSpent;
  });
  // 結果を返す
  return customerInfo
};

console.log(getCustomerSummaryTs(orders));
// 上記の期待する出力と一致する
// [
//   {
//     customerId: "C01",
//     totalSpent: 4000,
//     totalItems: 6,
//     orderCount: 2
//   },
//   {
//     customerId: "C02",
//     totalSpent: 2000,
//     totalItems: 1,
//     orderCount: 1
//   },
//   {
//     customerId: "C03",
//     totalSpent: 0,
//     totalItems: 0,
//     orderCount: 1
//   }
// ]

console.log(getCustomerSummaryTs([]));
// []

console.log(getCustomerSummaryTs([
  {
    orderId: "O01",
    customerId: "C01",
    status: "cancelled",
    items: [{ productId: "P01", price: 1000, quantity: 2 }]
  }
]));
// []