import { useEffect, useContext } from 'react';
import { ShopContext } from '../hooks/context';

export function Alert() {
  const { alertName: name = '', closeAlert = Function.prototype } =
    useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [name]);

  return (
    <div className='toast' id='toast_ID'>
      <div className='toast__element'>{name} added in cart</div>
    </div>
  );
}
