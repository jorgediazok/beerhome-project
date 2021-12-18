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
          <img src={dummyBeer.img} alt='beer' />
        </div>
      </div>
      <div className='product__right'>
        <h1 className='product__title'>{dummyBeer.name}</h1>
      </div>
    </div>
  );
};

export default Product;
