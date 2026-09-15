type Product = {
  name: string;
  price: number;
  quantity: number;
  inStock: boolean
}

const calculateSalesTs = (products: Product[]): number => {
  let amount:number = 0;

  for (const product of products) {
    if (product.inStock === true) {
      amount += product.price * product.quantity;
    }
  }

  return amount;
};

console.log(
  calculateSalesTs([
    { name: "Keyboard", price: 5000, quantity: 2, inStock: true },
    { name: "Mouse", price: 3000, quantity: 3, inStock: true },
    { name: "Monitor", price: 20000, quantity: 1, inStock: false },
    { name: "USB Cable", price: 1000, quantity: 5, inStock: true }
  ])
);
// 24000