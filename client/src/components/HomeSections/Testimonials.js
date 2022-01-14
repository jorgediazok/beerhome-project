import React from 'react';
import Testimonial from '../Testimonial';
import '../../styles/Testimonials.scss';

const Testimonials = () => {
  return (
    <section className='testimonials__section'>
      <h1 className='testimonials__title'>Clientes Que Nos Eligen</h1>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <Testimonial
              image='https://pbs.twimg.com/profile_images/606196213369720832/lSvWN_q-_400x400.jpg'
              name='Marcos Arlia'
              profession='Músico y Escritor'
              text='Siempre es bueno para un artista tener una cerveza fría para esos momentos de falta de inspiración. Con Beerhouse puedo tener 
              una siempre ya que los envíos son muy rápidos y eficientes'
            />
            <Testimonial
              image='https://s3media.247sports.com/Uploads/Assets/769/656/9656769.jpg'
              name='Beatríz Soria'
              profession='Escritora y Ensayista'
              text='Realmente la variedad y calidad de los productos de Beerhouse es muy difícil de encontrar en otras cervecerías de Buenos Aires. Cada
              vez que puedo, hago un pedido y en un rato me llega'
            />
            <Testimonial
              image='https://rocksalta.com/wp-content/uploads/2021/04/Manuel-Moretti-Estelares.jpg'
              name='Manuel Moretti'
              profession='Músico y Cantante'
              text='Le recomiendo Beerhouse a todos mis amigos y bandas
              amigas ya que la variedad de cervezas que disponen es enorme.
              Nada como una buena cerveza con amigos un fin de semana!'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
