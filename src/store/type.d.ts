export interface IArticle {
  _id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  image: {
    src: string;
    alt: string;
  };
  bestseller: boolean;
  featured: boolean;
  details: object;
}

export interface CartReducerType {
  products: IArticle[];
}

export interface ProductReducerType {
  products: IArticle[];
  loading: boolean;
  error: string;
  message: string;
}

export interface CartAction {
  type: string;
  payload: {
    product: IArticle;
    _id: string;
  };
}

export interface ProductAction {
  type: string;
  payload: {
    products: IArticle[];
    error?: string;
  };
}

export default interface AppState {
  productReducer: ProductReducerType;
  cartReducer: CartReducerType;
}
