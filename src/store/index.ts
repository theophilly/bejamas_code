import { combineReducers, AnyAction, createStore } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducer imports
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import AppState, { CartAction, ProductAction, IArticle } from './type';

const initialState = {
  productReducer: {
    products: [] as IArticle[],
    loading: false,
    error: '',
    message: '',
  },
  cartReducer: {
    products: [] as IArticle[],
  },
};

const masterReducer = (state: AppState = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      const nextState: AppState = {
        ...state,
        productReducer: {
          ...action.payload.productReducer,
        },
      };
      return nextState;

    default: {
      const combineReducer = combineReducers({
        cartReducer,
        productReducer,
      });
      return combineReducer(state, action as CartAction | ProductAction);
    }
  }
};

const initStore = () => {
  return createStore(masterReducer, composeWithDevTools());
};

export const wrapper = createWrapper(initStore);
