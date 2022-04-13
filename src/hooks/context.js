import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setGoods = data => {
    dispatch({ type: 'SET_GOODS', payload: data });
  };

  value.addToBasket = item => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item });
  };

  value.removeFromBasket = id => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id } });
  };

  value.incQuantity = id => {
    dispatch({ type: 'INC_QUANTIFITY', payload: { id } });
  };

  value.decQuantity = id => {
    dispatch({ type: 'DEC_QUANTIFITY', payload: { id } });
  };

  value.handleBasketShow = () => {
    dispatch({ type: 'HANDLE_BASKET_SHOW' });
  };

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
