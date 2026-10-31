export{};

type Product = {
  productId: string;
  name: string;
  stock: number;
};

type Products = Product[];

type Order = {
  productId: string;
  quantity: number;
};

type Orders = Order[];

type AcceptedOrder = {
  productId: string;
  name: string;
  quantity: number;
};

type AcceptedOrders = AcceptedOrder[];

const products: Products = [
  { productId: "P01", name: "Keyboard", stock: 10 },
  { productId: "P02", name: "Mouse", stock: 5 },
  { productId: "P03", name: "Monitor", stock: 3 }
];

const orders: Orders = [
  { productId: "P01", quantity: 4 },
  { productId: "P02", quantity: 3 },
  { productId: "P01", quantity: 5 },
  { productId: "P03", quantity: 4 },
  { productId: "P02", quantity: 3 },
  { productId: "P99", quantity: 2 },
  { productId: "P01", quantity: 2 }
];

const processOrdersTs = (products: Products, orders: Orders): AcceptedOrders => {
// ① 結果を格納する空の配列を作成する
const orderInfo: AcceptedOrders = [];
// ② productsをコピーしてremainingProductsを作成する
const remainingProducts = products.map((product) => ({
  ...product
}));
// ③ 外側のfor...ofでordersを1件ずつ取り出す
for (const order of orders) {
  // ④ 内側のfor...ofでremainingProductsを1件ずつ取り出す
  for (const remainingProduct of remainingProducts) {
    // ⑤ order.productIdとproduct.productIdが一致するか確認する
      if (order.productId === remainingProduct.productId) {
        // ⑥ 一致した商品の在庫数が注文数量以上か確認する
        // ⑦ 在庫が足りている場合、注文情報を結果の配列に追加する
          if (order.quantity <= remainingProduct.stock) {
            orderInfo.push({productId: remainingProduct.productId, name: remainingProduct.name, quantity:order.quantity});
            // ⑧ 注文を受け付けた商品の在庫数から注文数量を減らす
            remainingProduct.stock -= order.quantity; 
        }
        // ⑨ 商品IDが一致したら、在庫が足りているかどうかに関係なく内側のループを終了する
        break;
      }
   }
  } 
 // ⑩ すべての注文を確認したら、結果の配列をreturnする
 return orderInfo;
};

console.log(processOrdersTs(products, orders));