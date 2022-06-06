import { CartReducerType, CartAction } from './type';
import * as actionType from './actions';

const initState: CartReducerType = {
  products: [],
};

const cartReducer = (
  state = initState,
  action: CartAction
): CartReducerType => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const { product } = action.payload;
      const check = state.products.find((pr) => pr._id === product?._id);
      if (check) {
        return state;
      } else {
        return {
          ...state,
          products: [...state.products, product],
        };
      }

    case actionType.CLEAR:
      return {
        ...initState,
      };
    default:
      return state;
  }
};
export default cartReducer;
