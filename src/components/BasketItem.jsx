import { useContext } from 'react';
import { ShopContext } from '../hooks/context';

export function BasketItem(props) {
  const { id, name, price, quality } = props;

  const { removeFromBasket, decQuantity, incQuantity } =
    useContext(ShopContext);

  return (
    <li className='modal-basket__item' key={id}>
      <div className='modal-basket__name'>{name}</div>
      <div className='modal-basket__quality'>
        Quality:
        <button
          className='modal-basket__quality-edit'
          onClick={() => decQuantity(id)}
        >
          &#8211;
        </button>
        {quality}
        <button
          className='modal-basket__quality-edit'
          onClick={() => incQuantity(id)}
        >
          +
        </button>
      </div>
      <div className='modal-basket__price'>Cost: {price * quality}$</div>

      <div
        className='modal-basket__delete-button'
        onClick={() => removeFromBasket(id)}
      >
        Delete
      </div>
    </li>
  );
}
