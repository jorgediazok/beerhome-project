import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/OfertaCard.scss';

const OfertaCard = ({ beers }) => {
  const history = useHistory();

  return (
    <div className='productCard__container'>
      {beers.map((beer) => (
        <div
          key={beer.fields.id}
          className='productCard'
          onClick={() => history.push(`/products/${beer.sys.id}`)}
        >
          <img
            src={beer.fields.image.fields.file.url}
            alt=''
            className='productCard__image'
          />
          <h1 className='productCard__title'>{beer.fields.name}</h1>
          <span className='productCard__price'>$ {beer.fields.price}</span>
          <p className='productCard__description'>{beer.fields.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OfertaCard;
