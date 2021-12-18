import React from 'react';
import '../styles/Product.scss';

const Product = () => {
  const dummyBeer = {
    id: 12,
    img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/130/674/products/beepure-birra11-f5e208bdc9674b0b4715852250372897-640-0.jpg',
    name: 'Beer Random',
    price: 125,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta rem corrupti asperiores hic minus distinctio fuga non, voluptatibus nam odio tempore in velit eveniet aliquid, temporibus, quo sequi. Adipisci, ullam!',
  };

  return (
    <div className='product__container'>
      <div className='product__left'>
        <div className='product__image__container'>
          <img src={dummyBeer.img} alt='beer' className='product__image' />
        </div>
      </div>
      <div className='product__right'>
        <h1 className='product__title'>{dummyBeer.name}</h1>
        <span className='product__price'>${dummyBeer.price}</span>
        <p className='product__description'>{dummyBeer.description}</p>
        <h3 className='product__choose'>Elija la cantidad</h3>
        <div className='product__quantity'>
          <div className='product__options'>
            <select
              type='select'
              id='quantity'
              name='quantity'
              className='product__input'
            />
          </div>
        </div>
        <button type='submit' className='product__button'>
          COMPRAR
        </button>
      </div>
    </div>
  );
};

export default Product;
