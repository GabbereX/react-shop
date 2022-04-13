import { useContext } from 'react';
import { ShopContext } from '../hooks/context';
import imageNotFound from '../assets/img/not-found.png';

export function GoodsItem(props) {
  const { id, name, description, price, full_background } = props;

  const { addToBasket } = useContext(ShopContext);

  return (
    <li className='card__item'>
      <img
        className='card__image'
        src={full_background}
        onError={e => (e.target.src = imageNotFound)}
        alt={name}
      />
      <div className='card__content'>
        <h3 className='card__title'>{name}</h3>
        <p className='card__description'>{description}</p>
        <div className='card__price-container'>
          <span className='card__price'>{price}$</span>
          <button
            className='card__button'
            onClick={() =>
              addToBasket({
                id,
                name,
                price,
              })
            }
          >
            Купить
          </button>
        </div>
      </div>
    </li>
  );
}
