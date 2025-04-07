import React from "react";
import { BsLightning } from "react-icons/bs";
import Ratings from "../../component/ratings/Ratings";
import { useCartContext } from "../../context/cartContext/CartContext";

const ProductCard = ({ productDetails }) => {
  const {
    state: { cart },
    dispatch,
  } = useCartContext();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: productDetails,
    });
  };
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

        {productDetails.inStock > 0 ? (
          <div className="badge badge-success">
            {productDetails.inStock} left
          </div>
        ) : (
          <div className="badge badge-error">Out of Stock</div>
        )}

        {productDetails.inStock > 0 &&
          (productDetails.fastDelivery ? (
            <div className="badge badge-success">
              Fast Delivery <BsLightning />
            </div>
          ) : (
            <div className="badge badge-warning">5 days Delivery</div>
          ))}

        <div className="mt-3">
          <Ratings
            defaultRating={productDetails.rating}
            isEditable={false}
            onRatingChange={() => {}}
          ></Ratings>
        </div>

        <div className="card-actions justify-between mt-5">
          {cart.some((item) => item.id === productDetails.id) ? (
            <button
              className="btn btn-outline btn-error"
              disabled={productDetails.inStock === 0}
              onClick={() => handleRemoveFromCart(productDetails.id)}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="btn btn-outline btn-primary"
              disabled={productDetails.inStock === 0}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          )}

          <button
            className="btn btn-outline btn-primary"
            disabled={productDetails.inStock === 0}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
