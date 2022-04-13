import { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '@config';

import { Preload } from './Preload';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

import { ShopContext } from '../hooks/context';

export function Shop() {
  const { loading, order, isBasketShow, alertName, setGoods } =
    useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then(res => res.json())
      .then(data => {
        setGoods(data.featured);
      });
  }, []);

  return (
    <main className='main'>
      <div className='container main__container'>
        <Cart quantity={order.length} />
        {loading ? <Preload /> : <GoodsList />}
        {isBasketShow && <BasketList />}
        {alertName && <Alert />}
      </div>
    </main>
  );
}
