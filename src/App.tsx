import "./App.css";
import ProductList from "./components/ProductList";

const products = [
  {
    desc: "Gaming Laptop",
    price: 1200.0,
    quantityInStock: 3,
  },
  {
    desc: "MacBook Pro",
    price: 2500.0,
    quantityInStock: 2,
  },
  {
    desc: "iPhone",
    price: 999.99,
    quantityInStock: 0,
  },
  {
    desc: "Mac",
    price: 4500.0,
    quantityInStock: 1,
  },
  {
    desc: "Tablet",
    price: 800.0,
    quantityInStock: 0,
  },
];

function App() {
  return (
    <>
      <div className="mb-5">
        <ProductList
          productList={products}
          onAdd={() => console.log("Added to cart")}
        />
      </div>
    </>
  );
}

export default App;
