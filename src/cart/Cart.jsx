import React from "react";
import { useCartContext } from "../context/cartContext/CartContext";
import CartProductCart from "./CartProductCart";

function Cart() {
  const {
    state: { cart },
  } = useCartContext();

  const cartLength = cart.length;

  return (
    <>
      <div className="flex flex-wrap gap-4 m-4 justify-center">
        {cartLength === 0 ? (
          <h1 className="text-2xl text-center ">Cart is Empty</h1>
        ) : (
          cart.map((product) => (
            <CartProductCart
              key={product.id}
              productDetails={product}
            ></CartProductCart>
          ))
        )}
      </div>
    </>
  );
}

export default Cart;
