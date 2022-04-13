import { useContext } from 'react';
import { ShopContext } from '../hooks/context';
import { BasketItem } from './BasketItem';

export function BasketList() {
  const { order = [], handleBasketShow = Function.prototype } =
    useContext(ShopContext);

  const totalPrice = order.reduce((sum, item) => {
    return sum + item.price * item.quality;
  }, 0);

  return (
    <div className='modal-basket'>
      <div
        className='modal-basket__container'
        onClick={e => {
          e.target.classList.contains('modal-basket__container') &&
            handleBasketShow();
        }}
      >
        <div className='modal-basket__content'>
          <h2 className='modal-basket__title'>Cart</h2>
          <button
            className='modal-basket__close-window'
            onClick={handleBasketShow}
          >
            X
          </button>
          <ul className='modal-basket__list'>
            {order.length ? (
              order.map(item => {
                return <BasketItem key={item.id} {...item} />;
              })
            ) : (
              <div>
                <h4 className='modal-basket__no-items'>No items in the cart</h4>
                <h3 className='modal-basket__finaly'>Cart Empty</h3>
              </div>
            )}
          </ul>
          {order.length > 0 && (
            <div className='modal-basket__finaly modal-basket__finaly-checkout'>
              <h3 className='modal-basket__total-cost'>
                Total Cost: {totalPrice}$
              </h3>
              <button className='modal-basket__checkout'>Checkout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
