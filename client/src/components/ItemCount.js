import React, { useState } from 'react';
import '../styles/ItemCount.scss';

//STYLES
import '../styles/ItemCount.scss';

//LE PASA POR PROPS INITIAL Y ON ADD

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const handleAdd = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const handleRemove = () => {
    if (cantidad > initial) {
      setCantidad(cantidad - 1);
    }
  };

  const handleOnAdd = () => {
    onAdd(cantidad);
  };

  return (
    <div className='itemCount'>
      <div className='btn-container'>
        <button onClick={handleAdd} className='btn-counter'>
          +
        </button>
        <span className='counter'>{cantidad}</span>
        <button onClick={handleRemove} className='btn-counter'>
          -
        </button>
      </div>
      <div className='btn-cart-container'>
        <button onClick={handleOnAdd} className='btn-cart'>
          Agregar Al Carro
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
