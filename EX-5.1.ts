interface Book {
  type: "book";
  title: string;
  price: number;
}

interface Electronic {
  type: "electronic";
  name: string;
  price: number;
}

interface Clothing {
  type: "clothing";
  item: string;
  price: number;
}

type Product = Book | Electronic | Clothing;

const products: Product[] = [
  { type: "book", title: "The Great Gatsby", price: 10 },
  { type: "electronic", name: "Smartphone", price: 500 },
  { type: "clothing", item: "T-shirt", price: 20 },
];

const calculateTotalPrice = (products: Product[]): number => {
  let totalPrice = 0;
  for (const product of products) {
    totalPrice += product.price;
  }
  return totalPrice;
};

console.log(calculateTotalPrice(products));
