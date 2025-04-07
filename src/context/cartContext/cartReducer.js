export const cartReducer = (state, action) => {
  if(action.type === "ADD_TO_CART"){ 
    console.log('OUTPUT : ', action.payload);
    state = {
      products : [...state.products],
      cart : [...state.cart, action.payload]
    }
  } else if(action.type === "REMOVE_FROM_CART"){ 
    console.log('OUTPUT : ', action.payload);
    state = {
      products : [...state.products],
      cart : state.cart.filter((product) => product.id !== action.payload)
    }
  }
  return state;
};
