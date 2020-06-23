const cartItems = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter((cartItem, index) => {
        return index !== action.payload.index;
      });
    case 'ADD_QUANTITY':
      return [...state, state.quantity + 1 === action.payload];
  }
  return state;
};

export default cartItems;
