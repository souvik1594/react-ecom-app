import React from "react";

import { useCartContext } from "./../context/cartContext/CartContext";

const CartProductCart = ({ productDetails }) => {
  console.log("🚀 ~ CartProductCart ~ productDetails:", productDetails);
  const { dispatch } = useCartContext();

  const handleRemoveFromCart = (productId) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: productId,
    });
  };

  return (
    <div className="card bg-base-100 w-80 shadow-sm border-2 border-gray-700">
      <figure>
        <img
          src={productDetails.image}
          alt={productDetails.productName}
          className="aspect-video object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          <span className="line-clamp-1">{productDetails.productName}</span>
          {productDetails.newArrival && (
            <div className="badge badge-secondary">NEW</div>
          )}
        </h2>
        <p className="line-clamp-2">{productDetails.description}</p>

        <p>
          <strong>INR {productDetails.price}</strong>
        </p>

        <div className="card-actions justify-between mt-5">
          <button
            className="btn btn-outline btn-error"
            disabled={productDetails.inStock === 0}
            onClick={() => handleRemoveFromCart(productDetails.id)}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCart;
