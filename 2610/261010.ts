type Order = {
  userId: string;
  price: number;
  quantity: number;
  status: "completed" | "cancelled";
};

type UserTotal = {
  userId: string;
  total: number;
};

const calculateUserTotalsTs = (orders: Order[]): UserTotal[]  => {
 const result = [];
 const orderContents = new Map<string, number>();
 for (const order of orders) {
  if (order.status === "completed") {
   const orderTotal = order.price * order.quantity;
   const currentTotal = orderContents.get(order.userId) ?? 0;
   orderContents.set(order.userId, currentTotal + orderTotal)
  }
 };
 for (const [userId, total] of orderContents) {
  result.push({ userId, total });
  }
 return result;
}

console.log(
  calculateUserTotalsTs([
    { userId: "A", price: 1000, quantity: 2, status: "completed" },
    { userId: "B", price: 500, quantity: 3, status: "completed" },
    { userId: "A", price: 2000, quantity: 1, status: "cancelled" },
    { userId: "A", price: 300, quantity: 4, status: "completed" }
  ])
);
// [{ userId: "A", total: 3200 }, { userId: "B", total: 1500 }]

console.log(
  calculateUserTotalsTs([
    { userId: "C", price: 100, quantity: 2, status: "cancelled" },
    { userId: "B", price: 200, quantity: 2, status: "completed" },
    { userId: "A", price: 300, quantity: 1, status: "completed" },
    { userId: "B", price: 100, quantity: 3, status: "completed" }
  ])
);
// [{ userId: "B", total: 700 }, { userId: "A", total: 300 }]