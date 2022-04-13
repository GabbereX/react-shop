import { useContext } from 'react';
import { ShopContext } from '../hooks/context';
import { GoodsItem } from './GoodsItem';

export function GoodsList() {
  const { goods = [] } = useContext(ShopContext);

  return (
    <div className={'card__list'}>
      {goods.length ? (
        goods.map(item => {
          return <GoodsItem key={item.id} {...item} />;
        })
      ) : (
        <h4 className='not-found'>Nothing found</h4>
      )}
    </div>
  );
}
