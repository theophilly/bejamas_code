import * as actionType from './actions';
import { ProductAction, ProductReducerType } from './type';

const intialState: ProductReducerType = {
  products: [],
  loading: false,
  error: '',
  message: '',
};

const productReducer = (
  state = intialState,
  action: ProductAction
): ProductReducerType => {
  if (action.type === actionType.ON_FETCH_SUCCESS) {
    return { ...state, products: action.payload.products, loading: false };
  } else {
    return state;
  }
};

export default productReducer;
