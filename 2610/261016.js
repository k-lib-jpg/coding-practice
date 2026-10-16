// ECサイトの商品一覧から、指定された条件に一致する商品だけを抽出し、価格の安い順に並べる関数を作成してください。
const products = [
  { id: "P01", name: "Wireless Mouse", category: "electronics", price: 2500, inStock: true },
  { id: "P02", name: "USB Cable", category: "electronics", price: 800, inStock: true },
  { id: "P03", name: "Notebook", category: "stationery", price: 500, inStock: true },
  { id: "P04", name: "Keyboard", category: "electronics", price: 4500, inStock: false },
  { id: "P05", name: "Mouse Pad", category: "electronics", price: 1200, inStock: true },
  { id: "P06", name: "Ballpoint Pen", category: "stationery", price: 200, inStock: false }
];

const searchProducts = (products, conditions) => {
 const result = [];
//検索条件の確認
 for (const product of products) {

 }
//条件に一致する商品を抽出する

//価格順に並び替える
 const productCost = result.sort((a, b) => {
  if (a.totalSales === b.totalSales) {
    return a.productId.localeCompare(b.productId);
  }
  return b.totalSales - a.totalSales;
 })
};

console.log(searchProducts(products, {
  category: "electronics",
  minPrice: 1000,
  maxPrice: 3000,
  inStockOnly: true
}));
// P05, P01 の順

console.log(searchProducts(products, {
  category: "stationery",
  inStockOnly: false
}));
// P06, P03 の順

console.log(searchProducts(products, {
  minPrice: 2000,
  inStockOnly: true
}));
// P01 のみ

console.log(searchProducts(products, {
  category: "food",
  inStockOnly: false
}));
// []

console.log(searchProducts([], {
  inStockOnly: false
}));
// []