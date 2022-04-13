import { useContext } from 'react';
import { ShopContext } from '../hooks/context';

import '../assets/svg/cart.svg';

export function Cart() {
  const { order, handleBasketShow = Function.prototype } = useContext(ShopContext);

  const quantity = order.length

  return (
    <div className='cart' id='cart_ID' onClick={handleBasketShow}>
      <svg className='cart__icon'>
        <use xlinkHref='#cart' />
      </svg>
      {quantity ? (
        <span className='cart__quantity'>{quantity}</span>
      ) : (
        <span className='cart__quantity'>0</span>
      )}
    </div>
  );
}
