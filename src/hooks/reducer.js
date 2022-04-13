export function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };

    case 'ADD_TO_BASKET': {
      const itemFind = state.order.find(
        orderItem => orderItem.id === payload.id
      );

      let newOrder = null;

      if (!itemFind) {
        const newItem = {
          ...payload,
          quality: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map(orderItem =>
          orderItem.id === payload.id
            ? {
                ...orderItem,
                quality: orderItem.quality + 1,
              }
            : orderItem
        );
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      };
    }

    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter(item => item.id !== payload.id),
      };

    case 'INC_QUANTIFITY':
      return {
        ...state,
        order: state.order.map(item => {
          if (item.id === payload.id) {
            const newQuantity = item.quality + 1;
            return {
              ...item,
              quality: newQuantity,
            };
          } else {
            return item;
          }
        }),
      };

    case 'DEC_QUANTIFITY':
      return {
        ...state,
        order: state.order.map(item => {
          if (item.id === payload.id) {
            const newQuantity = item.quality - 1;
            return {
              ...item,
              quality: newQuantity >= 0 ? newQuantity : 0,
            };
          } else {
            return item;
          }
        }),
      };

    case 'HANDLE_BASKET_SHOW':
      {
        const handleBasketShowOption = value => {
          const toast = document.getElementById('toast_ID');
          const indent = window.innerWidth - document.body.offsetWidth + 'px';
          document.body.style.overflowY = value;
          document.body.style.paddingRight = indent;
          cart_ID.style.marginRight = indent;
          toast && (toast.style.marginRight = indent);
        };

        !state.isBasketShow
          ? handleBasketShowOption('hidden')
          : handleBasketShowOption('');
      }
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };

    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };

    default:
      return state;
  }
}
