import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

function App() {
  const [cart, setCart] = useState([
    {
      desc: "Gaming Laptop",
      price: 1200.0,
      quantityInStock: 3,
      quantity: 2,
    },
    {
      desc: "MacBook Pro",
      price: 2500.0,
      quantityInStock: 2,
      quantity: 1,
    },
    {
      desc: "Smartphone",
      price: 999.0,
      quantityInStock: 0,
      quantity: 0,
    },
    {
      desc: "Desktop PC",
      price: 1500.0,
      quantityInStock: 1,
      quantity: 1,
    },
    {
      desc: "Tablet",
      price: 800.0,
      quantityInStock: 0,
      quantity: 0,
    },
  ]);
  return (
    <>
      <div className="mb-5">
        <ProductList />
      </div>
      <Cart
        cartList={cart}
        onDelete={(desc) => setCart(cart.filter((e) => e.desc !== desc))}
        onDecrease={() => console.log("minus 1")}
        onIncrease={() => console.log("plus 1")}
      />
    </>
  );
}

export default App;
