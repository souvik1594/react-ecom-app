import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./cartReducer";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const products = [...Array(50)].map((product) => {
    return {
      id: faker.string.uuid(),
      productName: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price({ min: 100, max: 5000 }),
      image: faker.image.urlPicsumPhotos({
        width: 300,
        height: 300,
      }),
      inStock: faker.helpers.arrayElement([0, 5, 10, 15, 20, 30, 40, 50]),
      fastDelivery: faker.datatype.boolean(),
      newArrival: faker.datatype.boolean(),
      rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
      discount: faker.helpers.arrayElement([0, 5, 10, 15, 20, 30, 40, 50]),
    };
  });

  const [state, dispatch] = useReducer(cartReducer, {
    products,
    cart : []
  });
  return <CartContext.Provider value={{state, dispatch}}>{children}</CartContext.Provider>;
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { useCartContext, CartContextProvider };
