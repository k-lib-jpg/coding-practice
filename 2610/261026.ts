export{};

// 商品データの型
type Product = {
  productId: string,
  name: string,
  stock: number,
};

type Products = Product[];

// 注文データの型
type Order = {
  productId: string,
  quantity: number,
};

type Orders = Order[]

// 最終的に返すデータの型
type AvailableOrder = {
  productId: string,
  name: string,
  quantity: number,
};

type AvailableOrders = AvailableOrder[];

const products: Products = [
  { productId: "P01", name: "Keyboard", stock: 10 },
  { productId: "P02", name: "Mouse", stock: 3 },
  { productId: "P03", name: "Monitor", stock: 5 },
  { productId: "P04", name: "USB Cable", stock: 0 }
];

const orders: Orders  = [
  { productId: "P01", quantity: 2 },
  { productId: "P02", quantity: 5 },
  { productId: "P03", quantity: 5 },
  { productId: "P04", quantity: 1 },
  { productId: "P99", quantity: 2 }
];

const getAvailableOrdersTs = (products: Products, orders: Orders): AvailableOrders => {
  // ① 結果を格納する空の配列を作成する
  const availableOrders: AvailableOrders = [];
  // ② 外側のfor...ofでordersを1件ずつ取り出す
  for (const order of orders) {
    // ③ 内側のfor...ofでproductsを1件ずつ取り出す
    for (const product of products) {
      // ④ order.productIdとproduct.productIdが一致するか確認する
      if (order.productId === product.productId) {
        // ⑤ 一致した商品の在庫数が注文数量以上か確認する
        // ⑥ 条件を満たす場合のみ、productId、name、quantityを結果の配列に追加する
        if (order.quantity <= product.stock) {
          availableOrders.push({productId: product.productId, name: product.name, quantity:order.quantity});
        } 
        // ⑦ 一致する商品を確認できたら、内側のループを終了する
        break;
      }
    }
  }
  // ⑧ すべての注文を確認したら、結果の配列をreturnする
  return availableOrders;
};

console.log(getAvailableOrdersTs(products, orders));
