import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Cart from "./cart/Cart";
import Header from "./component/header/Header";
import { useCartContext } from "./context/cartContext/CartContext";

function App() {
  const products = useCartContext();
  console.log(products);

  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
