export const cartInitialState =
  JSON.parse(localStorage.getItem("cart")) || [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
  UPDATE_CART: "UPDATE_CART"
};

// update localStorage with state for cart
export const updateLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload.product;
    const productInCartIndex = state.findIndex((item) => item.id === id);

    if (productInCartIndex >= 0) {
      const newState = [
        ...state.slice(0, productInCartIndex),
        {
          ...state[productInCartIndex],
          quantity: state[productInCartIndex].quantity + action.payload.count,
        },
        ...state.slice(productInCartIndex + 1),
      ];

      updateLocalStorage(newState);
      return newState;
    }

    const newState = [
      ...state,
      {
        ...action.payload.product,
        quantity: action.payload.count,
      },
    ];

    updateLocalStorage(newState);
    console.log(action.payload);
    return newState;
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload;
    const newState = state.filter((item) => item.id !== id);
    updateLocalStorage(newState);
    return newState;
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([]);
    return [];
  },
  [CART_ACTION_TYPES.UPDATE_CART]: (state, action)=> {
    const { id } = action.payload.product;
    const productInCartIndex = state.findIndex((item) => item.id === id);
    if (productInCartIndex >= 0) {
      const newState = [
        ...state.slice(0, productInCartIndex),
        {
          ...state[productInCartIndex],
          quantity: action.payload.count,
        },
        ...state.slice(productInCartIndex + 1),
      ];

      updateLocalStorage(newState);
      return newState;
    }
  }


};

export const cartReducer = (state, action) => {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(state, action) : state;
};
